import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center bg-[#f1fafc] py-10 px-4 sm:px-6 md:py-16 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4 md:gap-6 items-center justify-center mb-6 md:mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="w-fit text-2xl sm:text-3xl lg:text-5xl text-[#12233d] text-center font-tomato font-semibold sm:font-bold">
          Subscribe to our Newsletter
        </h2>
        <p className="text-[#2a2829] font-plus-jakarta-sans text-sm sm:text-base font-normal text-center max-w-[600px] px-4">
          Get weekly stories, frameworks, and proven tactics to help you think
          smarter, move faster, and become a 10x founder.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white transition-all duration-300 focus:ring-2 focus:ring-[#12233d]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          size={"lg"}
          className="w-full sm:w-auto bg-[#12233d] hover:bg-[#1e3a64] text-white rounded-xl font-plus-jakarta-sans font-semibold text-base transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Subscribe"
          )}
        </Button>
      </motion.form>

      {isSubmitted && (
        <motion.div
          className="mt-4 text-green-600 font-plus-jakarta-sans text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Thank you for subscribing!
        </motion.div>
      )}
    </motion.div>
  );
}

export default Newsletter;
