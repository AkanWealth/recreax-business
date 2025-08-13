"use client";

import React, { useState, useEffect } from "react";
import { PhoneInput } from "@/components/genui/PhoneInput";
import InputEle from "@/components/genui/InputEle";
import { HiArrowRight } from "react-icons/hi2";
// import { CheckCircle } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= 10 && val.length <= 15), {
      message: "Phone number must be between 10 and 15 digits",
    })
    .refine((val) => !val || /^\+?[0-9\s-]*$/.test(val), {
      message: "Phone number can only contain digits, spaces, and hyphens",
    }),
  needs: z
    .array(z.string())
    .min(1, "Please select at least one option"),
  budget: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    needs: [],
    budget: "",
    timeline: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  useEffect(() => {
    const allRequiredFieldsFilled =
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.company.trim() !== "" &&
      formData.needs.length > 0 &&
      formData.timeline.trim() !== "" &&
      formData.message.trim() !== "";
    setIsFormValid(allRequiredFieldsFilled);
  }, [formData]);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        needs: [],
        budget: "",
        timeline: "",
        message: "",
      });
      setShowSuccess(false);
      setSubmitError("");
      setErrors({});
    }
  }, [isOpen]);

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(value)
        ? prev.needs.filter((item) => item !== value)
        : [...prev.needs, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const validatedData = formSchema.parse(formData);

      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xblkqeol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: validatedData.fullName,
          email: validatedData.email,
          company: validatedData.company,
          phone: validatedData.phone,
          needs: validatedData.needs.join(", "),
          budget: validatedData.budget,
          timeline: validatedData.timeline,
          message: validatedData.message,
          submissionDate: new Date().toISOString(),
          submissionSource: "Contact Modal - Book Free Session",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Clear form and show success
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        needs: [],
        budget: "",
        timeline: "",
        message: "",
      });
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 10000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormData;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      } else {
        console.error("Form submission error:", error);
        setSubmitError("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    setSubmitError("");
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Modal container with proper scrolling */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Fixed header */}
        <div className="flex justify-end p-4 border-b border-gray-100 flex-shrink-0">
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          {showSuccess ? (
            // Success State
            <div className="text-center py-8">
              <div className="mb-6">
                {/* <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" /> */}
                <h1 className="text-6xl font-boldmb-2">🎉</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Thanks for reaching out!
                </h2>
                <p className="text-gray-600 text-sm">
                  We&apos;ve received your consultation request. Our team will get back to you within 24 hours to schedule your free 1:1 session.
                </p>
              </div>
              <div className="bg-[#12233D] rounded-lg p-4 mb-4">
                <button
                  onClick={handleClose}
                  className="text-white font-medium">
                  Close
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                Need immediate assistance? Email us at{" "}
                <a
                  href="mailto:info@recreax.com"
                  className="text-blue-500 hover:underline"
                >
                  info@recreax.com
                </a>
              </p>

            </div>
          ) : (
            // Form State
            <>
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Book a Free 1:1 Session
                </h2>
                <p className="text-gray-600">
                  Let&apos;s discuss your project, idea, or challenge. Fill in the details so we can prepare and make the most of our session.
                </p>
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-800 font-medium">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal and Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputEle
                    type="text"
                    id="fullName"
                    label="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    errorMsg={errors.fullName}
                    addStyle="transition-all duration-300 hover:scale-[1.01]"
                  />
                  <InputEle
                    type="email"
                    id="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    errorMsg={errors.email}
                    addStyle="transition-all duration-300 hover:scale-[1.01]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputEle
                    type="text"
                    id="company"
                    label="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    errorMsg={errors.company}
                    addStyle="transition-all duration-300 hover:scale-[1.01]"
                  />
                  <div className="w-full h-fit flex flex-col gap-3">
                    <label className="text-lg font-plus-jakarta-sans font-semibold ">
                      Phone Number
                    </label>
                    <PhoneInput
                      defaultCountry="GB"
                      international
                      className="bg-white *:bg-white *:border-gray-400 focus:border-blue-500 transition-all duration-300"
                      value={formData.phone}
                      placeholder="Mobile Number"
                      onChange={(value) => setFormData({ ...formData, phone: value })}
                    />
                    <p className="text-red-500 text-sm font-medium">{errors.phone}</p>
                  </div>
                </div>

                {/* Project Needs */}
                <div>
                  <label className="text-lg font-plus-jakarta-sans font-semibold  block mb-2">
                    What best describes your need
                  </label>
                  <p className="text-xs text-gray-500 mb-3">Choose multiple options if applicable</p>
                  <div className="space-y-2">
                    {[
                      "Product Design",
                      "Website/Web App Development",
                      "Mobile App Development",
                      "UX Research/Product Discovery",
                      "Business Growth Strategy",
                      "Other",
                    ].map((option) => (
                      <label key={option} className="flex items-center text-sm">
                        <input
                          type="checkbox"
                          checked={formData.needs.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className="mr-3 w-4 h-4"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.needs && <p className="text-red-500 text-sm font-medium mt-2">{errors.needs}</p>}
                </div>

                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-lg font-plus-jakarta-sans font-semibold block mb-2">
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 transition-all duration-300 text-gray-700"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under £10,000">&lt; Under £10,000</option>
                      <option value="£10,000 - £25,000">£10,000 - £25,000</option>
                      <option value="£25,000 - £50,000">£25,000 - £50,000</option>
                      <option value="£50,000 - £100,000">&gt; £50,000 - £100,000</option>
                      <option value="Over £100,000">Over £100,000</option>
                      <option value="Let’s discuss">Let&apos;s discuss</option>

                    </select>
                    {errors.budget && <p className="text-red-500 text-sm font-medium mt-1">{errors.budget}</p>}
                  </div>
                  <div>
                    <label className="text-lg font-plus-jakarta-sans font-semibold  block mb-2">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 transition-all duration-300 text-gray-700"
                    >
                      <option value="">When do you need this?</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="2- 3 months">2-3 months</option>
                      <option value="3 - 6 months">3 - 6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                    {errors.timeline && <p className="text-red-500 text-sm font-medium mt-1">{errors.timeline}</p>}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="text-lg font-plus-jakarta-sans font-semibold  block mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project goals, challenges, target audiences, and specific requirement"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 transition-all duration-300 min-h-[120px] resize-vertical"
                    rows={5}
                  />
                  {errors.message && <p className="text-red-500 text-sm font-medium mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full font-semibold text-base flex items-center justify-center gap-2 py-4 px-6 rounded-xl transition-all duration-300 ${isFormValid && !isSubmitting
                      ? "bg-[#12233D] hover:bg-gray-700 text-white cursor-pointer"
                      : "bg-gray-400 text-white cursor-not-allowed"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Free Session
                      <HiArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to contact you about your project and schedule your consultation.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}