import React from 'react';

export default function Pilots() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Request a Pilot</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Ready to see IBM's AI & Automation solutions in action? Let's co-create a pilot that demonstrates real business value for your organization.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Pilot Process</h2>
          <ol className="space-y-2 text-gray-700">
            <li>1. Initial consultation to understand your business challenges</li>
            <li>2. Solution scoping and pilot design</li>
            <li>3. Rapid implementation using IBM's Pilot Engineering Methodology</li>
            <li>4. Demonstration of measurable business outcomes</li>
            <li>5. Scaling strategy for production deployment</li>
          </ol>
        </div>
        <div className="text-center mt-8">
          <a href="mailto:alejandro.palumbo@ibm.com" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Contact Me to Start
          </a>
        </div>
      </div>
    </div>
  );
} 