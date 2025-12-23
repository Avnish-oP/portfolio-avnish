"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const [visitorStats, setVisitorStats] = useState({ totalVisits: 0, uniqueVisitors: 0 });

  useEffect(() => {
    // Basic counter logic (simplified for minimal footprint)
    const initStats = () => {
        let unique = parseInt(localStorage.getItem("portfolioUnique") || "890");
        let total = parseInt(localStorage.getItem("portfolioTotal") || "1240");
        
        if (!sessionStorage.getItem("session")) {
            total++;
            unique++;
            localStorage.setItem("portfolioTotal", total.toString());
            localStorage.setItem("portfolioUnique", unique.toString());
            sessionStorage.setItem("session", "true");
        }
        setVisitorStats({ totalVisits: total, uniqueVisitors: unique });
    };
    initStats();
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/avnish_kumar_gupta/?hl=en" },
    { icon: Twitter, href: "https://twitter.com/Avnish__gupta" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/avnish-gupta-23245a273/" },
    { icon: Github, href: "https://github.com/Avnish-oP" },
  ];

  const footerLinks = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Center", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Center", "Privacy", "Contact Us"],
  ];

  return (
    <footer className="bg-zinc-950 text-gray-500 py-16 px-4 md:px-12 border-t border-zinc-900 font-sans text-sm">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
            {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition-colors">
                    <social.icon size={24} />
                </a>
            ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {footerLinks.map((col, i) => (
                <ul key={i} className="space-y-3">
                    {col.map((link) => (
                        <li key={link}>
                            <Link href="#" className="hover:underline decoration-1 underline-offset-2">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>

        {/* Service Code / Actions */}
        <div className="space-y-4">
            <button className="border border-gray-500 text-gray-500 px-4 py-2 text-sm hover:text-white hover:border-white transition-colors">
                Service Code
            </button>
            
            <div className="flex flex-col md:flex-row gap-4 text-xs font-mono mt-4">
                <span>SYSTEM STATUS: ONLINE</span>
                <span>VISITS: {visitorStats.totalVisits.toLocaleString()}</span>
                <span>UNIQUE: {visitorStats.uniqueVisitors.toLocaleString()}</span>
            </div>

            <p className="text-xs mt-4">
                &copy; 1997-{new Date().getFullYear()} Avnish, Inc.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
