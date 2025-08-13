'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchContent, SearchResult } from '../../lib/search';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    if (query) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Search Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative max-w-2xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Results Header */}
        {query && (
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>relevancy</option>
                <option>date</option>
                <option>title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {query && results.length > 0 && (
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {result.category}
                    </span>
                    {result.date && (
                      <span className="text-sm text-gray-500">{result.date}</span>
                    )}
                    {result.readTime && (
                      <span className="text-sm text-gray-500">{result.readTime}</span>
                    )}
                  </div>
                  
                  <Link 
                    href={result.url}
                    className="text-xl font-semibold text-blue-600 hover:text-blue-700 mb-2 block"
                  >
                    {result.title}
                  </Link>
                  
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {result.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{result.url}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {query && results.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or browse our content categories below.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
              About
            </Link>
            <Link href="/blogs" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
              Blogs
            </Link>
            <Link href="/my-work" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
              My Work
            </Link>
            <Link href="/workshops" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
              Workshops
            </Link>
          </div>
        </div>
      )}

      {/* Popular Searches */}
      {!query && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { term: "IBM", url: "/search?q=IBM" },
              { term: "Automation", url: "/search?q=Automation" },
              { term: "Client Engineering", url: "/search?q=Client+Engineering" },
              { term: "Cloud Pak", url: "/search?q=Cloud+Pak" },
              { term: "Watson", url: "/search?q=Watson" },
              { term: "Platform Engineer", url: "/search?q=Platform+Engineer" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <span className="text-blue-600 font-medium">{item.term}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="space-y-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
} 