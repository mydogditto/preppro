'use client';

import React from 'react';
import { BookOpen, Clock, TrendingUp, Target } from 'lucide-react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg border-2 border-emerald-300 transform hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <span className="text-emerald-700 text-sm font-semibold">Current Score</span>
          <TrendingUp className="w-5 h-5 text-emerald-600 animate-pulse" />
        </div>
        <div className="text-3xl font-bold text-emerald-900">1340</div>
        <div className="text-sm text-emerald-600 mt-1 font-medium">+60 from last test 🎉</div>
      </div>

      <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-lg border-2 border-violet-300 transform hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <span className="text-violet-700 text-sm font-semibold">Target Score</span>
          <Target className="w-5 h-5 text-violet-600" />
        </div>
        <div className="text-3xl font-bold text-violet-900">1500</div>
        <div className="text-sm text-violet-600 mt-1 font-medium">160 points to go 🎯</div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-300 transform hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <span className="text-amber-700 text-sm font-semibold">Study Streak</span>
          <Clock className="w-5 h-5 text-amber-600" />
        </div>
        <div className="text-3xl font-bold text-amber-900">12</div>
        <div className="text-sm text-amber-600 mt-1 font-medium">days in a row 🔥</div>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-lg border-2 border-rose-300 transform hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <span className="text-rose-700 text-sm font-semibold">Practice Tests</span>
          <BookOpen className="w-5 h-5 text-rose-600" />
        </div>
        <div className="text-3xl font-bold text-rose-900">8/15</div>
        <div className="text-sm text-rose-600 mt-1 font-medium">completed 📚</div>
      </div>
    </div>
  );
}