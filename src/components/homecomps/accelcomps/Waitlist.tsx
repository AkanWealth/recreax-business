"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import InputEle from "@/components/genui/InputEle";
import { HiArrowRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(60, "Name must be less than 60 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(50, "Email must be less than 50 characters"),
  website: z.string().url("Please enter a valid URL"),
  industry: z.enum([
    "",
    "SaaS",
    "Fintech",
    "HealthTech",
    "Marketplace",
    "HRTech",
    "Other",
  ]),
  stage: z.enum([
    "",
    "Idea only",
    "Wireframes",
    "Prototypes",
    "MVP",
    "Post-MVP",
  ]),
  funding: z.enum([
    "",
    "Bootstrapped",
    "Grant",
    "Friends & Family",
    "Angel Investor",
    "Don't know yet",
    "Other",
  ]),
  challenges: z
    .string()
    .min(10, "Please enter your biggest challenge")
    .max(100, "Challenge must be less than 100 characters"),
  idea: z
    .string()
    .min(10, "Please enter your idea")
    .max(300, "Idea must be less than 300 characters"),
});

type FormData = z.infer<typeof formSchema>;

function Waitlist() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    website: "",
    industry: "",
    stage: "",
    funding: "",
    challenges: "",
    idea: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isFormValid, setIsFormValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (allFieldsFilled) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = formSchema.parse(formData);
      // TODO: Handle form submission with validatedData
      console.log("Form submitted:", validatedData);
      // Set submission state to true after successful submission
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormData;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <section className="bg-white w-full min-h-screen">
      <div className="flex flex-col py-8 md:py-16 lg:py-[120px] mx-auto gap-6 lg:gap-12 max-w-[800px] px-4 sm:px-6">
        <div className="w-full flex flex-col gap-2 animate-fadeIn">
          <h2 className="font-tomato font-bold leading-[140%] text-center text-[#12233d] text-3xl sm:text-4xl lg:text-5xl">
            Join the Recreax Accelerator
          </h2>
          <p className="font-normal text-sm sm:text-base text-center leading-[148%] font-plus-jakarta-sans text-[#65605c]">
            Reserve your spot for mentorship, funding, and growth.
          </p>
        </div>
        <form className="w-full flex flex-col gap-4 sm:gap-6 font-plus-jakarta-sans animate-slideUp">
          <InputEle
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            id="fullName"
            addStyle="w-full"
            required
            placeholder="Enter your first and last name"
            errorMsg={errors.fullName}
          />
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <InputEle
              label="Email Address"
              type="email"
              id="email"
              required
              addStyle="flex-1"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              errorMsg={errors.email}
            />
            <InputEle
              label="Website/Pitch Deck"
              type="text"
              id="website"
              required={false}
              addStyle="flex-1"
              placeholder="https://"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              errorMsg={errors.website}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <InputEle
              label="Industry"
              type="select"
              id="industry"
              required
              addStyle="flex-1"
              options={[
                "Select Option",
                "SaaS",
                "Fintech",
                "HealthTech",
                "Marketplace",
                "HRTech",
                "Other",
              ].map((opt) => ({
                value: opt,
                label: opt,
              }))}
              placeholder="Enter your industry"
              value={formData.industry}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  industry: e.target.value as
                    | "SaaS"
                    | "Fintech"
                    | "HealthTech"
                    | "Marketplace"
                    | "HRTech"
                    | "Other",
                })
              }
              errorMsg={errors.industry}
            />
            <InputEle
              label="What stage are you currently at?"
              type="select"
              id="stage"
              required
              addStyle="flex-1"
              options={[
                "Select Option",
                "Idea only",
                "Wireframes",
                "Prototypes",
                "MVP",
                "Post-MVP",
              ].map((opt) => ({
                value: opt,
                label: opt,
              }))}
              placeholder="Select Option"
              value={formData.stage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  stage: e.target.value as
                    | "Idea only"
                    | "Wireframes"
                    | "Prototypes"
                    | "MVP"
                    | "Post-MVP",
                })
              }
              errorMsg={errors.stage}
            />
          </div>
          <InputEle
            label="Funding Plan for MVP"
            type="select"
            id="funding"
            required
            addStyle="w-full"
            options={[
              "Select Option",
              "Bootstrapped",
              "Grant",
              "Friends & Family",
              "Angel Investor",
              "Don't know yet",
              "Other",
            ].map((opt) => ({
              value: opt,
              label: opt,
            }))}
            placeholder="Enter your funding"
            value={formData.funding}
            onChange={(e) =>
              setFormData({
                ...formData,
                funding: e.target.value as
                  | "Bootstrapped"
                  | "Grant"
                  | "Friends & Family"
                  | "Angel Investor"
                  | "Don't know yet"
                  | "Other",
              })
            }
            errorMsg={errors.funding}
          />
          <InputEle
            label="Biggest Challenge Right Now"
            type="text"
            id="challenges"
            required={false}
            addStyle="w-full"
            placeholder="e.g., I don't have a tech team, Unsure how to validate, Lack of funding, etc"
            value={formData.challenges}
            onChange={(e) =>
              setFormData({ ...formData, challenges: e.target.value })
            }
            errorMsg={errors.challenges}
          />
          <InputEle
            label="Brief Description of Your Idea"
            type="textarea"
            id="idea"
            required
            addStyle="w-full"
            placeholder=" e.g., A mobile app that helps remote teams manage mental wellness check-ins weekly."
            value={formData.idea}
            onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
            errorMsg={errors.idea}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className={`font-plus-jakarta-sans text-center items-center justify-center font-semibold text-sm sm:text-base flex gap-2 p-3 sm:p-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full ${
              isFormValid
                ? "bg-[#12233d] hover:bg-[#38547b] text-white shadow-lg hover:shadow-xl"
                : "bg-gray-500/40 text-white cursor-not-allowed"
            }`}
          >
            Submit Request
            <HiArrowRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-white fill-white" />
          </button>
        </form>
      </div>
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 md:p-12 shadow-2xl transform transition-all animate-scaleIn">
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mb-4 animate-checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-5xl text-center font-tomato text-[#12233d] font-bold leading-[140%]">
                  You&apos;re In! 🎉
                </h2>
                <p className="text-lg sm:text-xl md:text-3xl text-center font-plus-jakarta-sans text-[#12233d] font-semibold leading-tight mt-2">
                  Thanks for joining the ReCreaX Accelerator waitlist.
                  We&apos;ll reach out soon with next steps. <br /> In the
                  meantime, check your inbox for a welcome message.
                </p>
              </div>
              <button
                onClick={() => router.push("/")}
                className="bg-[#12233d] w-full rounded-2xl text-sm sm:text-base font-semibold leading-[148%] font-plus-jakarta-sans text-white px-4 p-3 sm:p-4 text-center hover:bg-[#38547b] transition-colors duration-300"
              >
                Home Page
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Waitlist;
