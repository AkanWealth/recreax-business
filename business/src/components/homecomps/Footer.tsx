import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col bg-[#12233d] py-12 sm:py-14 px-6 sm:px-20">
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center h-fit border-b border-[#e7e9ec] pb-10">
        <div className="flex flex-col justify-start max-w-[640px] items-start py-6">
          <p className="text-blue-50 text-lg font-semibold font-plus-jakarta-sans">
            Got a Product Idea?
          </p>
          <p className="text-white  text-3xl sm:text-5xl font-bold font-plus-jakarta-sans">
            Let turn your idea into reality and launch faster
          </p>
        </div>
        <Button className="bg-[#00ffff] group hover:bg-[#aeffff] p-4 rounded-lg flex flex-row gap-1 text-[#12233d] font-semibold font-plus-jakarta-sans text-base ">
          Book a call with Us! <ArrowRight className="w-4 h-4 group-hover:translate-x-1  transition-transform duration-700 ease-in-out" />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:flex sm:flex-row justify-between mt-8">
        <div className="flex flex-col items-start justify-start gap-6 sm:gap-14 col-span-1 sm:col-auto">
          <div className="flex flex-col w-fit gap-2">
            <Image
              src={"/Logo_blackbg.png"}
              height={50}
              width={164}
              alt="Recreax Logo"
            />
            <p className=" whitespace-nowrap font-plus-jakarta-sans text-white text-sm sm:text-base ">
              Copyright © 2025 ReCreaX. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-col w-fit gap-2">
            <div className="flex flex-row gap-8">
              <Link
                href={"/terms-of-service"}
                className="text-white text-sm sm:text-base font-plus-jakarta-sans"
              >
                Terms of service
              </Link>
              <Link
                href={"/privacy-policy"}
                className="text-white text-sm sm:text-base font-plus-jakarta-sans"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-row  text-white text-sm sm:text-base font-plus-jakarta-sans gap-10">
              <a href="https://www.facebook.com/company/recreax">
                <Image
                  src={"/linear/facebook.svg"}
                  height={20}
                  width={20}
                  alt="Facebook"
                  className="fill-white color-white "
                />
              </a>
              <a href="https://www.X.com/recreax">
                <Image src={"/linear/Tw.svg"} height={20} width={20} alt="X" />
              </a>
              <a href="https://www.instagram.com/recreax">
                <Image
                  src={"/linear/instagram.svg"}
                  height={20}
                  width={20}
                  alt="Instagram"
                />
              </a>
              <a href="https://www.instagram.com/recreax">
                <Image
                  src={"/linear/linkedin.svg"}
                  height={20}
                  width={20}
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.instagram.com/recreax">
                <Image
                  src={"/linear/tiktok.svg"}
                  height={20}
                  width={20}
                  alt="TikTok"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}

        <div className="flex flex-row justify-between w-full">
          <div className=" sm:hidden flex border-x-0 sm:border-x-2 whitespace-nowrap sm:border-white flex-col items-start justify-start gap-6 min-w-36 w-full max-w-[462px] px-4 sm:px-28">
            <p className="font-semibold font-plus-jakarta-sans text-white  text-base">
              Page{" "}
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link
                href={"/"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Home
              </Link>
              <Link
                href={"/accelerator"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Accelerator
              </Link>
              <Link
                href={"/contact-us"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Book a Free 1:1
              </Link>
              <Link
                href={"/accelerator"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Accelerator
              </Link>
              <Link
                href={"/about-us"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                About Us
              </Link>
              <Link
                href={"/contact-us"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="sm:hidden flex flex-col items-start justify-start gap-6 min-w-36 w-full px-4 sm:px-10 max-w-[462px]">
            <p className="font-semibold font-plus-jakarta-sans text-white  text-base">
              Resources{" "}
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link
                href={"/case-studies"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Case Studies
              </Link>
              <Link
                href={"/blog"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Blog
              </Link>
              <Link
                href={"/playbook"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Playbook
              </Link>
              <Link
                href={"/newsletter"}
                className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop menu */}

        <div className=" hidden sm:flex border-x-0 sm:border-x-2 whitespace-nowrap sm:border-white flex-col items-start justify-start gap-6 min-w-36 w-full max-w-[462px] px-4 sm:px-28">
          <p className="font-semibold font-plus-jakarta-sans text-white  text-base">
            Page{" "}
          </p>
          <div className="flex flex-col items-start gap-4">
            <Link
              href={"/"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Home
            </Link>
            <Link
              href={"/accelerator"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Accelerator
            </Link>
            <Link
              href={"/contact-us"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Book a Free 1:1
            </Link>
            <Link
              href={"/accelerator"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Accelerator
            </Link>
            <Link
              href={"/about-us"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              About Us
            </Link>
            <Link
              href={"/contact-us"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-start justify-start gap-6 min-w-36 w-full px-4 sm:px-10 max-w-[462px]">
          <p className="font-semibold font-plus-jakarta-sans text-white  text-base">
            Resources{" "}
          </p>
          <div className="flex flex-col items-start gap-4">
            <Link
              href={"/case-studies"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Case Studies
            </Link>
            <Link
              href={"/blog"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Blog
            </Link>
            <Link
              href={"/playbook"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Playbook
            </Link>
            <Link
              href={"/newsletter"}
              className="text-white text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
