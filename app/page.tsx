/**
 * Home Page Component
 * 
 * The main landing page for the event.
 * Composes all section components in the correct order:
 * 1. Hero section with event title and RSVP
 * 2. Explore section with key topics
 * 3. Speakers section with featured speakers
 * 4. Insights section with takeaways
 * 5. Agenda section with event schedule
 * 6. Footer section with final CTA
 */

import HeroSection from '@/components/sections/HeroSection';
import ExploreSection from '@/components/sections/ExploreSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import InsightsSection from '@/components/sections/InsightsSection';
import AgendaSection from '@/components/sections/AgendaSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with event title, date, location, and primary RSVP form */}
      <HeroSection />
      
      {/* Section showcasing key topics and capabilities to be explored */}
      <ExploreSection />
      
      {/* Section featuring event speakers and their backgrounds */}
      <SpeakersSection />
      
      {/* Section highlighting key insights and takeaways with RSVP form */}
      <InsightsSection />
      
      {/* Section displaying the event agenda and schedule */}
      <AgendaSection/>
      
      {/* Footer with final call-to-action and company information */}
      <FooterSection/>
    </main>
  );
}
