'use client';

import React, { useState } from 'react';
import { BookOpen, Clock, TrendingUp, Target, Menu, User, Bell, Send, X } from 'lucide-react';
import Header from './Header';
import StatsCards from './StatusCards';
import TargetSchools from './TargetSchools';
import QuickActions from './QuickActions';
import ProgressSection from './ProgressSection';
import Sidebar from './Sidebar';
import ClippyChat from './ClippyChat';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function SATPrep() {
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('dashboard'); // NEW
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Clippy, your SAT study buddy! 📎 How can I help you today?" }
  ]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const getAIResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();

    if (lower.includes('help') || lower.includes('stuck')) {
      return "I'm here to help! What section are you working on - Reading & Writing or Math? I can explain concepts, give tips, or suggest practice problems! 📚";
    } else if (lower.includes('math')) {
      return "Math can be tricky! Are you working on algebra, geometry, or problem solving? I can break down any concept step by step. What specific topic do you need help with? 🧮";
    } else if (lower.includes('reading') || lower.includes('writing')) {
      return "Reading & Writing tips coming up! Remember: read the passage first, then tackle questions. Look for evidence in the text. Want me to share some practice strategies? ✍️";
    } else if (lower.includes('score') || lower.includes('improve')) {
      return "Great question! To boost your score, focus on: 1) Daily practice (consistency wins!), 2) Review mistakes carefully, 3) Time yourself on practice tests. You're already at 1340 - keep going! 🚀";
    } else if (lower.includes('nervous') || lower.includes('stress') || lower.includes('anxiety')) {
      return "Test anxiety is totally normal! Try these: take deep breaths, break study into small chunks, and remember - you've got 45 days to prepare. You've got this! 💪";
    } else if (lower.includes('time') || lower.includes('manage')) {
      return "Time management is key! For the SAT, pace yourself - don't spend too long on one question. Skip and come back if needed. Practice with a timer to build your speed! ⏱️";
    } else {
      return "That's a great question! I'm here to help with SAT prep, study tips, practice problems, or just to cheer you on. What would you like to work on? 😊";
    }
  };

  const handleSend = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header
        notificationsOpen={notificationsOpen}
        setNotificationsOpen={setNotificationsOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* DASHBOARD PAGE */}
        {currentPage === 'dashboard' && (
          <>
            <div className="mb-8 animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex! 👋</h1>
              <p className="text-gray-600">Your test is in <span className="font-bold text-purple-600">45 days</span>. Let's keep up the momentum!</p>
            </div>

            <StatsCards />
            <TargetSchools />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <QuickActions />
                <ProgressSection />
              </div>
              <Sidebar />
            </div>
          </>
        )}

        {/* LEADERBOARD PAGE */}
        {currentPage === 'leaderboard' && (
          <div className="max-w-4xl mx-auto">
            {/* Leaderboard Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard 🏆</h1>
              <p className="text-gray-600">Compete with your study group and climb the ranks!</p>
            </div>

            {/* Your Rank Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border-2 border-blue-300 mb-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-700 font-semibold mb-1">Your Current Rank</div>
                  <div className="flex items-center gap-3">
                    <div className="text-5xl font-bold text-blue-900">#4</div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">1340 pts</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">+2 positions ↑</span>
                        <span className="text-sm text-blue-700">160 pts to #1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-6xl">🎯</div>
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white p-6">
                <h2 className="text-xl font-bold">Top Performers</h2>
                <p className="text-sm text-yellow-50 mt-1">Updated in real-time</p>
              </div>

              <div className="p-6 space-y-3">
                {/* Rank 1 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 shadow-md transform hover:scale-102 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">MIT aspirant • 15 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-700">1480</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                  <div className="text-4xl">👑</div>
                </div>

                {/* Rank 2 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-300 shadow-sm transform hover:scale-102 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900">Marcus Johnson</div>
                    <div className="text-sm text-gray-600">UC Berkeley bound • 14 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-700">1450</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                  <div className="text-3xl">🥈</div>
                </div>

                {/* Rank 3 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 shadow-sm transform hover:scale-102 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900">Emma Rodriguez</div>
                    <div className="text-sm text-gray-600">Stanford dreamer • 13 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-700">1420</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                  <div className="text-3xl">🥉</div>
                </div>

                {/* Current User - Rank 4 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-blue-900">Alex (You)</div>
                    <div className="text-sm text-blue-700">On the rise • 8 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-900">1340</div>
                    <div className="text-xs text-blue-700">points</div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full">
                    <span className="text-sm font-bold text-green-700">+2 ↑</span>
                  </div>
                </div>

                {/* Ranks 5-8 */}
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-gray-900">Jordan Lee</div>
                    <div className="text-sm text-gray-600">Rising star • 10 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">1310</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-gray-900">Taylor Kim</div>
                    <div className="text-sm text-gray-600">Consistent performer • 11 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">1285</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                    7
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-gray-900">Alex Martinez</div>
                    <div className="text-sm text-gray-600">Steady climber • 9 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">1270</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    8
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-gray-900">Morgan Davis</div>
                    <div className="text-sm text-gray-600">New challenger • 7 tests completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">1245</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ClippyChat
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        messages={messages}
        input={input}
        setInput={setInput}
        isTyping={isTyping}
        handleSend={handleSend}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
}