/**
 * RSVP Server Action
 * 
 * Server-side action for handling RSVP form submissions.
 * Validates email input and submits data to Airtable API.
 * Returns success/error status and user-friendly messages.
 */

'use server';

/**
 * Interface for RSVP form data structure
 */
interface RSVPFormData {
  email: string;
}

/**
 * Interface for API response structure
 */
interface AirtableResponse {
  success: boolean;
  message: string;
}

/**
 * Submits RSVP form data to Airtable
 * 
 * @param prevState - Previous form state (not used, required by useFormState)
 * @param formData - Form data containing the email field
 * @returns Promise resolving to AirtableResponse with success status and message
 */
export async function submitRSVP(
  prevState: AirtableResponse | null,
  formData: FormData
): Promise<AirtableResponse> {
  // Extract email from form data
  const email = formData.get('email') as string;

  // Validate email presence
  if (!email || !email.trim()) {
    return {
      success: false,
      message: 'Email is required',
    };
  }

  // Validate email format using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address',
    };
  }

  // Retrieve Airtable configuration from environment variables
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  // Validate environment configuration
  if (!apiKey || !baseId || !tableName) {
    return {
      success: false,
      message: 'Server configuration error. Please contact support.',
    };
  }

  try {
    // Encode table name for URL safety
    const encodedTableName = encodeURIComponent(tableName);
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodedTableName}`;
    
    // Make POST request to Airtable API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Email: email,
        },
      }),
    });

    // Handle API errors
    if (!response.ok) {
      let errorMessage = 'Failed to submit RSVP. Please try again.';
      const responseText = await response.text();
      
      try {
        // Parse error response for detailed error messages
        const errorData = JSON.parse(responseText);
        console.error('Airtable API error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });
        
        // Provide specific error messages based on error type
        if (errorData.error) {
          if (errorData.error.type === 'INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND') {
            errorMessage = 'Invalid API key or base ID. Please check your configuration.';
          } else if (errorData.error.type === 'TABLE_NOT_FOUND') {
            errorMessage = `Table "${tableName}" not found. Please check your table name.`;
          } else if (errorData.error.type === 'UNKNOWN_FIELD_NAME') {
            const fieldName = errorData.error.message.match(/Unknown field name: "(.+)"/)?.[1] || 'unknown';
            errorMessage = `Field "${fieldName}" not found in your Airtable table. Please check that the Email field exists.`;
          } else if (errorData.error.message) {
            errorMessage = `Airtable error: ${errorData.error.message}`;
          }
        }
      } catch (parseError) {
        // Handle case where error response is not valid JSON
        console.error('Airtable API error (unparseable):', {
          status: response.status,
          statusText: response.statusText,
          body: responseText,
        });
      }
      
      return {
        success: false,
        message: errorMessage,
      };
    }

    // Success response
    return {
      success: true,
      message: 'Thank you for your RSVP! We look forward to seeing you.',
    };
  } catch (error) {
    // Handle network or unexpected errors
    console.error('Error submitting to Airtable:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      message: `An error occurred: ${errorMessage}. Please try again later.`,
    };
  }
}
