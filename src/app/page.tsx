import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Alejandro Palumbo — IBM Platform Engineer National Market Focal</h1>
        <p className="mt-4 text-lg text-gray-600">Co-creating AI & Automation pilots for clients across the US.</p>
        <div className="flex justify-center gap-4 mt-8">
          <a href="/pilots" className="bg-blue-600 text-white px-6 py-3 rounded-md">Request a Pilot</a>
          <a href="/my-work" className="border px-6 py-3 rounded-md">See My Work</a>
        </div>
        <p className="max-w-2xl mx-auto mt-8 text-gray-600">
          Why IBM Client Engineering? We use the Pilot Engineering Methodology to scope, build and deliver proofs of value in weeks—not months—so your business sees measurable outcomes faster.
        </p>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto py-12 flex flex-col sm:flex-row items-center gap-8">
        <img src="/avatar.png" alt="Alejandro Palumbo" className="w-56 h-56 rounded-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            I'm a National Market Platform Engineer Focal at IBM, covering the U.S. West. My IBM journey began in January 2021 as a Fyre/Techzone datacenter intern, where I first experienced the power of IBM's technology ecosystem. In April 2022, I transitioned into IBM Expert Labs as a Cloud Pak for Integration delivery consultant and solution architect, working directly with clients to solve complex integration challenges.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Since November 2024, I've been part of Client Engineering, where I help clients validate and scale solutions built on IBM Automation and the Watson x™ Data & AI portfolio. My role focuses on rapidly co-creating pilots that move from idea to production, demonstrating real business value through IBM's cutting-edge technologies.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            I hold a B.A. in Economics from San Francisco State University and an M.S. in Computer Science from CSU Channel Islands. This unique combination of business acumen and technical expertise allows me to bridge the gap between technology solutions and business outcomes.
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
      </section>

      {/* Social Links Section */}
      <section className="max-w-sm mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Socials</h2>
        <p className="text-center text-gray-600 mb-6">Find me below</p>
        <div className="flex justify-center gap-6 text-3xl sm:text-4xl">
          <a href="https://youtube.com/@IBMAlejandro" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 hover:scale-110 transition-transform"><i className="fab fa-youtube"></i></a>
          <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 hover:scale-110 transition-transform"><i className="fab fa-linkedin"></i></a>
          <a href="https://tiktok.com/@asapalejandro" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-black hover:scale-110 transition-transform"><i className="fab fa-tiktok"></i></a>
          <a href="https://instagram.com/asapalejandro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 hover:scale-110 transition-transform"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/925alejandro" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>
        </div>
      </section>
    </>
  );
} 