"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccelFAQ() {
  const questions = [
    {
      question: "Is this a training program?",
      answer:
        "No. This is a hands-on, build studio. You come with an idea, and we help you turn it into a product.",
    },
    {
      question: "Do I need technical experience?",
      answer: "No. We work with both technical and non-technical founders",
    },
    {
      question: "What kind of startups do you support?",
      answer:
        "We support startups in FinTech, SaaS, marketplaces, HRTech, HealthTech, and more. You're good as long as your idea solves a real problem and has some validation.",
    },

    {
      question: "Will you help with fundraising?",
      answer:
        "Yes. While we&apos;re not a fundraising platform, we support fundraising readiness and offer investor prep, network access and (in future cohorts) warm intros to early-stage investors.",
    },
    {
      question: "Do you take equity?",
      answer:
        "Not at this stage. We&apos;re offering the first few cohorts at a flat fee to support bootstrapped and first-time founders.",
    },
    {
      question: "Will I own my product?",
      answer: "Yes. 100%.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-blue-50 py-12 md:py-16 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-[200px] flex flex-col gap-8 md:gap-12 lg:gap-16"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 text-center "
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#12233d] font-tomato font-bold ">
          ReCreaX Studio FAQs
        </h2>
      </motion.div>
      <motion.div variants={itemVariants} className="w-full ">
        <Accordion type="multiple" className="bg-transparent">
          {questions.map((question) => (
            <AccordionItem
              key={question.question}
              value={question.question}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left px-3 py-4  text-lg sm:text-2xl font-tomato font-semibold text-[#303237]  hover:no-underline">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className=" p-3  text-base font-plus-jakarta-sans font-normal text-[#65605c]">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
}

export default AccelFAQ;
