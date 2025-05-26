"use client";

import React from "react";
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-[#f3f3f3] rounded-lg shadow-xl p-4 sm:p-6 md:py-8 md:px-10 lg:py-12 lg:px-14 z-50 
                     w-[95%] sm:w-[90%] md:w-[85%] lg:w-full flex flex-col max-w-[1000px] gap-4 sm:gap-6 md:gap-8 lg:gap-20 
                     h-[90vh] sm:h-fit max-h-[90vh] overflow-y-auto"
          >
            <div className="flex flex-row justify-end items-start sticky top-0 bg-transparent py-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenChange(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/images/Newsletter-person.png"
                alt="newsletter person"
                width={1000}
                height={1000}
                className="w-fit mx-auto h-[200px] sm:h-[250px] md:h-[280px] lg:max-h-[315px]  rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center justify-center"
            >
              <div className="w-full sm:w-1/2 max-w-[400px]">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#12233d] font-bold font-tomato">
                  The ReCreax Newsletter
                </h3>
                <p className="text-base sm:text-lg text-[#65605c] font-plus-jakarta-sans font-normal mt-2 sm:mt-4">
                  Whether you&apos;re validating your idea, building an MVP or
                  preparing for launch, we deliver short, sharp insights every
                  week to help you validate faster, build smarter, and stay
                  ahead.
                </p>
              </div>
              <div className="w-full flex flex-col gap-4 sm:gap-6 sm:w-1/2 max-w-[400px]">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-tomato text-[#12233d] font-semibold">
                  What You&apos;ll Get:
                </h3>
                <ul className="text-sm sm:text-base font-plus-jakarta-sans font-semibold lg:text-lg text-[#65605c] list-disc pl-4 space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-1"
                  >
                    Founder playbooks
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-1"
                  >
                    Real case studies (MVPs, Pivots, Launches)
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-1"
                  >
                    Execution frameworks you can use today
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-1"
                  >
                    Curated resources from the ReCreaX network
                  </motion.li>
                </ul>
              </div>
            </motion.div>
            <div className="flex flex-col w-full rounded-2xl bg-white  px-2 py-4 sm:p-6 gap-4  sm:gap-6  lg:gap-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-tomato text-[#12233d] font-semibold">
                What You&apos;ll Get:
              </h3>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default NewsModal;
