"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SearchIcon, MessageSquareIcon, UserIcon, MailIcon, FileTextIcon, SendIcon, PhoneIcon } from "lucide-react";

const ModernContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Support Ticket #2025 created successfully! (Message Sent)");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const quickLinks = [
    { title: "Reset Password", icon: UserIcon },
    { title: "Update Payment", icon: FileTextIcon },
    { title: "Request Feature", icon: MessageSquareIcon },
    { title: "Contact Support", icon: MailIcon, active: true },
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-20 bg-gray-100 dark:bg-zinc-950 text-black dark:text-white overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header - Help Center Style */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center space-y-6"
        >
            <h2 className="text-4xl md:text-5xl font-black">Help Center</h2>
            
            {/* Fake Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
                <input 
                    type="text" 
                    placeholder="What can we help you with?" 
                    className="w-full pl-12 pr-4 py-4 rounded shadow-md border-none outline-none focus:ring-2 focus:ring-netflix-red bg-white dark:bg-zinc-800 text-lg transition-all"
                />
            </div>
        </motion.div>

        {/* Recommended Topics */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
            {quickLinks.map((link, i) => (
                <div key={i} className={`flex items-center gap-3 p-4 rounded border ${link.active ? 'bg-white dark:bg-zinc-900 border-netflix-red' : 'bg-transparent border-gray-300 dark:border-zinc-800'} cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors`}>
                    <link.icon size={20} className={link.active ? "text-netflix-red" : "text-gray-500"} />
                    <span className="font-semibold text-sm">{link.title}</span>
                </div>
            ))}
        </motion.div>

        {/* Contact Form - "Submit a Ticket" */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded p-8 shadow-lg"
        >
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MailIcon className="text-netflix-red" />
                Submit a Request
             </h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-100 dark:bg-zinc-800 rounded border border-transparent focus:border-netflix-red focus:bg-white dark:focus:bg-black transition-colors outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-100 dark:bg-zinc-800 rounded border border-transparent focus:border-netflix-red focus:bg-white dark:focus:bg-black transition-colors outline-none" placeholder="john@example.com" />
                    </div>
                </div>
                
                <div>
                     <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">Subject (Issue Type)</label>
                     <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 bg-gray-100 dark:bg-zinc-800 rounded border border-transparent focus:border-netflix-red focus:bg-white dark:focus:bg-black transition-colors outline-none" placeholder="Project Inquiry / Collaboration" />
                </div>

                <div>
                     <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">Description</label>
                     <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 bg-gray-100 dark:bg-zinc-800 rounded border border-transparent focus:border-netflix-red focus:bg-white dark:focus:bg-black transition-colors outline-none resize-none" placeholder="Describe your project or inquiry..." />
                </div>

                <div className="flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="bg-netflix-red text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition-all flex items-center gap-2 disabled:opacity-50">
                        {isSubmitting ? "Processing..." : (
                            <>Submit Ticket <SendIcon size={18} /></>
                        )}
                    </button>
                </div>
             </form>
        </motion.div>
        
        <p className="text-center text-gray-500 text-sm flex items-center gap-2">
            Need faster support? Call <a href="tel:+919650409384" className="text-netflix-red hover:underline"><PhoneIcon size={18} /> </a>
        </p>

      </div>
    </section>
  );
};

export default ModernContact;
