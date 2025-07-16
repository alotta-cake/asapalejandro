import React from 'react';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    id: 'building-enterprise-website-cursor-watsonx',
    title: 'From Idea to URL in a Day: Buying a Domain on Namecheap, Scaffolding with Cursor & Watsonx, and Deploying to IBM Cloud Code Engine',
    excerpt: 'How I launched asapalejandro.com as my personal hub, demonstrating IBM\'s modern tooling and client-engineering mindset in a single day.',
    date: 'December 2024',
    readTime: '8 min read',
    category: 'Development',
    featured: true
  },
  {
    id: 'ibm-client-engineering-methodology',
    title: 'The IBM Client Engineering Methodology: From Idea to Production',
    excerpt: 'Exploring how IBM\'s Pilot Engineering Methodology accelerates time-to-value for enterprise clients.',
    date: 'Coming Soon',
    readTime: '8 min read',
    category: 'Methodology'
  },
  {
    id: 'ai-automation-pilots',
    title: 'AI & Automation Pilots: Real-World Success Stories',
    excerpt: 'Case studies and insights from successful AI and automation pilot implementations.',
    date: 'Coming Soon',
    readTime: '10 min read',
    category: 'Case Studies'
  },
  {
    id: 'cloud-pak-integration',
    title: 'Cloud Pak for Integration: Best Practices and Implementation',
    excerpt: 'Deep dive into IBM Cloud Pak for Integration and how to maximize its value for your organization.',
    date: 'Coming Soon',
    readTime: '12 min read',
    category: 'Technical'
  }
];

export default function Blogs() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Insights, tutorials, and thought leadership on IBM technologies, AI & Automation, and Client Engineering.
      </p>

      {/* Featured Blog Post */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {BLOG_POSTS[0].category}
            </span>
            <span className="text-gray-500 text-sm">{BLOG_POSTS[0].date}</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">{BLOG_POSTS[0].readTime}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            <Link href={`/blogs/${BLOG_POSTS[0].id}`} className="hover:text-blue-700 transition-colors">
              {BLOG_POSTS[0].title}
            </Link>
          </h3>
          <p className="text-lg text-gray-700 mb-6">{BLOG_POSTS[0].excerpt}</p>
          <Link 
            href={`/blogs/${BLOG_POSTS[0].id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* All Blog Posts */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">All Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  <Link href={`/blogs/${post.id}`} className="hover:text-blue-700 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                  <Link 
                    href={`/blogs/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6">
          Get notified when new blog posts are published about IBM technologies and Client Engineering insights.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 