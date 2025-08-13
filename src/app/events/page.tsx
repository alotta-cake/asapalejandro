import React from 'react';

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Join me at upcoming IBM events, conferences, and workshops where I'll be sharing insights on AI & Automation, Client Engineering methodologies, and real-world pilot success stories.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <p className="text-gray-600">Stay tuned for upcoming events and speaking engagements.</p>
        </div>
      </div>
    </div>
  );
} 