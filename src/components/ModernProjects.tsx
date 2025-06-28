"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GithubIcon, PlayIcon } from "lucide-react";

const ModernProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "100px"
  });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and admin dashboard.",
      image: "/images/academy app1.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true,
      color: "#3B82F6"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses, built using React, Socket.io, and OpenAI API integration.",
      image: "/images/opinionZ-1.png",
      tags: ["React", "Node.js", "Socket.io", "OpenAI", "Redis"],
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/yourusername/ai-chat",
      featured: true,
      color: "#8B5CF6"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management platform with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "/images/auth.com.png",
      tags: ["React", "Express.js", "PostgreSQL", "WebSockets"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/yourusername/taskmanager",
      featured: false,
      color: "#10B981"
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data visualization with real-time updates, charts, and analytics for business intelligence.",
      image: "/images/portfolioDp.jpeg",
      tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "https://dashboard-demo.com",
      githubUrl: "https://github.com/yourusername/dashboard",
      featured: false,
      color: "#F59E0B"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging, story features, and content sharing capabilities.",
      image: "/images/portolioPhoto.png",
      tags: ["Next.js", "GraphQL", "MongoDB", "AWS S3", "WebRTC"],
      liveUrl: "https://social-demo.com",
      githubUrl: "https://github.com/yourusername/social",
      featured: true,
      color: "#EF4444"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Mobile-responsive fitness tracking application with workout plans, progress tracking, and social features.",
      image: "/images/dp2.jpg",
      tags: ["React Native", "Node.js", "MongoDB", "Expo"],
      liveUrl: "https://fitness-demo.com",
      githubUrl: "https://github.com/yourusername/fitness",
      featured: false,
      color: "#06B6D4"
    }
  ];

  const containerVariants = React.useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }), []);

  const ProjectCard = React.memo(({ project, index }: { project: typeof projects[0], index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    
    const handleMouse = React.useCallback((event: React.MouseEvent) => {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct * 50);
      y.set(yPct * 50);
    }, [x, y]);

    const handleMouseLeave = React.useCallback(() => {
      x.set(0);
      y.set(0);
      setActiveProject(null);
    }, [x, y]);

    const handleMouseEnter = React.useCallback(() => {
      setActiveProject(project.id);
    }, [project.id]);

    const cardVariants = {
      hidden: { 
        y: 50, 
        opacity: 0,
        scale: 0.9
      },
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: index * 0.1
        }
      }
    };

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
        style={{ perspective: 1000 }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <motion.div
          className="relative w-full h-96 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>

          {/* Glowing effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${project.color}40 0%, transparent 70%)`
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Featured badge */}
            {project.featured && (
              <motion.div
                className="self-end"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <span 
                  className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                  style={{ backgroundColor: project.color }}
                >
                  Featured
                </span>
              </motion.div>
            )}

            {/* Main content */}
            <div className="space-y-4">
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-300 text-sm lg:text-base leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <Link href={project.liveUrl} target="_blank">
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlayIcon size={16} />
                    Live Demo
                  </motion.button>
                </Link>

                <Link href={project.githubUrl} target="_blank">
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-gray-600 rounded-lg text-white font-medium hover:bg-black/60 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon size={16} />
                    Code
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Floating particles on hover */}
          {activeProject === project.id && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                  initial={{
                    x: Math.random() * 300,
                    y: Math.random() * 200,
                    opacity: 0
                  }}
                  animate={{
                    x: Math.random() * 300,
                    y: Math.random() * 200,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </motion.div>
    );
  });

  ProjectCard.displayName = 'ProjectCard';

  return (
    <section ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Animated shapes */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/10 rounded-lg"
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my recent work, featuring full-stack applications and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/projects">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-emerald-500 text-white font-semibold rounded-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;
