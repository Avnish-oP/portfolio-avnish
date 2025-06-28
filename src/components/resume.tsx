"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { TracingBeam } from './ui/tracing-beam';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/80 dark:to-slate-950 relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        <TracingBeam className='px-6 pb-10'>
          <motion.div 
            ref={ref}
            className="max-w-4xl mx-auto relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Header Section */}
          <motion.div 
            className="glass-card-strong rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <motion.h1 
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Avnish Kumar
                </motion.h1>
                
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>R-796, Mangolpur, New Delhi-110083</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-emerald-400" />
                    <span>9650409384</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-purple-400" />
                    <span>kavnish1245@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end gap-4">
                <motion.a
                  href="/Resume-Avnish.pdf"
                  download="Resume-Avnish.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download PDF
                </motion.a>

                <div className="flex gap-4">
                  {[
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/avnish-gupta-23245a273/", color: "text-blue-400" },
                    { icon: FaGithub, href: "https://github.com/Avnish-oP", color: "text-gray-300" },
                    { icon: FaTwitter, href: "https://twitter.com/Avnish__gupta", color: "text-blue-300" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      className={`${social.color} hover:scale-110 transition-transform duration-300`}
                      whileHover={{ y: -2 }}
                    >
                      <social.icon size={28} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.div 
            className="glass-card rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-blue-400/30 pb-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PROFILE SUMMARY
              </span>
            </motion.h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Skilled software developer with strong expertise in JavaScript, specializing in popular technologies like Next.js, MongoDB, PostgreSQL, and Express.js. Proficient in data structures and algorithms (DSA) with familiarity in TypeScript. Proven track record in contributing to web application development and implementing advanced functionalities.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div 
            className="glass-card rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-blue-400/30 pb-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </motion.h2>
            <div className="space-y-6">
              <motion.div 
                className="border-l-4 border-blue-400 pl-6"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-white">React.js Developer</h3>
                <p className="text-emerald-400 font-medium">IOSC, Usar | Sept 2023 - Feb 2024</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>Contributed to the development of the college&apos;s food ordering app using React.js.</li>
                  <li>Implemented advanced search functionalities including fuzzy matching and category filters.</li>
                  <li>Developed cart management features, optimizing the checkout process with real-time subtotal calculations.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="glass-card rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-blue-400/30 pb-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EDUCATION
              </span>
            </motion.h2>
            <div className="space-y-6">
              <motion.div 
                className="border-l-4 border-emerald-400 pl-6"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      B.Tech in AI-DS <span className="text-purple-400">(Ongoing)</span>
                    </h3>
                    <p className="text-blue-400 font-medium">USAR, Surajmal Vihar</p>
                    <p className="text-gray-400">November 2022 - Present</p>
                  </div>
                  <span className="text-emerald-400 font-semibold">CGPA: 7.23</span>
                </div>
              </motion.div>
              <motion.div 
                className="border-l-4 border-emerald-400 pl-6"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">12th Grade</h3>
                    <p className="text-blue-400 font-medium">Sarvodaya Bal Vidyalaya, Mangolpuri</p>
                    <p className="text-gray-400">2021</p>
                  </div>
                  <span className="text-emerald-400 font-semibold">Percentage: 79.6%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div 
            className="glass-card rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-blue-400/30 pb-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </motion.h2>
            <div className="space-y-6">
              <motion.div 
                className="glass-card p-6 rounded-xl border border-purple-400/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">OpinionZ.com</h3>
                <p className="text-gray-300 mb-4">Developed a web-app in Next.js enabling users to share opinions anonymously and fact-check with a single click.</p>
                <p className="text-sm text-blue-400 font-medium">
                  <span className="text-gray-400">Technologies: </span>
                  Next.js, MongoDB, Node.js, TypeScript, OpenAI API, Tailwind CSS
                </p>
              </motion.div>
              <motion.div 
                className="glass-card p-6 rounded-xl border border-purple-400/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Shivalik Study Circle Web-App (Freelance Project)</h3>
                <p className="text-gray-300 mb-4">Created a website for a coaching institute allowing teachers to upload notes, write blogs, and make announcements through an admin dashboard.</p>
                <p className="text-sm text-blue-400 font-medium">
                  <span className="text-gray-400">Technologies: </span>
                  Next.js, MongoDB, Node.js, TypeScript, Content Management System, Tailwind CSS
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="glass-card rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-blue-400/30 pb-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SKILLS
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: "Languages", skills: "JavaScript, C/C++, Python, HTML, CSS, TypeScript, SQL" },
                { category: "Frameworks", skills: "Next.js, Express.js, React.js" },
                { category: "Tools", skills: "Git/Github, Postman" },
                { category: "Databases", skills: "MongoDB, PostgreSQL, MySQL" },
                { category: "Backend", skills: "Node.js, Django (familiar)" }
              ].map((skill, idx) => (
                <motion.div 
                  key={idx}
                  className="glass-card p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{skill.category}:</h4>
                  <p className="text-gray-300">{skill.skills}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accomplishments */}
          <motion.div 
            className="glass-card rounded-2xl p-8 mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-blue-400/30 pb-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ACCOMPLISHMENTS
              </span>
            </motion.h2>
            <ul className="space-y-3">
              {[
                "Third position in HackUnicorn 2.0 Hackathon.",
                "Fourth position in HackUnicorn 1.0 Hackathon.",
                "Third position in HackHeaven Hackathon."
              ].map((accomplishment, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex-shrink-0"></div>
                  {accomplishment}
                </motion.li>
              ))}
            </ul>
          </motion.div>          </motion.div>
        </TracingBeam>
      </div>
    </div>
  );
};

export default Resume;
