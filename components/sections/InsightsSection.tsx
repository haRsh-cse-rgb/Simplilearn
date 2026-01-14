import Image from 'next/image';
import RSVPForm from '@/components/RSVPForm';

const takeaways = [
  "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
  "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
  "Signals for where capability gaps may already be forming in your organization.",
  "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
  "Actionable insights you can take straight into your next exec meeting.",
];

export default function InsightsSection() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          
          <div className="w-full lg:w-3/5 space-y-10">
            
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#ffb800] leading-tight mb-6">
                Go behind the curtain with real examples and high-scale insights
              </h2>
              <p className="text-xl md:text-2xl text-gray-900 font-medium">
                You'll walk away with:
              </p>
            </div>

            
            <ul className="space-y-8">
              {takeaways.map((item, index) => (
                <li key={index} className="flex items-start">
                  
                  <div className="border-l-[3px] border-[#ffb800] pl-6 py-1">
                    <p className="text-gray-900 text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            
            <div className="pt-8 max-w-2xl">
              <RSVPForm />
            </div>

          </div>

          
          <div className="w-full lg:w-2/5 flex justify-start lg:justify-end mt-8 lg:mt-0">
           
            <div className="relative w-full max-w-[280px] md:max-w-[400px] lg:max-w-none lg:min-w-[500px]">
              <Image
                src="/chess.png"
                alt="Strategic Chess Pieces"
                width={800}
                height={800}
                className="object-contain w-full h-auto drop-shadow-xl object-left md:object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}