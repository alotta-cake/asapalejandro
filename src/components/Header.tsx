'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Simple navigation - just Home and Blogs

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop nav: pure CSS hover for dropdowns
  // Mobile nav: use state for toggling

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium text-gray-700 hover:text-blue-700">
            Home
          </Link>
          <Link href="/blogs" className="font-medium text-gray-700 hover:text-blue-700">
            Blogs
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center">
          <button className="md:hidden p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Open menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 space-y-2">
          <Link href="/" className="block py-2 font-medium text-gray-700 hover:text-blue-700">
            Home
          </Link>
          <Link href="/blogs" className="block py-2 font-medium text-gray-700 hover:text-blue-700">
            Blogs
          </Link>
        </div>
      )}
    </header>
  );
}
