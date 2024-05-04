"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const highlightWords:any = {
    "Tailwind": "text-sky-500 dark:text-sky-500",
    "CSS": "text-sky-500 dark:text-sky-500",
    "ReactJS": "text-blue-500 dark:text-blue-500",
    "ExpressJS": "text-slate-500 dark:text-black-500",
    "C++": "text-purple-500 dark:text-purple-500",
    "JavaScript": "text-yellow-500 dark:text-yellow-500",
    "PostgreSQL": "text-blue-500 dark:text-blue-500"
  };

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const highlightClass = highlightWords[word] || 'dark:text-white text-black';
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${highlightClass}`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-xl lg:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};