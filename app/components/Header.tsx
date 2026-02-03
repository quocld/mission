'use client';

import { useState } from 'react';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-1000 bg-black h-[107px] px-12 flex flex-col justify-center">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-3">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-semibold font-mono">
            arc()
          </a>

          {/* Primary Navigation - Dropdowns */}
          <nav className="flex items-center gap-8">
            {/* For companies dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('companies')}
                className="flex items-center gap-1.5 text-white text-[15px] hover:opacity-80 transition-opacity"
              >
                For companies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* For talent dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('talent')}
                className="flex items-center gap-1.5 text-white text-[15px] hover:opacity-80 transition-opacity"
              >
                For talent
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Log In button */}
          <button className="px-4 py-2 text-white text-[15px] hover:opacity-80 transition-opacity">
            Log In
          </button>

          {/* Find jobs button - outline */}
          <button className="px-5 py-2.5 text-white text-[15px] border border-white rounded-md hover:bg-white/10 transition-colors">
            Find jobs
          </button>

          {/* Hire talent button - filled */}
          <button className="px-6 py-2.5 text-black text-[15px] font-semibold bg-white rounded-md hover:bg-gray-100 transition-colors">
            Hire talent
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className="flex items-center gap-8">
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Developers
        </a>
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Designers
        </a>
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Marketers
        </a>
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Product Managers
        </a>
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Project Managers
        </a>
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Assistants
        </a>
        <a href="#" className="text-white text-[14px] hover:text-[rgb(0,159,255)] transition-colors">
          Countries
        </a>
      </nav>
    </header>
  );
}

