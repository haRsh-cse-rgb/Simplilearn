# Airtable Setup Guide

Complete guide to setting up Airtable for RSVP form submissions.

## Step 1: Create Airtable Account

1. Go to [airtable.com](https://airtable.com)
2. Sign up for a free account (or log in if you have one)
3. Verify your email address

## Step 2: Create a Base

1. From your Airtable home, click **"Add a base"**
2. Choose **"Start from scratch"**
3. Name it: **"Event RSVPs"** (or any name you prefer)
4. Click on the base to open it

## Step 3: Create the Table

1. Click on the default table name ("Table 1") and rename it to **"RSVP"**
2. You'll see a default grid view

## Step 4: Set Up Fields

Delete any default fields and create these exact fields:

### Field 1: Email
- **Type:** Single line text
- **Name:** `Email`
- Click the **"+"** to add a new field
- Select **"Single line text"**
- Name it `Email`

### Field 2: Submitted At
- **Type:** Date with time
- **Name:** `Submitted At`
- Click **"+"** → **"Date"**
- Enable **"Include a time field"**
- Name it `Submitted At`

### Field 3: Event
- **Type:** Single line text
- **Name:** `Event`
- Click **"+"** → **"Single line text"**
- Name it `Event`

### Field 4: Date
- **Type:** Single line text
- **Name:** `Date`
- Click **"+"** → **"Single line text"**
- Name it `Date`

### Field 5: Location
- **Type:** Long text
- **Name:** `Location`
- Click **"+"** → **"Long text"**
- Name it `Location`

Your table should look like this:

```
| Email | Submitted At | Event | Date | Location |
|-------|--------------|-------|------|----------|
```

## Step 5: Get Your API Credentials

### Get Your API Key (Personal Access Token)

1. Click your profile icon in the top-right corner
2. Go to **"Developer hub"** or **"Account"**
3. Find **"Personal access tokens"**
4. Click **"Create new token"**
5. Name it: **"Landing Page RSVP"**
6. Set expiration: **Never** (or set to your preference)
7. Add scopes:
   - ✓ **data.records:write**
   - ✓ **data.records:read** (optional, but recommended)
8. Add access to your base:
   - Click **"Add a base"**
   - Select **"Event RSVPs"** base
9. Click **"Create token"**
10. **Copy the token immediately** (you won't be able to see it again!)
11. Save it in your `.env.local` as `AIRTABLE_API_KEY`

### Get Your Base ID

1. Open your **"Event RSVPs"** base
2. Go to **Help** menu (question mark icon) → **"API documentation"**
3. Or visit: `https://airtable.com/api`
4. Select your base from the list
5. In the introduction, you'll see:
   ```
   The ID of this base is appXXXXXXXXXXXXXX
   ```
6. Copy the ID (starts with `app`)
7. Save it in your `.env.local` as `AIRTABLE_BASE_ID`

### Get Your Table Name

1. Your table name is exactly what you named it: **"RSVP"**
2. **Important:** It's case-sensitive!
3. Save it in your `.env.local` as `AIRTABLE_TABLE_NAME=RSVP`

## Step 6: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=RSVP
```

Replace:
- `patXXXX...` with your actual personal access token
- `appXXXX...` with your actual base ID
- Keep `RSVP` as is (or change if you used a different table name)

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit [http://localhost:3000](http://localhost:3000)

3. Fill out the RSVP form with a test email

4. Submit the form

5. Check your Airtable base - you should see a new row with:
   - Email address you entered
   - Timestamp of submission
   - Event name
   - Event date
   - Location

## Viewing Submissions

### In Airtable Web Interface

1. Go to [airtable.com](https://airtable.com)
2. Open your **"Event RSVPs"** base
3. Click on the **"RSVP"** table
4. All submissions appear as rows

### Creating Views

Create custom views to organize your RSVPs:

#### Recent Submissions View
1. Click **"Grid view"** dropdown
2. Select **"Create new view"**
3. Choose **"Grid"**
4. Name it: **"Recent First"**
5. Click **"Sort"**
6. Sort by **"Submitted At"** → **Z → A** (newest first)

#### By Date View
1. Create another view
2. Name it: **"By Email Domain"**
3. Group by email (optional)

## Troubleshooting

### "Invalid API key"
- Make sure you copied the full token
- Check for extra spaces or characters
- Ensure the token has `data.records:write` scope
- Verify the token has access to your base

### "Could not find table"
- Check the table name is exactly **"RSVP"** (case-sensitive)
- Make sure the table exists in your base
- Try copying the table name directly from Airtable

### "Base not found"
- Verify your Base ID starts with `app`
- Check you're using the correct base
- Ensure your access token has permission for this base

### Form submits but no data appears
1. Check browser console for errors
2. Check terminal/server logs
3. Verify all environment variables are set
4. Restart your development server after changing `.env.local`

## Security Best Practices

1. **Never commit `.env.local`** to version control
   - Already in `.gitignore`

2. **Use different tokens for development and production**
   - Create separate tokens with limited scopes

3. **Rotate tokens periodically**
   - Create new token
   - Update environment variables
   - Delete old token

4. **Limit token scopes**
   - Only grant necessary permissions
   - Remove read access if not needed

## Airtable Limits (Free Plan)

- **1,200 records per base**
- **2 GB of attachments per base**
- **Unlimited bases**
- **5 API requests per second**

For more RSVPs, consider upgrading or using multiple bases.

## Exporting Data

### Export to CSV
1. Open your base
2. Click **"..."** (more options)
3. Select **"Download CSV"**
4. Save the file

### Export to Excel
Use the CSV export and open in Excel

### API Access
Use Airtable API to programmatically export data:
```bash
curl "https://api.airtable.com/v0/YOUR_BASE_ID/RSVP" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Advanced: Automations

Set up Airtable automations to:
- Send confirmation emails (requires paid plan)
- Notify team on Slack
- Add to Google Sheets
- Trigger webhooks

1. In your base, click **"Automations"**
2. Create a new automation
3. Trigger: **When record is created**
4. Action: Choose from available integrations

## Support Resources

- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [Airtable Guides](https://support.airtable.com)
- [Community Forum](https://community.airtable.com)

---

**Need Help?** Check the [SETUP.md](./SETUP.md) file for more troubleshooting tips.
