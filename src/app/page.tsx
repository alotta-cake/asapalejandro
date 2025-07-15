import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-4xl font-bold text-center">
        Rapidly co-create with an IBM Client Engineering leader 🚀
      </h1>
      <p className="text-center max-w-xl">
        I help enterprises move from idea ➜ pilot ➜ production with automation & AI.
      </p>
      <div className="flex gap-4">
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Start a Pilot</a>
        <a href="#work"    className="border px-6 py-3 rounded-lg">See My Work</a>
      </div>
    </main>
  );
} 