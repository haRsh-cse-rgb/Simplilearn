# Landing Page Setup Instructions

This is a Next.js landing page for the AI-Powered Roundtables Launch event with Airtable integration for RSVP form submissions.

## Prerequisites

- Node.js 18+ installed
- An Airtable account (free tier works)
- npm or yarn package manager

## Environment Setup

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Configure Airtable

#### Step 1: Create an Airtable Base

1. Go to [Airtable](https://airtable.com) and sign in
2. Create a new base called "Event RSVPs" (or any name you prefer)
3. Create a table called "RSVP" with the following fields:
   - **Email** (Single line text)
   - **Submitted At** (Date with time)
   - **Event** (Single line text)
   - **Date** (Single line text)
   - **Location** (Long text)

#### Step 2: Get Your Airtable Credentials

1. **API Key:**
   - Go to [Airtable Account](https://airtable.com/account)
   - Generate a personal access token with `data.records:write` scope
   - Copy the token

2. **Base ID:**
   - Open your base
   - Go to Help → API Documentation
   - Your Base ID is shown in the introduction (format: `appXXXXXXXXXXXXXX`)

3. **Table Name:**
   - Use the exact name of your table (case-sensitive)
   - Default: "RSVP"

#### Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```
   AIRTABLE_API_KEY=your_actual_api_key_here
   AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
   AIRTABLE_TABLE_NAME=RSVP
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero with RSVP form
│   │   ├── ExploreSection.tsx # What We'll Explore section
│   │   └── SpeakersSection.tsx # Featured Speakers section
│   └── RSVPForm.tsx          # RSVP form component
├── actions/
│   └── rsvp.ts               # Server Action for form submission
└── .env.local                # Environment variables (not in git)
```

## Features

- **Server-Side Rendering:** Built with Next.js App Router
- **Server Actions:** Form submission handled server-side (no API routes needed)
- **Airtable Integration:** RSVP submissions stored directly in Airtable
- **Responsive Design:** Mobile-first, fully responsive layout
- **Form Validation:** Client and server-side validation
- **Error Handling:** User-friendly error messages
- **Success States:** Confirmation messages after successful submission

## Adding More Sections

To add additional sections:

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Maintain consistent styling and layout patterns

Example:
```tsx
// components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-16">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreSection />
      <SpeakersSection />
      <NewSection /> {/* Add your new section */}
    </main>
  );
}
```

## Troubleshooting

### Form Submission Fails

1. Check your `.env.local` file has correct credentials
2. Verify Airtable API token has `data.records:write` scope
3. Ensure table name matches exactly (case-sensitive)
4. Check browser console and terminal for error messages

### Styling Issues

- This project uses Tailwind CSS
- All custom styles are inline or in component style tags
- Refer to `tailwind.config.ts` for theme customization

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

**Important:** Never commit `.env.local` to version control. Always use environment variables in your deployment platform.

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
