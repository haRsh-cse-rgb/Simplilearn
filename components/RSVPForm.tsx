'use client';

import { useState, useTransition, useRef } from 'react';
import { submitRSVP } from '@/actions/rsvp';
import { Mail } from 'lucide-react';

export default function RSVPForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitRSVP(null, formData);
      setState(result);
      if (result.success && formRef.current) {
        formRef.current.reset();
      }
    });
  };

  return (
    <div className="w-full">
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full">
        <div className="relative w-full">
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          
          {/* Input Field */}
          <input
  type="email"
  name="email"
  placeholder="Enter your work email to confirm your attendance"
  className="w-full pl-12 pr-4 py-3 bg-[#E7E7E7E5] border border-gray-300 rounded-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent disabled:opacity-70 disabled:cursor-not-allowed"
  required
  disabled={isPending}
/>
        </div>

        {/* Submit Button with Custom Gradient */}
        <button
          type="submit"
          disabled={isPending}
          className="w-auto px-8 py-3 text-white font-bold rounded-sm whitespace-nowrap shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(90deg, rgba(245, 171, 64, 0.9) 0%, #F5AB40 100%)'
          }}
        >
          {isPending ? 'Submitting...' : 'RSVP Now'}
        </button>
      </form>

      {/* Success/Error Message */}
      {state && (
        <div
          className={`mt-4 p-4 rounded-sm text-center ${
            state.success
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}
    </div>
  );
}