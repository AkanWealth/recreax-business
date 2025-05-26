"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function NewsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => onOpenChange(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-white rounded-lg shadow-xl p-6 z-50 w-full max-w-md flex flex-col lg:gap-20 "
          >
            <div className="flex flex-col lg:gap-20 justify-end items-start mb-4">
              <button
                onClick={() => onOpenChange(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <Image
              src="/images/Newsletter-person.png"
              alt="newsletter person"
              width={1000}
              height={1000}
              className="w-full lg:w-[360px] h-full max-h-[315px] object-cover"
            />
            {/* Add your modal content here */}

            <div className="flex flex-col sm:flex-row lg:gap-20 items-center justify-center">
              <div className="w-full sm:w-1/2 max-w-[400px]">
                <h3 className="lg:text-5xl  text-[#12233d] font-bold font-tomato ">
                  The ReCreax Newsletter
                </h3>
                <p className="text-lg text-[#65605c]  font-plus-jakarta-sans font-normal ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <h3 className="text-lg font-semibold">What You&apos;ll Get:</h3>
                <ul className="text-sm text-gray-500">
                  <li>Founder playbooks</li>
                  <li>Real case studies (MVPs, Pivots, Launches)</li>
                  <li>Execution frameworks you can use today</li>
                  <li>Curated resources from the ReCreaX network</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default NewsModal;
