'use client';

import React from 'react';

export default function ProgressSection() {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Section Breakdown 📊</h2>
      <div className="space-y-4">
        <div className="group">
          <div className="flex justify-between mb-2">
            <span className="text-blue-900 font-bold group-hover:text-blue-600 transition-colors">Reading & Writing</span>
            <span className="text-blue-900 font-bold">680/800</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="group">
          <div className="flex justify-between mb-2">
            <span className="text-green-900 font-bold group-hover:text-green-600 transition-colors">Math</span>
            <span className="text-green-900 font-bold">660/800</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '82.5%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}