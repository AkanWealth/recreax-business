"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  const questions = [
    {
      question:
        "How is ReCreaX different from an agency or hiring freelancers?",
      answer:
        "Agencies are costly and often slow, while freelancers work in silos without accountability. ReCreaX is your dedicated execution team that moves with startup speed, ensuring seamless execution from strategy to launch.",
    },
    {
      question: "What industries do you support?",
      answer:
        "We specialise in SaaS, fintech, marketplaces, and any startup looking to build and scale digital products efficiently.",
    },
    {
      question: "Can I see case studies of your past projects?",
      answer: (
        <>
          Absolutely! Explore our case studies to see how we&apos;ve helped
          startups turn ideas into functional products.{" "}
          <Link href="/case-studies" className="text-[#12233d] underline">
            See Case Studies
          </Link>
        </>
      ),
    },
    {
      question: "What does the process look like?",
      answer:
        "We start with discovery, define your roadmap, and execute in agile sprints. You stay in the loop at every stage",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes! We don't just build; we help you iterate, scale, and optimise your product for long-term success.",
    },
    {
      question: "How can we get started?",
      answer:
        <>
          It&apos;s simple! Share your idea with us, and we&apos;ll create a clear execution plan to bring it to life.{" "}
          <a
            href="https://calendly.com/rasheed-ogunbakinde-recreax/30min"
            className="text-[#12233d] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Here
          </a>
        </>
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
          Frequently Asked Questions
        </h2>
        <p className="font-normal text-base md:text-lg font-plus-jakarta-sans text-[#12233d]">
          Have a question? We are here to answer.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-full "
      >
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

export default Faq;
