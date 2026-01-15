/**
 * FooterSection Component
 * 
 * The footer section of the landing page featuring:
 * - Background image of the event venue
 * - Final call-to-action with RSVP form
 * - Company logo and copyright information
 */

import Image from 'next/image';
import RSVPForm from '@/components/RSVPForm';

export default function FooterSection() {
  return (
    <footer className="relative w-full py-16 lg:py-24 overflow-hidden">
      
      {/* Background Image - Venue image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Mask.png" 
          alt="Chamberlain's Steak & Fish House"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col">
        
        {/* Call-to-Action Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Space is limited.
        </h2>

        {/* Final RSVP Form */}
        <div className="w-full max-w-3xl mb-16">
          <RSVPForm />
        </div>

        {/* Footer Bottom - Logo and Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
          
          {/* Company Logo - Inverted for visibility on dark background */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Simplilearn Logo"
              width={180}
              height={45}
              className="object-contain brightness-0 invert" 
            />
          </div>
          
          {/* Copyright Notice */}
          <p className="text-white/80 text-sm md:text-base font-medium">
            © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}