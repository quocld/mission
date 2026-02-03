'use client';

import { useState } from 'react';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-[1000] bg-black flex flex-col justify-center border-b border-gray-800">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-[70px] px-6 lg:px-12 relative max-w-[1440px] mx-auto w-full">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="text-white text-3xl font-bold font-mono tracking-tighter">
            arc()
          </a>

          {/* Primary Navigation - Dropdowns */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* For companies dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('companies')}
                className="flex items-center gap-1.5 text-white text-[15px] font-medium hover:opacity-80 transition-opacity"
              >
                For companies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'companies' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800 border border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Hire</div>
                  <a href="/hire-developers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Hire developers</a>
                  <a href="/hire-designers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Hire designers</a>
                  <a href="/hire-marketers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Hire marketers</a>
                  <a href="/hire-product-managers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Hire product managers</a>
                  <a href="/hire-project-managers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Hire project managers</a>
                  <a href="/hire-assistants" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Hire assistants</a>

                  <div className="my-1 border-t border-gray-100"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Learn</div>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">How Arc works</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">How much can you save?</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Case studies</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Pricing</a>
                  <div className="relative group/submenu">
                    <a href="#" className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">
                      Resources
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* For talent dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('talent')}
                className="flex items-center gap-1.5 text-white text-[15px] font-medium hover:opacity-80 transition-opacity"
              >
                For talent
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              {openDropdown === 'talent' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800 border border-gray-100">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Overview</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Remote jobs</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Remote companies</a>
                  <div className="relative group/submenu">
                    <a href="#" className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">
                      Resources
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-4">
          {/* Log In button */}
          <button className="hidden sm:block text-white text-[15px] hover:text-gray-300 font-medium transition-colors">
            Log In
          </button>

          {/* Find jobs button - outline */}
          <button className="hidden sm:block px-4 py-2 text-white text-[15px] font-medium border border-white rounded hover:bg-white/10 transition-colors">
            Find jobs
          </button>

          {/* Hire talent button - filled */}
          <button className="px-5 py-2 text-[15px] font-bold text-black bg-white rounded hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
            Hire talent
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="h-[46px] border-t border-gray-800 flex items-center justify-center bg-black/95 backdrop-blur-sm">
        <nav className="flex items-center gap-6 lg:gap-8 overflow-x-auto px-6 max-w-[1440px] w-full no-scrollbar">
          <a href="/hire-developers" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Developers
          </a>
          <a href="/hire-designers" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Designers
          </a>
          <a href="/hire-marketers" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Marketers
          </a>
          <a href="/hire-product-managers" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Product Managers
          </a>
          <a href="/hire-project-managers" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Project Managers
          </a>
          <a href="/hire-assistants" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Assistants
          </a>
          <a href="#" className="text-gray-300 text-[14px] hover:text-white whitespace-nowrap transition-colors">
            Countries
          </a>
        </nav>
      </div>
    </header>
  );
}

