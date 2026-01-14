import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import RSVPForm from '@/components/RSVPForm';

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col">
      
      <div className="relative w-full min-h-[600px] md:h-[693px] flex flex-col">
        
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src="/hero.png"
            alt="AI Background"
            fill
            className="object-cover object-center"
            priority
          />
          
          <div className="absolute inset-0 bg-black/20" />
        </div>

        
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 md:px-6 h-full flex flex-col justify-center pb-8 md:pb-0">
          
          <div className="absolute top-4 md:top-10 left-4 md:left-6">
            <Image 
              src="/logo.png" 
              alt="Simplilearn Logo" 
              width={280} 
              height={86}
              className="object-contain w-[140px] md:w-[280px] h-auto"
            />
          </div>

          <div className="mt-24 md:mt-20">
            
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-3 mb-6">
              <span className="inline-flex w-fit md:w-[174px] h-[40px] md:h-[56px] items-center justify-center bg-[#00ffff] rounded-[6px] px-4 md:px-0">
                <span 
                  className="text-[#25286A] text-base md:text-[25px] font-bold leading-none"
                  style={{ 
                    WebkitTextStroke: '1px black' 
                  }}
                >
                  Invite-Only
                </span>
              </span>
              <span className="text-[#00ffff] text-base md:text-[25px] leading-none md:ml-4">
                An Executive Roundtable • Lunch
              </span>
            </div>

           
            <h1 
              className="text-[#F5AB40] text-2xl md:text-[46px] leading-[1.1] mb-6 md:mb-10 font-black"
              style={{ WebkitTextStroke: '1px black' }}
            >
              
              <span className="font-black">The Skills That Matter Next:</span>
              <br />
              
              <span className="font-bold">Preparing Your Workforce<br />
              & Leaders for the AI Era</span>
            </h1>

            
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-3 md:gap-4 text-white">
                <Calendar className="w-5 h-5 md:w-7 md:h-7 text-white flex-shrink-0" />
                <span className="text-base md:text-2xl font-bold">February 20, 2026</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-white">
                <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white flex-shrink-0" />
                <span className="text-base md:text-2xl font-bold tracking-tight">
                  Chamberlain's Steak & Fish House, Dallas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-white md:bg-gradient-to-b md:from-[#f3f4f6] md:to-[#9ca3af] border-y border-gray-200 md:border-white/40 py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="max-w-5xl">
            <RSVPForm />
          </div>
        </div>
      </div>

      
      <div className="bg-white py-3 md:py-20 px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto space-y-2">
          <div className="space-y-6">
            <p className="text-gray-800 text-xl leading-relaxed">
              AI is accelerating change across every operational layer. Roles are shifting. 
              Leadership models are collapsing and reforming. Frontline and mid-level 
              managers will soon lead teams of people and intelligent agents.
            </p>
            
            <p className="text-gray-800 text-xl">
              But even the most advanced enterprises are asking the same question:
            </p>
          </div>

          <div className="py-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black leading-tight">
              Which capabilities will matter most,<br />
              and how do we build them at scale?
            </h2>
          </div>

          
          <div className="rounded-sm">
            <p className="text-gray-900 text-xl">
              This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce 
              leaders for a candid, senior-level discussion on what's coming next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}