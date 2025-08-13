import React from 'react';

export default function Workshops() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Workshops</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Interactive workshops designed to help you understand IBM's AI & Automation capabilities and how to implement them in your organization.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Available Workshops</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• IBM Automation Platform Overview</li>
            <li>• Pilot Engineering Methodology</li>
            <li>• Watson x™ Data & AI Portfolio</li>
            <li>• Cloud Pak Implementation Strategies</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 