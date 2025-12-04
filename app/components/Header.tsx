'use client';

import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  notificationsOpen: boolean;
  setNotificationsOpen: (open: boolean) => void;
  currentPage: string; // NEW
  setCurrentPage: (page: string) => void; // NEW
}

export default function Header({ notificationsOpen, setNotificationsOpen, currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded transform hover:rotate-12 transition-transform"></div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Prep Pro SAT Edition</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`font-medium relative transition-colors ${currentPage === 'dashboard'
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Dashboard
          </button>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">Practice Tests</button>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">Study Materials</button>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">Progress</button>
          <button
            onClick={() => setCurrentPage('leaderboard')}
            className={`font-medium relative transition-colors ${currentPage === 'leaderboard'
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Leaderboard 🏆
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative"
            >
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors hover:scale-110 transform" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                3
              </span>
            </button>

            {notificationsOpen && (
              <div className="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                  <h3 className="font-bold text-lg">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">New practice test available! 🎯</div>
                        <div className="text-sm text-gray-600 mb-1">Practice Test 10 is now ready. Complete it before your test date.</div>
                        <div className="text-xs text-gray-400">2 hours ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-b border-gray-100 hover:bg-green-50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">You moved up in rankings! 🎉</div>
                        <div className="text-sm text-gray-600 mb-1">Congrats! You're now #4 on the leaderboard, up 2 spots.</div>
                        <div className="text-xs text-gray-400">5 hours ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-b border-gray-100 hover:bg-purple-50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">Study reminder ⏰</div>
                        <div className="text-sm text-gray-600 mb-1">Don't forget to complete your vocabulary review today!</div>
                        <div className="text-xs text-gray-400">1 day ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50">
                    <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View All Notifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors hover:scale-110 transform" />
          <Menu className="w-5 h-5 text-gray-600 md:hidden cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}