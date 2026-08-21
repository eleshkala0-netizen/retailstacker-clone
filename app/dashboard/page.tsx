'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/');
      return;
    }

    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  if (!user) return null;

  const firstName = user.name
    ? user.name.split(' ')[0]
    : user.email.split('@')[0];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              R
            </div>

            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              RetailStacker
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
          >
            Log Out
          </button>

        </div>
      </nav>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12">

        {/* Welcome */}
        <div className="mb-8">

          <p className="text-sm font-medium text-blue-600 mb-2">
            Dashboard
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome back, {firstName} 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Track your products, manage searches and grow your business.
          </p>

        </div>


        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

          {/* Products */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Products Tracked
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  0
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                📦
              </div>

            </div>

            <p className="text-xs text-gray-400 mt-4">
              Products you're currently monitoring
            </p>

          </div>


          {/* Searches */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Saved Searches
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  0
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-xl">
                🔎
              </div>

            </div>

            <p className="text-xs text-gray-400 mt-4">
              Searches you've saved for later
            </p>

          </div>


          {/* Account */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Account Type
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  Free
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                ⭐
              </div>

            </div>

            <p className="text-xs text-gray-400 mt-4">
              Upgrade when you need more features
            </p>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="mb-8">

          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <button
              onClick={() => router.push('/shop')}
              className="group bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl group-hover:bg-blue-100 transition">
                  🛍️
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Browse Products
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Explore available products
                  </p>
                </div>

              </div>

            </button>


            <button
              className="group bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-xl group-hover:bg-purple-100 transition">
                  🔍
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    New Search
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Start researching a product
                  </p>
                </div>

              </div>

            </button>


            <button
              className="group bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl group-hover:bg-green-100 transition">
                  📊
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    View Analytics
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Analyze your product data
                  </p>
                </div>

              </div>

            </button>

          </div>

        </div>


        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Account Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-lg font-bold text-gray-900">
                Account Details
              </h3>

              <span className="text-xs font-medium bg-green-50 text-green-700 px-3 py-1 rounded-full">
                Active
              </span>

            </div>

            <div className="space-y-4">

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Name
                </p>

                <p className="text-sm font-medium text-gray-800 mt-1">
                  {user.name || 'Not set'}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Email
                </p>

                <p className="text-sm font-medium text-gray-800 mt-1 break-all">
                  {user.email}
                </p>
              </div>

            </div>

          </div>


          {/* Getting Started */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">

            <p className="text-sm font-medium text-blue-100">
              Getting Started
            </p>

            <h3 className="text-xl font-bold mt-2">
              Start tracking your first product
            </h3>

            <p className="text-sm text-blue-100 mt-2 leading-relaxed">
              Find products, analyze their performance and keep everything
              organized in one place.
            </p>

            <button
              onClick={() => router.push('/shop')}
              className="mt-5 bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Products →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}