"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  const loadingWords = ["Welcome", "Loading", "Almost there", "Get ready"];

  useEffect(() => {
    // Check if user has visited before
    const hasVisitedBefore = localStorage.getItem("portfolioHasVisited");

    if (!hasVisitedBefore) {
      // First time visitor - show loading screen
      setIsLoading(true);

      // Word rotation
      const wordTimer = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % loadingWords.length);
      }, 800);

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            clearInterval(wordTimer);
            setTimeout(() => {
              setIsLoading(false);
              // Mark as visited
              localStorage.setItem("portfolioHasVisited", "true");
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 25);

      return () => {
        clearInterval(timer);
        clearInterval(wordTimer);
      };
    } else {
      // Returning visitor - skip loading screen
      setIsLoading(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-zinc-950 dark:via-indigo-950/50 dark:to-purple-950/30 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Refined animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 dark:from-indigo-400/25 dark:to-purple-400/25 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 dark:from-purple-400/25 dark:to-indigo-400/25 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="text-center relative z-10">
            {/* Enhanced Logo with refined colors */}
            <motion.div
              className="mb-12 relative"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 60px rgba(139, 92, 246, 0.4)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block rounded-full p-6"
              >
                <h1 className="text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  A
                </h1>
              </motion.div>

              {/* Refined rotating rings around logo */}
              <motion.div
                className="absolute inset-0 border-2 border-indigo-400/25 dark:border-indigo-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.5 }}
              />
              <motion.div
                className="absolute inset-0 border border-purple-400/15 dark:border-purple-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.8 }}
              />
            </motion.div>

            {/* Animated loading text with refined colors */}
            <motion.div
              className="mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWord}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-semibold bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
                >
                  {loadingWords[currentWord]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Loading bar with refined colors */}
            <div className="w-80 mx-auto">
              <div className="relative w-full bg-slate-200/50 dark:bg-zinc-800/50 rounded-full h-2 mb-4 backdrop-blur-sm overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "50%" }}
                />
              </div>
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  {progress}%
                </p>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full"
                />
              </motion.div>
            </div>

            {/* Enhanced Floating particles with refined colors */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
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
