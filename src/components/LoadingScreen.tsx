"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has visited before
    const hasVisitedBefore = localStorage.getItem('portfolioHasVisited');
    
    if (!hasVisitedBefore) {
      // First time visitor - show loading screen
      setIsLoading(true);
      
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setIsLoading(false);
              // Mark as visited
              localStorage.setItem('portfolioHasVisited', 'true');
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      return () => clearInterval(timer);
    } else {
      // Returning visitor - skip loading screen
      setIsLoading(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/80 dark:to-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                A
              </h1>
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 mx-auto">
              <div className="w-full bg-gray-300/30 dark:bg-gray-800/50 rounded-full h-1 mb-4 backdrop-blur-sm">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 h-1 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Loading... {progress}%
              </motion.p>
            </div>

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full opacity-80"
                style={{
                  left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 100}px`,
                  top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 100}px`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
