'use client';

import React from 'react';

export default function TargetSchools() {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Target Schools 🎓</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Edit Schools</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-md transition-all">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-bold text-blue-900 mb-1">MIT</div>
              <div className="text-xs text-blue-700 font-medium">Reach School</div>
            </div>
            <div className="text-2xl">🎯</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 bg-blue-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
            <span className="text-xs font-bold text-blue-900">1500</span>
          </div>
          <div className="text-xs text-blue-700 mt-1">Middle 50%: 1520-1580</div>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 hover:shadow-md transition-all">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-bold text-green-900 mb-1">UC Berkeley</div>
              <div className="text-xs text-green-700 font-medium">Target School</div>
            </div>
            <div className="text-2xl">✓</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 bg-green-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <span className="text-xs font-bold text-green-900">1410</span>
          </div>
          <div className="text-xs text-green-700 mt-1">Middle 50%: 1330-1530</div>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-bold text-emerald-900 mb-1">UCLA</div>
              <div className="text-xs text-emerald-700 font-medium">Safety School</div>
            </div>
            <div className="text-2xl">✓✓</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 bg-emerald-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <span className="text-xs font-bold text-emerald-900">1300</span>
          </div>
          <div className="text-xs text-emerald-700 mt-1">Middle 50%: 1290-1510</div>
        </div>
      </div>
    </div>
  );
}