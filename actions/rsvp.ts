'use server';

interface RSVPFormData {
  email: string;
}

interface AirtableResponse {
  success: boolean;
  message: string;
}

export async function submitRSVP(
  prevState: AirtableResponse | null,
  formData: FormData
): Promise<AirtableResponse> {
  const email = formData.get('email') as string;

  if (!email || !email.trim()) {
    return {
      success: false,
      message: 'Email is required',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address',
    };
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    return {
      success: false,
      message: 'Server configuration error. Please contact support.',
    };
  }

  try {
    
    const encodedTableName = encodeURIComponent(tableName);
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodedTableName}`;
    
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

    if (!response.ok) {
      let errorMessage = 'Failed to submit RSVP. Please try again.';
      const responseText = await response.text();
      
      try {
        const errorData = JSON.parse(responseText);
        console.error('Airtable API error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });
        
        
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

    return {
      success: true,
      message: 'Thank you for your RSVP! We look forward to seeing you.',
    };
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      message: `An error occurred: ${errorMessage}. Please try again later.`,
    };
  }
}
