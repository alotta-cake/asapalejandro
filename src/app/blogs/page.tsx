import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

const BLOG_POSTS = [ // Updated with all three blog posts
  {
    slug: 'building-enterprise-website-cursor-watsonx',
    title: 'Deploy Your Next.js App to IBM Cloud Code Engine: A Complete Guide',
    excerpt: 'A step-by-step guide to deploying your Next.js application to IBM Cloud Code Engine, covering containerization, registry setup, and deployment.',
    date: '2025-07-31',
    readTime: '15 min read',
    category: 'Tutorial',
  },
  {
    slug: 'custom-domain-namecheap-ibm-cloud',
    title: 'Connect Your Namecheap Domain to IBM Cloud Code Engine',
    excerpt: 'Replace the long IBM Cloud URL with your own custom domain and get free SSL certificates automatically.',
    date: '2025-08-01',
    readTime: '8 min read',
    category: 'Domain Setup',
  },
  {
    slug: 'zero-trust-tls-management-ibm-cloud-vault',
    title: 'Zero-Trust TLS Management with IBM Cloud and Vault',
    excerpt: 'Learn how to implement secure TLS certificate management using Let\'s Encrypt, HashiCorp Vault, and IBM Cloud Code Engine for production deployments.',
    date: '2025-08-06',
    readTime: '12 min read',
    category: 'Security',
  },
];

export default function Blogs() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Insights, tutorials, and thought leadership on IBM technologies, AI & Automation, and Client Engineering.
      </p>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <p className="text-sm text-blue-600 font-semibold mb-2">{post.category}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* More Posts Coming Soon */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          More technical tutorials and insights coming soon. Follow me on 
          <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mx-1">
            LinkedIn
          </a>
          for updates.
        </p>
      </div>


    </div>
  );
} 