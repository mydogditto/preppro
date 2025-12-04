'use client';

import React from 'react';

export default function QuickActions() {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Continue Your Prep ⚡</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="p-6 rounded-xl text-left transition-all duration-200 border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 hover:scale-105 hover:shadow-xl transform">
          <div className="text-purple-900 font-bold mb-2">Resume Practice Test</div>
          <div className="text-sm text-purple-800 font-medium">Test 9 - Section 2: Math</div>
          <div className="mt-3 text-xs text-purple-700 flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            35 minutes remaining
          </div>
        </button>

        <button className="p-6 rounded-xl text-left transition-all duration-200 border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 hover:scale-105 hover:shadow-xl transform">
          <div className="text-orange-900 font-bold mb-2">Daily Practice</div>
          <div className="text-sm text-orange-800 font-medium">10 questions • Mixed topics</div>
          <div className="mt-3 text-xs text-orange-700">15 minutes ⏱️</div>
        </button>

        <button className="p-6 rounded-xl text-left transition-all duration-200 border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 hover:scale-105 hover:shadow-xl transform">
          <div className="text-blue-900 font-bold mb-2">Reading & Writing</div>
          <div className="text-sm text-blue-800 font-medium">Focus on weak areas</div>
          <div className="mt-3 text-xs text-blue-700">Start practice 📖</div>
        </button>

        <button className="p-6 rounded-xl text-left transition-all duration-200 border-2 border-green-500 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 hover:scale-105 hover:shadow-xl transform">
          <div className="text-green-900 font-bold mb-2">Math Section</div>
          <div className="text-sm text-green-800 font-medium">Algebra & problem solving</div>
          <div className="mt-3 text-xs text-green-700">Start practice 🔢</div>
        </button>
      </div>
    </div>
  );
}