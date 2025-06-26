"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import IconInput from "@/components/genui/IconInput";

import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

interface subscriberProps {
  email: string;
}
interface ValidationErrors {
  email?: string;
}

function NewsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [subscriber, setSubscriber] = useState<subscriberProps>({
    email: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    const hasContent = subscriber.email.trim();
    if (hasContent && !hasStartedTyping) {
      setHasStartedTyping(true);
    }
    const validate = () => {
      const newErrors: ValidationErrors = {};
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Email validation
      const email = subscriber?.email ?? "";
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }

      setErrors(newErrors);
      setIsValid(Object.keys(newErrors).length === 0);
    };

    if (hasStartedTyping) {
      validate();
    }
  }, [subscriber, hasStartedTyping]);
  const handleSubscribe = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 max-w-screen bg-black z-40"
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
                     w-[95%] sm:w-[90%] md:w-[85%] lg:w-full flex flex-col max-w-[1000px] gap-4 sm:gap-6 md:gap-8 lg:gap-16 
                     h-fit "
          >
            <div className="flex flex-row justify-end items-start sticky top-0 bg-transparent py-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenChange(false)}
                className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
              >
                ✕
              </motion.button>
            </div>
            <div className="flex sm:flex-row items-center justify-between flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  unoptimized={true}
                  src="/images/NewsletterPerson.svg"
                  alt="newsletter person"
                  width={1000}
                  height={1000}
                  className="w-fit mx-auto h-[196px]   rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col  gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start"
              >
                <div className="w-full max-w-[450px]">
                  <h3 className="text-xl sm:text-2xl md:text-[32px] leading-[140%]text-[#12233d] font-semibold font-tomato">
                    Stay Ahead with Weekly Insights
                  </h3>
                  <p className="text-base text-[#2a2829] font-plus-jakarta-sans font-normal leading-[148%] mt-2 sm:mt-4">
                    Get Founders Playbook, Case Studies, Execution Guides to
                    validate and build ideas smarter
                  </p>
                </div>
                {isSubscribed ? (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#12233d] font-bold font-tomato">
                      Thank you for subscribing!
                    </h3>
                  </div>
                ) : (
                  <div className="flex font-plus-jakarta-sans flex-col w-full rounded-2xl bg-white p-6 gap-4">
                    <IconInput
                      id="email"
                      value={subscriber?.email}
                      type="email"
                      label="email"
                      Icon={<IoMailOutline className="text-[#65605c]" />}
                      placeholder="Email Address"
                      onChange={(value) => {
                        setSubscriber((prev) => ({
                          ...prev,
                          email: value.target.value,
                        }));
                      }}
                      errorMsg={errors.email}
                    />
                    <Button
                      disabled={!isValid}
                      onClick={handleSubscribe}
                      className="w-full disabled:bg-gray-500 hover:bg-[#38547b] bg-[#12233d] text-white cursor-pointer"
                    >
                      {isLoading ? (
                        <FaSpinner className="animate-spin mr-2 cursor-progress" />
                      ) : (
                        "Subscribe Now"
                      )}
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default NewsModal;
