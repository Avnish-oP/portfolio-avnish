"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Meteors } from "@/components/ui/meteors";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Form Data:", data);
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/send-message", data);
      console.log("Response:", response);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-xl p-6 md:p-8 bg-opacity-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl text-center font-bold mb-6 md:mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 lg:w-[20vw] p-2 md:p-3 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 p-2 md:p-3 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
          <input
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            className={`mt-1 p-2 md:p-3 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className={`mt-1 p-2 md:p-3 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors.message ? "border-red-500" : ""
            }`}
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <div className="flex justify-center">
          <motion.button
            type="submit"
            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

const FloatingIcons: React.FC = () => {
  const icons = [
    "🌟", "🚀", "💬", "📧", "📱", "👨‍💻","✅"
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl md:text-4xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 dark:from-black overflow-hidden via-white dark:via-gray-900 to-white dark:to-black bg-white bg-opacity-50">
      <Meteors number={20} />
      <FloatingIcons />
      <div className="relative z-10 flex justify-center items-center py-16">
        <ContactForm />
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Contact;
