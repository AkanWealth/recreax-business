"use client";

import React, { useState, useEffect } from 'react';
import { WordPressService } from '@/lib/wordpress';
import { BlogPost } from '@/types/blog';

interface DebugPost {
  id: number;
  slug: string;
  title: string;
  status: string;
  date: string;
}

export default function WordPressDebug() {
  const [posts, setPosts] = useState<DebugPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [testSlug, setTestSlug] = useState('');
  const [testResult, setTestResult] = useState<BlogPost | null>(null);
  const [testLoading, setTestLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError('');
      
      const wordpressService = WordPressService.getInstance();
      
      // Also call the debug method to log to console
      await wordpressService.debugListAllPosts();
      
      const wpPosts = await wordpressService.getPosts({ per_page: 50 });
      
      const debugPosts: DebugPost[] = wpPosts.map(post => ({
        id: post.id,
        slug: post.slug || 'no-slug',
        title: post.title?.rendered || 'No title',
        status: post.status,
        date: post.date
      }));
      
      setPosts(debugPosts);
      console.log('🐛 Loaded posts for debug:', debugPosts.length);
      
    } catch (error) {
      console.error('❌ Error loading posts for debug:', error);
      setError('Failed to load posts: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const testSlugLookup = async () => {
    if (!testSlug.trim()) return;
    
    setTestLoading(true);
    setTestResult(null);
    
    try {
      console.log('🧪 Testing slug lookup for:', testSlug);
      const wordpressService = WordPressService.getInstance();
      const result = await wordpressService.getPostBySlug(testSlug.trim());
      setTestResult(result);
      
      if (result) {
        console.log('✅ Test successful:', result);
      } else {
        console.log('❌ Test failed: No post found');
      }
    } catch (error) {
      console.error('❌ Test error:', error);
      setTestResult(null);
    } finally {
      setTestLoading(false);
    }
  };

  const handleSlugClick = (slug: string) => {
    setTestSlug(slug);
    // Auto-test the slug
    setTimeout(() => {
      testSlugLookup();
    }, 100);
  };

  if (loading) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <span>Loading WordPress debug info...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">WordPress Blog Debug Tool</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {/* Test Slug Lookup */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">🧪 Test Slug Lookup</h2>
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={testSlug}
            onChange={(e) => setTestSlug(e.target.value)}
            placeholder="Enter slug to test (e.g., my-blog-post)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && testSlugLookup()}
          />
          <button
            onClick={testSlugLookup}
            disabled={testLoading || !testSlug.trim()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {testLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Testing...
              </>
            ) : (
              'Test Slug'
            )}
          </button>
        </div>
        
        {testResult && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">✅ Test Result: SUCCESS</h3>
            <div className="text-sm space-y-1">
              <p><strong>ID:</strong> {testResult.id}</p>
              <p><strong>Title:</strong> {testResult.title}</p>
              <p><strong>Slug:</strong> {testResult.slug}</p>
              <p><strong>Category:</strong> {testResult.category}</p>
              <p><strong>Date:</strong> {testResult.date}</p>
              <p><strong>Read Time:</strong> {testResult.readTime}</p>
            </div>
            <div className="mt-3">
              <a 
                href={`/blog/${testResult.slug}`} 
                target="_blank" 
                className="text-blue-600 hover:underline"
              >
                → View Post Page
              </a>
            </div>
          </div>
        )}
        
        {testSlug && !testLoading && !testResult && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
  <h3 className="font-semibold text-red-800 mb-2">❌ Test Result: NOT FOUND</h3>
  <p className="text-sm text-red-700">
    No post found with slug &quot;{testSlug}&quot;. Check the available slugs below.
  </p>
</div>
        )}
      </div>

      {/* All Posts List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700">
            📝 All Posts ({posts.length} found)
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Click on any slug to test it automatically
          </p>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Slug</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Title</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.id} className={`border-t ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-3 text-gray-600">{post.id}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleSlugClick(post.slug)}
                      className="font-mono text-blue-600 hover:bg-blue-100 px-2 py-1 rounded transition-colors"
                      title="Click to test this slug"
                    >
                      {post.slug || 'no-slug'}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-gray-800 max-w-xs truncate" title={post.title}>
                    {post.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'publish' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-xs">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">💡 Debugging Tips:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
  <li>• Check browser console for detailed logs when testing slugs</li>
  <li>• WordPress slugs are usually lowercase with hyphens (kebab-case)</li>
  <li>• Only posts with status &apos;publish&apos; are accessible on the frontend</li>
  <li>• If a slug test fails, the post might not exist or have access issues</li>
  <li>• URL in browser should match exactly: <code>/blog/your-slug-here</code></li>
</ul>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={loadPosts}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          🔄 Refresh Data
        </button>
      </div>
    </div>
  );
}