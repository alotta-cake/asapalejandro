import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Hi, I'm Alejandro Palumbo. My journey in tech began as a datacenter intern, where I first experienced the power of enterprise technology. I later became a delivery consultant and solution architect, working directly with clients to solve complex integration challenges.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I hold a B.A. in Economics from San Francisco State University and an M.S. in Computer Science from CSU Channel Islands. This unique combination of business acumen and technical expertise allows me to bridge the gap between technology solutions and business outcomes.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          2024 → Now Client Engineering, National Market (West) Platform Engineer
        </p>
        <div>
          <div className="font-semibold mb-1">Fun facts:</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Born in Houston, Texas</li>
            <li>I am Italian, Spanish, and Colombian</li>
            <li>Outside of work I love to exercise, boxing, yoga, pilates, eating good food, traveling and seeing the world, and spending time with my loved ones</li>
            <li>I love music and going to concerts</li>
            <li>I am Christian and speak English and Spanish</li>
            <li>Calvin and Hobbes is my favorite cartoon</li>
            <li>I like comedy TV shows - ask me about my favorite</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 