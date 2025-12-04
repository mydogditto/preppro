
'use client';

import React from 'react';
import { Send, X } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface ClippyChatProps {
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  isTyping: boolean;
  handleSend: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function ClippyChat({
  chatOpen,
  setChatOpen,
  messages,
  input,
  setInput,
  isTyping,
  handleSend,
  handleKeyPress
}: ClippyChatProps) {
  return (
    <>
      {/* Clippy AI Assistant Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
          aria-label="Open Clippy chat assistant"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="animate-bounce">
            <path d="M28 8 C32 8 35 11 35 15 L35 28 C35 34 30 38 24 38 C18 38 13 34 13 28 L13 12 C13 8 16 5 20 5 C24 5 27 8 27 12 L27 26 C27 28 25.5 30 23 30 C20.5 30 19 28 19 26 L19 14"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col border-2 border-gray-400">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path d="M28 8 C32 8 35 11 35 15 L35 28 C35 34 30 38 24 38 C18 38 13 34 13 28 L13 12 C13 8 16 5 20 5 C24 5 27 8 27 12 L27 26 C27 28 25.5 30 23 30 C20.5 30 19 28 19 26 L19 14"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none" />
              </svg>
              <span className="font-bold">Clippy - Your Study Buddy</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="hover:bg-gray-700 rounded p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask Clippy anything..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}