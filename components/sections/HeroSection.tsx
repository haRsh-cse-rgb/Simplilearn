import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import RSVPForm from '@/components/RSVPForm';

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col">
      {/* --- FULL HEIGHT HERO SECTION --- */}
      <div className="relative w-full h-[572px] md:h-[693px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src="/hero.png"
            alt="AI Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle overlay to match the deep blue/black aesthetic */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 h-full flex flex-col justify-center">
          {/* Simplilearn Logo - Positioned top left inside the container */}
          <div className="absolute top-10 left-6">
            <Image 
              src="/logo.png" 
              alt="Simplilearn Logo" 
              width={280} 
              height={86}
             
              className="object-contain"
            />
          </div>

          <div className="mt-20">
            {/* Labels */}
            <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex w-[174px] h-[56px] items-center justify-center bg-[#00ffff] rounded-[6px]">
  <span 
    className="text-[#25286A] text-[25px] font-bold leading-none"
    style={{ 
      WebkitTextStroke: '1px black' 
    }}
  >
    Invite-Only
  </span>
</span>
<span className="text-[#00ffff] text-[25px] font-serif leading-none ml-4">
  An Executive Roundtable · Lunch
</span>
            </div>

            {/* Headline */}
            <h1 
  className="text-[#F5AB40] text-[46px] leading-[1.1] mb-10"
  style={{ WebkitTextStroke: '1px black' }}
>
  {/* First line: Weight 900 (font-black) */}
  <span className="font-black">The Skills That Matter Next:<br /></span>
  
  {/* Remaining lines: Weight 700 (font-bold) */}
  <span className="font-bold">Preparing Your Workforce<br />
  & Leaders for the AI Era</span>
</h1>

            {/* Event Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-white">
                <Calendar className="w-7 h-7 text-white" />
                <span className="text-2xl font-bold">February 20, 2026</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <MapPin className="w-7 h-7 text-white" />
                <span className="text-2xl font-bold tracking-tight">
                  Chamberlain's Steak & Fish House, Dallas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RSVP BAR SECTION --- */}
      <div className="w-full bg-gradient-to-b from-[#f3f4f6] to-[#9ca3af] border-y border-white/40 shadow-md py-10 px-6">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Added 'md:pl-32' to create the large empty space on the left side 
            exactly like the reference image.
          */}
          <div className="max-w-5xl md:pl-32">
             {/* Pass 'inputClassName' to make the input semi-transparent (bg-white/50)
               so it blends into the metallic background.
             */}
            <RSVPForm />
          </div>
          
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-[1440px] mx-auto space-y-10">
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

          {/* Red Border Box as seen in your screenshot */}
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