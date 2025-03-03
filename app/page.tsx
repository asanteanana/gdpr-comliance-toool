'use client';

import { useState } from 'react';
import { FiSearch, FiFileText } from 'react-icons/fi';
import { RiShieldKeyholeLine, RiShieldCheckLine } from 'react-icons/ri';
import { FiLock, FiDatabase, FiUserCheck } from 'react-icons/fi';
import { BiCookie } from 'react-icons/bi';
import { motion } from 'framer-motion';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!url) return;
    setIsSearching(true);
    // Simulate search time
    setTimeout(() => setIsSearching(false), 3000);
  };

  const iconVariants = {
    searching: (custom: number) => ({
      y: [0, -8, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom * 0.15,
      }
    }),
    idle: {
      y: 0
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F5F7FF] flex flex-col items-center px-4 font-[ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Helvetica_Neue,Arial,sans-serif]">
      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-3xl px-4 min-h-screen pb-24 pt-[38vh]">
        <div className="flex items-center gap-2 mb-4">
          <RiShieldCheckLine className="w-[42px] h-[42px] text-blue-500/90" />
          <h1 className="text-[40px] font-semibold text-[#2D3748] tracking-[-0.02em]">
            GDPR Compliance Tool
          </h1>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl relative mb-4">
          <input
            type="text"
            placeholder="Scan Website for GDPR Compliance"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isSearching}
            className="w-full px-6 py-3.5 pr-12 rounded-full border border-gray-200 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]
                       text-[14.5px] text-gray-700 placeholder:text-gray-400
                       disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSearch}
            disabled={!url || isSearching}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5
                       text-gray-500 hover:text-gray-700
                       transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSearch className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-500 text-[13.5px] mb-4">
          Enter a website URL to scan for GDPR compliance elements and get a detailed report.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className="min-w-[140px] h-10 bg-white 
                     rounded-full text-gray-600
                     border border-gray-200
                     shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                     hover:border-gray-300 hover:bg-gray-50/50
                     active:scale-[0.98] active:bg-gray-100
                     transition-all duration-200 px-5
                     text-[14.5px] font-medium tracking-[-0.01em]
                     flex items-center justify-center gap-2"
          >
            <FiFileText className="w-4 h-4" />
            View Reports
          </button>
          <button
            className="min-w-[180px] h-10 bg-white 
                     rounded-full text-gray-600
                     border border-gray-200
                     shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                     hover:border-gray-300 hover:bg-gray-50/50
                     active:scale-[0.98] active:bg-gray-100
                     transition-all duration-200 px-5
                     text-[14.5px] font-medium tracking-[-0.01em]
                     flex items-center justify-center gap-2"
          >
            <RiShieldKeyholeLine className="w-4 h-4" />
            Learn GDPR Basics
          </button>
        </div>

        {/* Compliance Aspects */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          <div className="relative group">
            <motion.div
              variants={iconVariants}
              animate={isSearching ? "searching" : "idle"}
              custom={0}
              className="p-3 bg-gradient-to-b from-white to-blue-50/50 rounded-full text-blue-600/90 
                        border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                        hover:border-blue-200 transition-all duration-200
                        cursor-help"
            >
              <BiCookie className="w-5 h-5" />
            </motion.div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5
                          bg-gray-900 text-white text-[13px] rounded-md
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          whitespace-nowrap pointer-events-none">
              Cookie Consent
            </div>
          </div>
          <div className="relative group">
            <motion.div
              variants={iconVariants}
              animate={isSearching ? "searching" : "idle"}
              custom={1}
              className="p-3 bg-gradient-to-b from-white to-purple-50/50 rounded-full text-purple-600/90 
                        border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                        hover:border-purple-200 transition-all duration-200
                        cursor-help"
            >
              <FiLock className="w-5 h-5" />
            </motion.div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5
                          bg-gray-900 text-white text-[13px] rounded-md
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          whitespace-nowrap pointer-events-none">
              Privacy Policy
            </div>
          </div>
          <div className="relative group">
            <motion.div
              variants={iconVariants}
              animate={isSearching ? "searching" : "idle"}
              custom={2}
              className="p-3 bg-gradient-to-b from-white to-green-50/50 rounded-full text-green-600/90 
                        border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                        hover:border-green-200 transition-all duration-200
                        cursor-help"
            >
              <FiDatabase className="w-5 h-5" />
            </motion.div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5
                          bg-gray-900 text-white text-[13px] rounded-md
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          whitespace-nowrap pointer-events-none">
              Data Processing
            </div>
          </div>
          <div className="relative group">
            <motion.div
              variants={iconVariants}
              animate={isSearching ? "searching" : "idle"}
              custom={3}
              className="p-3 bg-gradient-to-b from-white to-orange-50/50 rounded-full text-orange-600/90 
                        border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                        hover:border-orange-200 transition-all duration-200
                        cursor-help"
            >
              <FiUserCheck className="w-5 h-5" />
            </motion.div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5
                          bg-gray-900 text-white text-[13px] rounded-md
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          whitespace-nowrap pointer-events-none">
              User Rights
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
