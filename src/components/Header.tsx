'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/auth';

const HOME_NAV = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'My Work', href: '/my-work' },
  { label: 'Blogs', href: '/blogs' },
];

const NAV = [
  {
    label: 'Data & AI',
    href: '/data-ai',
    products: [],
  },
  {
    label: 'Automation',
    href: '/automation',
    products: [],
  },
];

const AUTOMATION_PILLARS = [
  'Application Development',
  'Application Integration',
  'Infrastructure Automation',
  'Network Management',
  'Identity & Access Management',
  'IT Automation & FinOps',
  'Asset Lifecycle Management',
];

const DATA_AI_PILLARS = [
  'AI Assistants',
  'AI/MLOps',
  'Databases',
  'Data Intelligence',
  'Data Integration',
  'Data Security',
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Desktop nav: pure CSS hover for dropdowns
  // Mobile nav: use state for toggling

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Home Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link href="/" className="font-medium text-gray-700 hover:text-blue-700 focus:outline-none">
                Home
              </Link>
              <button tabIndex={-1} className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 focus:outline-none cursor-default" aria-label="Open Home dropdown" disabled>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
              <ul className="py-2">
                {HOME_NAV.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 whitespace-nowrap">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Product Categories */}
          {NAV.map((cat) => (
            <div key={cat.label} className="relative group">
              <Link href={cat.href} className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 focus:outline-none cursor-default" aria-label={`Open ${cat.label} dropdown`}>
                {cat.label}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {cat.label === 'Automation' && (
                <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                  <ul className="py-2">
                    {AUTOMATION_PILLARS.map((pillar) => (
                      <li key={pillar}>
                        <Link href={`/automation/${slugify(pillar)}`} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 whitespace-nowrap">{pillar}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cat.label === 'Data & AI' && (
                <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                  <ul className="py-2">
                    {DATA_AI_PILLARS.map((pillar) => (
                      <li key={pillar}>
                        <Link href={`/data-ai/${slugify(pillar)}`} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 whitespace-nowrap">{pillar}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cat.label !== 'Automation' && cat.label !== 'Data & AI' && (
                <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                  <ul className="py-2">
                    {cat.products.map((prod) => (
                      <li key={prod}>
                        <Link href={`/products/${slugify(prod)}`} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 whitespace-nowrap">{prod}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <AuthButton />
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const query = formData.get('search') as string;
            if (query.trim()) {
              window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }
          }} className="relative">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ minWidth: 120 }}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </span>
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
          {/* Mobile menu button */}
          <button className="md:hidden ml-2 p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Open menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 space-y-2">
          {/* Home Mobile Menu */}
          <div>
            <div className="flex items-center justify-between">
              <Link href="/" className="py-2 font-medium text-gray-700 hover:text-blue-700">
                Home
              </Link>
              <button
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === 'Home' ? null : 'Home')}
                aria-label="Toggle Home dropdown"
              >
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Home' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            {openDropdown === 'Home' && (
              <ul className="pl-4 py-1">
                {HOME_NAV.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="block py-1 text-gray-700 hover:text-blue-700">{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Product Categories Mobile Menu */}
          {NAV.map((cat) => (
            <div key={cat.label}>
              <button
                className="w-full flex justify-between items-center py-2 font-medium text-gray-700 hover:text-blue-700 focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === cat.label ? null : cat.label)}
                aria-label={`Toggle ${cat.label} dropdown`}
              >
                {cat.label}
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === cat.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openDropdown === cat.label && (
                <ul className="pl-4 py-1">
                  {cat.label === 'Automation' && AUTOMATION_PILLARS.map((pillar) => (
                    <li key={pillar}>
                      <Link href={`/automation/${slugify(pillar)}`} className="block py-1 text-gray-700 hover:text-blue-700">{pillar}</Link>
                    </li>
                  ))}
                  {cat.label === 'Data & AI' && DATA_AI_PILLARS.map((pillar) => (
                    <li key={pillar}>
                      <Link href={`/data-ai/${slugify(pillar)}`} className="block py-1 text-gray-700 hover:text-blue-700">{pillar}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

// AuthButton component
function AuthButton() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="text-sm text-gray-700 hover:text-blue-700">
          Dashboard
        </Link>
        <span className="text-sm text-gray-700">Welcome, {user.name}</span>
        <button
          onClick={logout}
          className="text-gray-700 hover:text-blue-700 font-medium"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link href="/login" className="text-gray-700 hover:text-blue-700 font-medium">
      Sign In
    </Link>
  );
} 