import React from 'react';
import Link from 'next/link';

export default function BookMeeting() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule an Intro Meeting
          </h1>
          <p className="text-lg text-gray-600">
            Let's discuss how I can help accelerate your enterprise outcomes with IBM's automation and integration stack.
          </p>
        </div>

        {/* Calendar Integration */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📅 Book Your Meeting</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Microsoft Teams */}
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Microsoft Teams</h3>
              <p className="text-blue-700 text-sm mb-4">
                Schedule a meeting that will automatically create a Teams link and send calendar invites.
              </p>
              <a 
                href="https://calendly.com/asapalejandro/intro-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book on Calendly
              </a>
            </div>
            
            {/* Google Calendar */}
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Google Calendar</h3>
              <p className="text-green-700 text-sm mb-4">
                Direct Google Calendar integration for seamless scheduling.
              </p>
              <a 
                href="https://calendly.com/asapalejandro/intro-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Book on Calendly
              </a>
            </div>
          </div>
        </div>

        {/* Meeting Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 What to Expect</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">30-Minute Discovery Call</h3>
                <p className="text-gray-700">We'll discuss your current challenges and goals</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">IBM Solution Mapping</h3>
                <p className="text-gray-700">Identify which IBM technologies can accelerate your outcomes</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Next Steps & Resources</h3>
                <p className="text-gray-700">Get actionable recommendations and access to IBM free tier</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📞 Alternative Contact</h2>
          <p className="text-gray-700 mb-4">
            Can't find a time that works? Reach out directly:
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> <a href="mailto:alottacakellc@gmail.com" className="text-blue-600 hover:text-blue-800">alottacakellc@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Connect on LinkedIn</a></p>
          </div>
        </div>
      </div>
    </div>
  );
} 