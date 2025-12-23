"use client";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "gradient" | "dots" | "grid" | "waves";
  className?: string;
}

const AnimatedBackground = ({
  variant = "gradient",
  className = "",
}: AnimatedBackgroundProps) => {
  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 dark:from-emerald-500/30 dark:to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.8) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(129, 80, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
      </div>
    );
  }

  return null;
};

export default AnimatedBackground;
