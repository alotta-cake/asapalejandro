import React from 'react';

export default function MyWork() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">My Work</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Explore my portfolio of successful IBM Client Engineering projects, pilot implementations, and thought leadership content.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Recent Pilots</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• AI-powered process automation</li>
              <li>• Cloud Pak integration solutions</li>
              <li>• Watson x™ implementation projects</li>
              <li>• DevOps transformation initiatives</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Content & Thought Leadership</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Technical blog posts</li>
              <li>• Conference presentations</li>
              <li>• YouTube tutorials</li>
              <li>• LinkedIn insights</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a href="https://youtube.com/@IBMAlejandro" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors mr-4">
            Watch My Videos
          </a>
          <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
} 