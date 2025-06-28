"use client";
import { InstagramIcon, LucideLinkedin, XIcon, Github, MapPinIcon, MailIcon, PhoneIcon, ArrowUpIcon, HeartIcon, CoffeeIcon, EyeIcon, UsersIcon } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Visitor counter state
  const [visitorStats, setVisitorStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0
  });

  // Initialize visitor counter on mount
  useEffect(() => {
    const initializeVisitorCounter = () => {
      try {
        // Get or initialize unique visitors count
        let uniqueVisitors = parseInt(localStorage.getItem('portfolioUniqueVisitors') || '0');
        
        // Check if this is a new unique visitor
        const isNewVisitor = !localStorage.getItem('portfolioVisited');
        if (isNewVisitor) {
          uniqueVisitors += 1;
          localStorage.setItem('portfolioUniqueVisitors', uniqueVisitors.toString());
          localStorage.setItem('portfolioVisited', 'true');
        }

        // Get or initialize total visits count
        let totalVisits = parseInt(localStorage.getItem('portfolioTotalVisits') || '0');
        
        // Check if this is a new session
        const isNewSession = !sessionStorage.getItem('portfolioSessionVisit');
        if (isNewSession) {
          totalVisits += 1;
          localStorage.setItem('portfolioTotalVisits', totalVisits.toString());
          sessionStorage.setItem('portfolioSessionVisit', 'true');
        }

        setVisitorStats({ totalVisits, uniqueVisitors });
      } catch (error) {
        console.warn('Visitor counter failed to initialize:', error);
        // Fallback to static numbers if storage is not available
        setVisitorStats({ totalVisits: 1247, uniqueVisitors: 892 });
      }
    };

    // Run after component mounts to avoid SSR issues
    const timer = setTimeout(initializeVisitorCounter, 100);
    return () => clearTimeout(timer);
  }, []);

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/avnish-gupta-23245a273/",
      icon: LucideLinkedin,
      color: "#0077B5",
      gradient: "from-[#0077B5] to-[#005885]",
      hoverGradient: "hover:from-[#0099D4] hover:to-[#0077B5]",
    },
    {
      name: "GitHub",
      href: "https://github.com/Avnish-oP",
      icon: Github,
      color: theme === 'dark' ? "#f0f6fc" : "#24292f",
      gradient: theme === 'dark' ? "from-gray-100 to-gray-300" : "from-gray-700 to-gray-900",
      hoverGradient: theme === 'dark' ? "hover:from-white hover:to-gray-200" : "hover:from-gray-600 hover:to-gray-800",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/Avnish__gupta",
      icon: XIcon,
      color: "#1DA1F2",
      gradient: "from-[#1DA1F2] to-[#0d8bd9]",
      hoverGradient: "hover:from-[#1DA1F2] hover:to-[#1a91da]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/avnish_kumar_gupta/?hl=en",
      icon: InstagramIcon,
      color: "#E4405F",
      gradient: "from-[#833AB4] via-[#E4405F] to-[#F77737]",
      hoverGradient: "hover:from-[#9146FF] hover:via-[#E4405F] hover:to-[#F77737]",
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" }
  ];

  const contactInfo = [
    {
      icon: MailIcon,
      label: "Email",
      value: "kavnish1245@gmail.com",
      href: "mailto:kavnish1245@gmail.com"
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+91 9650409384",
      href: "tel:+919650409384"
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "New Delhi, India",
      href: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/80 dark:to-slate-950">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      {/* Smaller floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/15 to-purple-400/15 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-20 right-16 w-24 h-24 rounded-full bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 dark:from-emerald-500/20 dark:to-cyan-500/20 blur-3xl"
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-16 left-1/3 w-28 h-28 rounded-full bg-gradient-to-r from-purple-400/15 to-blue-400/15 dark:from-purple-500/20 dark:to-blue-500/20 blur-3xl"
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Compact Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-6"
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let&apos;s create something amazing together.
          </motion.p>
        </motion.div>

        {/* Compact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* About Section */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-2 p-6 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                Avnish Kumar
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3" />
            </motion.div>
            
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences. 
              I transform ideas into reality through clean code, stunning design, and innovative solutions.
            </p>
            
            {/* Compact Social Media Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className={`
                        relative overflow-hidden rounded-xl p-3
                        bg-gradient-to-br ${social.gradient}
                        ${social.hoverGradient}
                        shadow-md hover:shadow-lg
                        transition-all duration-300
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                      `}
                      style={{
                        boxShadow: `0 0 15px ${social.color}30`
                      }}
                    >
                      <IconComponent 
                        size={20} 
                        className="text-white drop-shadow-lg relative z-10" 
                      />
                      
                      {/* Compact ripple effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: social.color }}
                        initial={{ scale: 0, opacity: 0.3 }}
                        whileHover={{ scale: 1.3, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    
                    {/* Compact tooltip */}
                    <motion.div
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50"
                      initial={{ y: 5, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact & Navigation */}
          <motion.div variants={itemVariants} className="space-y-4">
            
            {/* Quick Links */}
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 6 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <motion.span 
                        className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"
                        layoutId={`nav-${link.name}`}
                      />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                Get In Touch
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.li 
                      key={contact.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <a 
                        href={contact.href}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                      >
                        <motion.div
                          className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-3 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 shadow-md"
                          whileHover={{ scale: 1.05, rotate: 3 }}
                        >
                          <IconComponent size={14} className="text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{contact.label}</p>
                          <p className="text-sm font-medium">{contact.value}</p>
                        </div>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Compact Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-white/20 dark:border-white/10"
        >
          {/* Visitor Counter */}
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-r from-blue-400/8 via-purple-400/8 to-emerald-400/8 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-emerald-500/10 backdrop-blur-xl border border-slate-200/40 dark:border-white/10 shadow-lg">
              {/* Total Visits */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shadow-md"
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 10px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <EyeIcon size={18} className="text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="text-center">
                  <motion.p 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                    key={visitorStats.totalVisits}
                    initial={{ scale: 1.2, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {formatNumber(visitorStats.totalVisits)}
                  </motion.p>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    Total Visits
                  </p>
                </div>
              </motion.div>

              {/* Separator */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

              {/* Unique Visitors */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 shadow-md"
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(16, 185, 129, 0.3)",
                      "0 0 20px rgba(16, 185, 129, 0.5)",
                      "0 0 10px rgba(16, 185, 129, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <UsersIcon size={18} className="text-emerald-600 dark:text-emerald-400" />
                </motion.div>
                <div className="text-center">
                  <motion.p 
                    className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"
                    key={visitorStats.uniqueVisitors}
                    initial={{ scale: 1.2, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {formatNumber(visitorStats.uniqueVisitors)}
                  </motion.p>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    Unique Visitors
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-center md:text-left flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              &copy; {new Date().getFullYear()} Avnish Kumar. Made with 
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <HeartIcon size={16} className="text-red-500 mx-1" />
              </motion.span>
              and lots of 
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CoffeeIcon size={16} className="text-amber-600 dark:text-amber-400 mx-1" />
              </motion.span>
            </motion.p>
            
            {/* Compact Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-400/15 to-purple-400/15 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl border border-slate-200/40 dark:border-white/20 hover:from-blue-400/25 hover:to-purple-400/25 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 transition-all duration-300 shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Back to Top
              </span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
              >
                <ArrowUpIcon size={14} className="text-white" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
