import HeroSection from '@/components/sections/HeroSection';
import ExploreSection from '@/components/sections/ExploreSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import InsightsSection from '@/components/sections/InsightsSection';
import AgendaSection from '@/components/sections/AgendaSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExploreSection />
      <SpeakersSection />
      <InsightsSection />
      <AgendaSection/>
      <FooterSection/>
    </main>
  );
}
