"use client";
import { InstagramIcon, LucideLinkedin, XIcon, Github } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

function SocialMedia() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/avnish-gupta-23245a273/",
      icon: LucideLinkedin,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-400 hover:to-blue-500",
      glowColor: "shadow-blue-500/25",
    },
    {
      name: "GitHub", 
      href: "https://github.com/Avnish-oP",
      icon: Github,
      color: "from-gray-600 to-gray-700 dark:from-gray-400 dark:to-gray-500",
      hoverColor: "hover:from-gray-500 hover:to-gray-600 dark:hover:from-gray-300 dark:hover:to-gray-400",
      glowColor: "shadow-gray-500/25",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/Avnish__gupta",
      icon: XIcon,
      color: "from-blue-400 to-blue-500",
      hoverColor: "hover:from-blue-300 hover:to-blue-400",
      glowColor: "shadow-blue-400/25",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/avnish_kumar_gupta/?hl=en",
      icon: InstagramIcon,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500",
      glowColor: "shadow-pink-500/25",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap items-center justify-center gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className={`
                relative overflow-hidden
                glass-card rounded-2xl p-4
                bg-gradient-to-br ${social.color}
                ${social.hoverColor}
                border border-white/20
                shadow-lg ${social.glowColor}
                transition-all duration-300
                group-hover:shadow-xl group-hover:${social.glowColor.replace('/25', '/40')}
                backdrop-blur-xl
              `}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent 
                  size={28} 
                  className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                />
              </motion.div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
            </motion.div>

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm">
              {social.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  )
}

export default SocialMedia
