'use client';

import React from 'react';
import Link from 'next/link';

export default function NewsletterSignup() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">📧 Stay Updated</h3>
      <p className="text-blue-700 text-sm mb-4">
        Get the latest insights on IBM Cloud, automation, and AI delivered to your inbox.
      </p>

      <div className="text-center">
        <p className="text-blue-700 mb-6">
          Sign in or create an account to subscribe to our monthly IBM Cloud & Automation digest.
        </p>
        
        <div className="space-y-3">
          <Link 
            href="/login" 
            className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In / Sign Up
          </Link>
          
          <p className="text-xs text-blue-600">
            Monthly insights on IBM Cloud, automation, and enterprise best practices. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
} 