"use client";

import React, { useState, useEffect } from "react";
import { PhoneInput } from "@/components/genui/PhoneInput";
import InputEle from "@/components/genui/InputEle";

import { HiArrowRight } from "react-icons/hi2";
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
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(
      /^\+?[0-9\s-]*$/,
      "Phone number can only contain digits, spaces, and hyphens"
    ),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  request: z.string().min(1, "Please select a request type"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

// Define the form data type from the schema
type FormData = z.infer<typeof formSchema>;

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    request: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isFormValid, setIsFormValid] = useState(true);
  // Add submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Check form validity only when all fields are filled
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
    <div className="flex bg-white flex-col items-center justify-start py-8 sm:py-20 px-5 sm:px-36 gap-6 sm:gap-12 animate-fadeIn">
      <div className="flex flex-col items-center justify-start gap-2 animate-slideDown">
        <h2 className="text-2xl sm:text-5xl font-semibold sm:font-bold text-center font-tomato text-[#12233d]">
          Submit a Request
        </h2>
        <p className="text-base font-plus-jakarta-sans font-normal text-[#65605c] text-center max-w-2xl">
          Please enter the details of your request. We&apos;ll reach out as soon
          as possible.
        </p>
      </div>
      {isSubmitted ? (
        <div className="w-full max-w-3xl rounded-2xl p-6 sm:p-24 border border-gray-200 animate-fadeIn">
          <p className="text-lg sm:text-2xl text-center font-plus-jakarta-sans text-[#12233d]">
            Thank you for your submission! We&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-12 w-full max-w-3xl animate-slideUp">
          <InputEle
            type="text"
            id="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="Enter your first and last name"
            errorMsg={errors.fullName}
            addStyle="col-span-4 transition-all duration-300 hover:scale-[1.01]"
          />
          <div className="w-full h-fit flex flex-col gap-3 col-span-4 md:col-span-2 transition-all duration-300 hover:scale-[1.01]">
            <label className="text-lg font-plus-jakarta-sans font-semibold">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <PhoneInput
              defaultCountry="GB"
              international
              className="bg-white  *:bg-white *:border-gray-400  focus:border-blue-500 transition-all duration-300"
              value={formData.phone}
              placeholder="Mobile Number"
              onChange={(value) => setFormData({ ...formData, phone: value })}
            />
            <p className="text-red-500 text-sm font-medium">{errors.phone}</p>
          </div>
          <InputEle
            type="email"
            id="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            errorMsg={errors.email}
            addStyle="col-span-4 md:col-span-2 transition-all duration-300 hover:scale-[1.01]"
          />
          <InputEle
            type="text"
            id="company"
            label="Company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            errorMsg={errors.company}
            addStyle="col-span-4 transition-all duration-300 hover:scale-[1.01]"
          />
          <InputEle
            type="select"
            id="request"
            label="Request Type"
            placeholder="Select your request type"
            value={formData.request}
            onChange={(e) =>
              setFormData({ ...formData, request: e.target.value })
            }
            options={[
              { value: "", label: "Select Request Type" },
              { value: "Partnership", label: "Partnership" },
              {
                value: "Project Collaboration",
                label: "Project Collaboration",
              },
              { value: "General Question", label: "General Question" },
            ]}
            errorMsg={errors.request}
            addStyle="col-span-4 font-plus-jakarta-sans transition-all duration-300 hover:scale-[1.01]"
          />
          <InputEle
            type="textarea"
            id="message"
            label="Message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            errorMsg={errors.message}
            addStyle="col-span-4 transition-all duration-300 hover:scale-[1.01]"
          />
          <div className="col-span-4 flex justify-start">
            <button
              type="submit"
              onClick={handleSubmit}
              className={`font-plus-jakarta-sans font-semibold text-base flex items-center gap-2 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                isFormValid
                  ? "bg-[#12233d] hover:bg-[#38547b] text-white shadow-lg hover:shadow-xl cursor-pointer"
                  : "bg-gray-500/40 text-white cursor-not-allowed"
              }`}
            >
              Submit Request
              <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-white" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
