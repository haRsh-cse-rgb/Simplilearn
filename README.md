# Simplilearn Event RSVP Website

A modern Next.js event landing page with RSVP functionality, featuring sections for hero, speakers, agenda, insights, and more.

## Tech Stack

- **Next.js** 13.5.1
- **React** 18.2.0
- **TypeScript**
- **Tailwind CSS**
- **Airtable** (for RSVP data storage)
- **Radix UI** components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simplilearn
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=your_airtable_table_name_here
```

### How to get Airtable credentials:

1. **AIRTABLE_API_KEY**: 
   - Go to [Airtable Account](https://airtable.com/account)
   - Navigate to "Developer" section
   - Create a new Personal Access Token
   - Copy the token value

2. **AIRTABLE_BASE_ID**: 
   - Open your Airtable base
   - Go to "Help" → "API documentation"
   - Find your Base ID in the API documentation URL (e.g., `appXXXXXXXXXXXXXX`)

3. **AIRTABLE_TABLE_NAME**: 
   - The name of your table in Airtable (e.g., "RSVPs", "Attendees")
   - Make sure the table has an "Email" field

### Important Notes

- The `.env.local` file should never be committed to version control
- Make sure your Airtable table has an "Email" field for RSVP submissions
- Ensure your Airtable API key has proper permissions to write to the specified table

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/               # UI components
│   └── RSVPForm.tsx     # RSVP form component
├── actions/              # Server actions
│   └── rsvp.ts          # RSVP submission logic
└── public/              # Static assets
```

## Features

- Responsive event landing page
- RSVP form with email validation
- Integration with Airtable for data storage
- Modern UI with Tailwind CSS
- TypeScript for type safety

## License

Private project
