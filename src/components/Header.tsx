'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HOME_NAV = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Pilots', href: '/pilots' },
  { label: 'My Work', href: '/my-work' },
  { label: 'Blogs', href: '/blogs' },
];

const NAV = [
  {
    label: 'Application Development',
    products: [
      'UnifyBlue', 'CP4Apps', 'CP4Systems', 'WAS', 'DevOps', 'Spectrum', 'Web Hybrid Ed', 'App Run', 'Runtimes', 'Pure App', 'Mobile Foundation', 'ELM', 'Project Harmony', 'WCA Java',
    ],
  },
  {
    label: 'Application Integration',
    products: [
      'Hybrid iPaaS (IBM+WebM)', 'API Connect', 'APP Connect', 'Sterling (B2B Integration)', 'CP4I', 'MQ', 'DataPower', 'Aspera', 'Event Automation', 'FTM',
    ],
  },
  {
    label: 'Infrastructure Automation',
    products: [
      'Terraform', 'Vault', 'Ansible', 'Hashicorp', 'Consul', 'Nomad', 'Waypoint', 'WCA Ansible',
    ],
  },
  {
    label: 'Network Management',
    products: [
      'NS1', 'Hybrid Cloud Mesh', 'SevOne', 'Rapid Network Automation', 'Concert',
    ],
  },
  {
    label: 'Identity & Access Management',
    products: [
      'Verify', 'Trusteer', 'MaaS 360 (Digital Only)',
    ],
  },
  {
    label: 'IT Automation & FinOps',
    products: [
      'Instana', 'Turbonomic', 'Concert', 'Apptio', 'Cloudability', 'Targetprocess', 'CP4AIOps', 'Flexera', 'IT Automation', 'IBM FinOps', 'Operations Insights', 'Workload Automation', 'Workload Automation (+Ansible)',
    ],
  },
  {
    label: 'Asset Lifecycle Management',
    products: [
      'Maximo', 'Envizi', 'EI', 'TRIRIGA', 'Supply Chain', 'Sterling Order & Inventory Management',
    ],
  },
];

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[ +()]/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/^-+|-+$/g, '');
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 focus:outline-none">
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-20">
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
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 focus:outline-none">
                {cat.label}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-20">
                <ul className="py-2">
                  {cat.products.map((prod) => (
                    <li key={prod}>
                      <Link href={`/products/${slugify(prod)}`} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 whitespace-nowrap">{prod}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ minWidth: 120 }}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </span>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden ml-2 p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Open menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      {isClient && mobileOpen && (
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
              >
                {cat.label}
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === cat.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openDropdown === cat.label && (
                <ul className="pl-4 py-1">
                  {cat.products.map((prod) => (
                    <li key={prod}>
                      <Link href={`/products/${slugify(prod)}`} className="block py-1 text-gray-700 hover:text-blue-700">{prod}</Link>
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