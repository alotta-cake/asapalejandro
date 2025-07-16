import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/blogs" className="text-blue-600 hover:text-blue-700">
          ← Back to Blog
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Development
          </span>
          <span className="text-gray-500 text-sm">December 2024</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-500 text-sm">8 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          From Idea to URL in a Day: Buying a Domain on Namecheap, Scaffolding with Cursor & Watsonx, and Deploying to IBM Cloud Code Engine
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          How I launched asapalejandro.com as my personal hub, demonstrating IBM's modern tooling and client-engineering mindset in a single day.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-12 mb-6">1. Why I'm Documenting This</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          As an IBM Platform Engineer National Market Focal, I'm constantly exploring new technologies and methodologies that can enhance our client delivery capabilities. Recently, I decided to launch <strong>asapalejandro.com</strong> as my personal hub—not just as a portfolio site, but as a living demonstration of IBM's modern tooling and client-engineering mindset.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          This project showcases the end-to-end execution that IBM Client Engineering is known for: from initial concept to production deployment in record time. It's a perfect example of how we turn ideas into runnable solutions quickly, using the latest AI-powered development tools and IBM's cloud infrastructure.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">2. Buying a Domain</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The journey began with a simple domain purchase on Namecheap. I chose <strong>asapalejandro.com</strong> to reflect my personal brand while maintaining professionalism. The process was straightforward:
        </p>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Domain Setup Process:</h3>
          <ol className="space-y-2 text-gray-700">
            <li>1. Searched for domain availability on Namecheap</li>
            <li>2. Purchased the domain with privacy protection</li>
            <li>3. Configured DNS records for future deployment</li>
            <li>4. Set up A records pointing to IBM Cloud Code Engine</li>
            <li>5. Added CNAME records for www subdomain</li>
          </ol>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The key was setting up the DNS records correctly from the start, anticipating the eventual deployment to IBM Cloud Code Engine rather than traditional hosting platforms.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">3. Scaffolding with Cursor + Watsonx</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          With the domain secured, I opened a blank repository and began the real magic. Using <strong>Cursor</strong>, an AI-powered code editor, I issued natural language prompts to generate a complete Next.js 14 application with TypeScript and Tailwind CSS.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The AI assistance was incredible—I could describe the desired functionality in plain English, and Cursor would generate the corresponding code. For example, "Create a responsive header with dropdown navigation for IBM product categories" resulted in a fully functional component with proper styling and interactions.
        </p>
        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Cursor AI Prompts Used:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• "Generate a Next.js 14 project with TypeScript and Tailwind CSS"</li>
            <li>• "Create a responsive header component with dropdown navigation"</li>
            <li>• "Build a hero section with IBM Client Engineering messaging"</li>
            <li>• "Add a blog section with sample posts and routing"</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <strong>IBM Watsonx</strong> played a crucial role in refining the copy and components. I used Watsonx to generate professional, enterprise-appropriate content that aligned with IBM's brand voice and messaging. The AI helped craft compelling value propositions and technical descriptions that resonated with potential clients.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">4. Local Iteration</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The development process was incredibly smooth with hot-reload functionality. I could make changes to the code and see them reflected immediately in the browser. This rapid iteration cycle allowed me to fine-tune the design, adjust Tailwind classes, and perfect the navigation and hero sections.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Key components I built during this phase:
        </p>
        <ul className="space-y-4 text-lg text-gray-700 mb-8">
          <li>• <strong>Responsive Header:</strong> IBM-style navigation with dropdown menus for product categories</li>
          <li>• <strong>Hero Section:</strong> Professional introduction with clear value proposition</li>
          <li>• <strong>About Section:</strong> Personal background with IBM journey highlights</li>
          <li>• <strong>Blog Integration:</strong> Sample posts with proper routing and styling</li>
          <li>• <strong>Social Links:</strong> Professional social media integration</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">5. From GitHub to IBM Cloud Code Engine</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The deployment process showcased IBM's cloud capabilities. I containerized the Next.js application using a Dockerfile, pushed it to IBM Container Registry, and deployed it to IBM Cloud Code Engine—all within minutes.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Deployment Commands:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`# Build and push to IBM Container Registry
docker build -t us.icr.io/your-namespace/asapalejandro .
docker push us.icr.io/your-namespace/asapalejandro

# Deploy to IBM Cloud Code Engine
ibmcloud ce app create --name asapalejandro \\
  --image us.icr.io/your-namespace/asapalejandro \\
  --port 3000 \\
  --env NODE_ENV=production

# Bind custom domain
ibmcloud ce domain create --name asapalejandro.com`}
          </pre>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The beauty of IBM Cloud Code Engine is its simplicity—no need to manage Kubernetes clusters or complex infrastructure. The platform automatically handles scaling, SSL certificates, and load balancing, allowing me to focus on the application rather than infrastructure.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">6. Gotchas & Fixes</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          No development journey is complete without a few challenges. Here are the key issues I encountered and how I resolved them:
        </p>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Common Issues & Solutions:</h3>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Tailwind v4 Alpha vs PostCSS:</strong> Initial conflicts between Tailwind's latest alpha version and PostCSS configuration. Solved by using stable Tailwind v3 with proper PostCSS setup.</li>
            <li><strong>use client directive:</strong> Next.js 13+ requires the 'use client' directive for components using React hooks. This was crucial for the header navigation functionality.</li>
            <li><strong>Hydration errors:</strong> Server/client rendering mismatches were resolved by adding proper client-side checks for interactive components.</li>
            <li><strong>Font Awesome integration:</strong> Ensured proper CDN loading and icon display across all pages.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">7. What's Next</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          This is just the beginning. I'm planning several enhancements and future blog posts to document the journey:
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Technical Enhancements</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Contentlayer MDX blog integration</li>
              <li>• CI/CD pipeline with GitHub Actions</li>
              <li>• Analytics with IBM Instana</li>
              <li>• Search functionality with Watsonx</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Content Plans</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• IBM Client Engineering methodology deep-dive</li>
              <li>• AI & Automation pilot case studies</li>
              <li>• Cloud Pak implementation guides</li>
              <li>• Technical tutorials and best practices</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Call to Action</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          This project demonstrates the power of combining AI-powered development tools with IBM's enterprise-grade cloud infrastructure. If you're interested in seeing similar rapid prototyping and deployment capabilities for your organization, I'd love to discuss how we can apply these methodologies to your business challenges.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg my-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Let's explore how IBM Client Engineering can accelerate your digital transformation with AI & Automation pilots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pilots" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Request a Pilot
            </a>
            <a href="/my-work" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
              See My Work
            </a>
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Written by Alejandro Palumbo</p>
            <p className="text-sm text-gray-500">IBM Platform Engineer National Market Focal</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://youtube.com/@IBMAlejandro" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a href="https://tiktok.com/@asapalejandro" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 