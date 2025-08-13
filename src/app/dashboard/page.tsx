'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../lib/auth';

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You need to be logged in to access this page.</p>
          <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard, {user.name}!
          </h1>
          <p className="text-lg text-gray-600">
            Manage your IBM Cloud resources and track your learning progress.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">📚 Learning Progress</h3>
            <p className="text-gray-600 mb-4">Track your progress through IBM technologies and automation.</p>
            <Link href="/blogs" className="text-blue-600 hover:text-blue-800 font-medium">
              View Blogs →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">☁️ IBM Cloud Resources</h3>
            <p className="text-gray-600 mb-4">Manage your free tier resources and deployments.</p>
            <a href="https://cloud.ibm.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
              Go to IBM Cloud →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🔐 Vault Integration</h3>
            <p className="text-gray-600 mb-4">Manage your TLS certificates and secrets securely.</p>
            <Link href="/blogs/zero-trust-tls-management-ibm-cloud-vault" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>
        </div>

        {/* User Profile */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">👤 Your Profile</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Provider:</strong> {user.provider}</p>
              <p><strong>Member Since:</strong> {new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Management */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📧 Newsletter Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h3 className="font-medium text-blue-900">Monthly IBM Cloud & Automation Digest</h3>
                <p className="text-sm text-blue-700">Monthly insights on IBM Cloud, automation technologies, and real-world implementation tips</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-blue-600 font-medium">Subscribed</span>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors">
                  Unsubscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              💡 <strong>Tip:</strong> This monthly newsletter covers IBM Cloud updates, automation best practices, and insights from real enterprise projects. You'll receive it when there's valuable content to share.
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📊 Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Successfully logged in via {user.provider}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Accessed dashboard for the first time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 