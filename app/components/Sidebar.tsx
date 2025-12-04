'use client';

import React from 'react';

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Study Plan */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Plan ✅</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input type="checkbox" checked readOnly className="mt-1 cursor-pointer" />
            <div className="flex-1">
              <div className="text-gray-900 line-through">Morning practice (20 min)</div>
              <div className="text-xs text-gray-500">Completed at 9:15 AM ✨</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 cursor-pointer" />
            <div className="flex-1">
              <div className="text-gray-900 font-medium">Review vocabulary</div>
              <div className="text-xs text-gray-500">30 minutes 📚</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 cursor-pointer" />
            <div className="flex-1">
              <div className="text-gray-900 font-medium">Math practice set</div>
              <div className="text-xs text-gray-500">45 minutes 🔢</div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Test */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-xl text-white shadow-xl transform hover:scale-105 transition-all duration-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <h2 className="text-lg font-bold mb-2 text-white">Test Day Countdown ⏰</h2>
          <div className="text-5xl font-bold mb-2 text-white">45</div>
          <div className="text-white mb-4 font-medium">days remaining</div>
          <button className="w-full bg-white text-purple-700 font-bold py-3 rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
            View Test Details →
          </button>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Resources 🎯</h2>
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all transform hover:translate-x-1">
            📚 Formula sheet
          </button>
          <button className="w-full text-left px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all transform hover:translate-x-1">
            📝 Essay tips
          </button>
          <button className="w-full text-left px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all transform hover:translate-x-1">
            ⏱️ Time management
          </button>
          <button className="w-full text-left px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all transform hover:translate-x-1">
            💡 Test strategies
          </button>
        </div>
      </div>
    </div>
  );
}