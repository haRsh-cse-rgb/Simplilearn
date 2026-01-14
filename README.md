# AI-Powered Roundtables Landing Page

A pixel-perfect, production-ready landing page built with Next.js 13.5.1, featuring Server Actions for form submission and Airtable integration.

## Overview

This landing page promotes the "AI-Powered Roundtables Launch" event by Simplilearn. It features:

- **Hero Section** with animated background, event details, and RSVP form
- **What We'll Explore** section showcasing key capabilities and enterprise shifts
- **Featured Speakers** section highlighting industry leaders

## Tech Stack

- **Framework:** Next.js 13.5.1 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Backend:** Server Actions (no API routes needed)
- **Database:** Airtable for RSVP submissions

## Features

### Server-Side Architecture
- React Server Components by default for optimal performance
- Server Actions handle form submissions securely
- No client-side JavaScript for static content

### Form Management
- Fully functional RSVP form with email validation
- Real-time submission feedback
- Success and error states
- Direct integration with Airtable

### Design
- Pixel-perfect implementation matching provided screenshots
- Responsive design for mobile, tablet, and desktop
- Animated particle background effect
- Professional color scheme and typography

### Performance
- Optimized for production deployment
- Static page generation where possible
- Minimal client-side JavaScript
- Fast Time to Interactive (TTI)

## Project Structure

```
├── app/
│   ├── page.tsx              # Main landing page component
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and Tailwind directives
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero with event info and RSVP form
│   │   ├── ExploreSection.tsx # Enterprise capabilities grid
│   │   └── SpeakersSection.tsx # Featured speakers with bios
│   └── RSVPForm.tsx          # Client component for form handling
│
├── actions/
│   └── rsvp.ts               # Server Action for Airtable submission
│
├── .env.example              # Environment variable template
├── SETUP.md                  # Detailed setup instructions
└── README.md                 # This file
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Airtable credentials:

```env
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=RSVP
```

### 3. Set Up Airtable

Create a table named "RSVP" with these fields:
- **Email** (Single line text)
- **Submitted At** (Date with time)
- **Event** (Single line text)
- **Date** (Single line text)
- **Location** (Long text)

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

## Detailed Documentation

For comprehensive setup instructions, including:
- Step-by-step Airtable configuration
- Environment variable setup
- Troubleshooting guide
- Deployment instructions

See **[SETUP.md](./SETUP.md)**

## Architecture Decisions

### Why Server Actions?
Server Actions provide a secure, built-in way to handle form submissions without creating separate API routes. Benefits:
- Type-safe integration between client and server
- Automatic CSRF protection
- Progressive enhancement support
- Simplified code organization

### Why Airtable?
Airtable offers:
- No-code database setup
- Built-in admin interface for viewing submissions
- Real-time updates
- Generous free tier
- Easy integration with other tools

### Component Structure
Each section is a separate component for:
- Easy maintenance
- Simple addition of new sections
- Clear separation of concerns
- Reusability

## Adding New Sections

1. Create a new component in `components/sections/`:

```tsx
// components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Import and add to `app/page.tsx`:

```tsx
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExploreSection />
      <SpeakersSection />
      <NewSection /> {/* Add here */}
    </main>
  );
}
```

## Customization

### Colors
Main colors used (can be customized in components):
- Primary Orange: `#f97316`
- Cyan Accent: `#22d3ee` and `#06b6d4`
- Blue Background: `#2563eb`
- Dark Background: `#0a0e27`
- Amber Text: `#fbbf24`

### Typography
Uses system fonts via Tailwind's default font stack. To customize:

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

### Spacing
Follows Tailwind's spacing scale. Main sections use:
- `py-16` for vertical padding
- `max-w-7xl mx-auto px-6` for content container

## Deployment

### Netlify (Configured)
The project includes `netlify.toml` for automatic deployment:

1. Push to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_NAME`
4. Deploy

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
Build command: `npm run build`
Output directory: `.next`
Install command: `npm install`

**Important:** Always add environment variables in your deployment platform. Never commit `.env.local` to version control.

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## Performance Metrics

Target metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

## License

Proprietary - All rights reserved

## Support

For issues or questions:
- Review [SETUP.md](./SETUP.md) for detailed instructions
- Check Next.js [documentation](https://nextjs.org/docs)
- Review Airtable [API docs](https://airtable.com/developers/web/api/introduction)

---

Built with Next.js 13.5.1 • Deployed on Netlify
