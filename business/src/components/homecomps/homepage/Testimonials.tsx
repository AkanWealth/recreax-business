"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Testimonial {
  id: number;
  name: string;
  company: string;
  body: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

// Constants
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    company: "John Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 11,
    name: "Jane Doe",
    company: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// Components
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => (
  <motion.div
    initial={{ x: isActive ? 0 : 1000, opacity: isActive ? 1 : 0 }}
    animate={{ x: isActive ? 0 : 1000, opacity: isActive ? 1 : 0 }}
    exit={{ x: -1000, opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`absolute top-0 left-0 w-full ${isActive ? "block" : "hidden"}`}
  >
    <div className="bg-white flex flex-col gap-6 sm:gap-12 rounded-lg shadow-[4px_9px_35px_8px_rgba(151,_163,_57,_1)] m-4 sm:m-10 transition-shadow duration-300 p-4 sm:p-8">
      <p className="text-[#65605c] text-base sm:text-lg mb-4 sm:mb-6 font-montserrat">
        {testimonial.body}
      </p>
      <div className="flex flex-col items-start gap-2 sm:gap-3">
        <span className="font-semibold text-xl sm:text-2xl text-gray-800 font-plus-jakarta-sans">
          {testimonial.name}
        </span>
        <span className="text-[#2a2829] text-sm sm:text-base font-normal font-plus-jakarta-sans">
          {testimonial.company}
        </span>
      </div>
    </div>
  </motion.div>
);

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize the visible dots calculation
  const visibleDots = useMemo(() => {
    const totalDots = TESTIMONIALS.length;
    const halfWindow = 2;
    const windowStart = Math.max(
      0,
      Math.min(activeIndex - halfWindow, totalDots - 5)
    );
    const windowEnd = Math.min(totalDots, windowStart + 5);

    return Array.from(
      { length: windowEnd - windowStart },
      (_, i) => windowStart + i
    );
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-white gap-6 sm:gap-8 md:gap-16 py-6 sm:py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="flex flex-row sm:flex-col gap-4 sm:gap-6 items-center sm:items-start justify-center whitespace-nowrap text-black text-center font-semibold text-xl sm:text-2xl md:text-4xl w-fit font-plus-jakarta-sans">
        <Image
          src="/images/Works-star.png"
          alt="works-1"
          width={24}
          height={24}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        What Our Clients Say
      </h2>

      <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 w-full max-w-3xl">
        {/* Navigation Dots */}
        <div className="flex items-center gap-1 sm:gap-2">
          {visibleDots.map((index) => (
            <motion.div
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 sm:w-8 bg-[#97A339]"
                  : "w-1.5 sm:w-2 bg-[#DBDBD8]"
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === activeIndex}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 sm:gap-4 w-full">
          <button
            onClick={handlePrevious}
            className="bg-[#12233d] text-white p-2 sm:p-3 rounded-full hover:bg-[#1a3456] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="bg-[#12233d] text-white p-2 sm:p-3 rounded-full hover:bg-[#1a3456] transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
