"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import NewsModal from "@/components/homecomps/blogpage/NewsModal";
// import { useRouter } from "next/navigation";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const router = useRouter();
  return (
    <footer className="flex flex-col bg-[#12233d] py-12 sm:py-14 px-6 sm:px-20">
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center h-fit border-b border-[#e7e9ec] pb-10">
        <div className="flex flex-col justify-start max-w-[640px] items-start py-6">
          <p className="text-blue-50 text-lg font-semibold font-plus-jakarta-sans">
            Got a Product Idea?
          </p>
          <p className="text-white  text-3xl sm:text-5xl font-bold font-tomato">
            Let turn your idea into reality and launch faster
          </p>
        </div>
        <Button
          onClick={() =>
            window.open(
              "https://calendly.com/rasheed-ogunbakinde-recreax/30min",
              "_blank"
            )
          }
          className="bg-[#00ffff] group hover:bg-[#aeffff] p-4 rounded-lg flex flex-row gap-1 text-[#12233d] font-semibold font-plus-jakarta-sans text-base "
        >
          Book a call with Us!{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1  transition-transform duration-700 ease-in-out" />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:flex sm:flex-row justify-between mt-8">
        <div className="flex flex-col items-start justify-start gap-6 sm:gap-14 col-span-1 sm:col-auto">
          <div className="flex flex-col w-fit gap-2">
            <Image
              src={"/Logo_blackbg.png"}
              height={50}
              width={164}
              unoptimized={true}
              alt="Recreax Logo"
            />
            <p className=" whitespace-nowrap font-plus-jakarta-sans text-white text-sm sm:text-base ">
              Copyright © 2025 ReCreaX. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-col w-fit gap-2">
            <div className="flex flex-row gap-8">
           
              <Link
                href={"/privacy-policy"}
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-plus-jakarta-sans"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-row  text-white text-sm sm:text-base font-plus-jakarta-sans gap-10">
              <a href="https://www.facebook.com/share/1LWZBE8jrV/">
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 stroke-white hover:fill-[#bce8ef] transition-all duration-300" />
              </a>
              <a href="https://x.com/recreaxbusiness">
                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 stroke-white hover:fill-[#bce8ef] transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/recreaxbusiness">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 stroke-white hover:fill-[#bce8ef] transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/showcase/recreax-for-business/">
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 stroke-white hover:fill-[#bce8ef] transition-all duration-300" />
              </a>
              <a href="https://www.tiktok.com/@recreax">
                <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 stroke-white hover:fill-[#bce8ef] transition-all duration-300" />
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
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Home
              </Link>
              <Link
                href={"/studio"}
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Studio
              </Link>
              <Link
                href={"https://calendly.com/rasheed-ogunbakinde-recreax/30min"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Book a Free 1:1
              </Link>
        
              <Link
                href={"/about-us"}
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                About Us
              </Link>
              <Link
                href={"/contact-us"}
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
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
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Case Studies
              </Link>
              <Link
                href={"/blog"}
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Blog
              </Link>
              <Link
                href={"/blog/playbook"}
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
              >
                Playbook
              </Link>
              <p
                className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
                onClick={() => setIsModalOpen(true)}
              >
                Newsletter
              </p>
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
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Home
            </Link>
            <Link
              href={"/studio"}
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Studio
            </Link>
            <Link
              href={"https://calendly.com/rasheed-ogunbakinde-recreax/30min"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Book a Free 1:1
            </Link>
            <Link
              href={"/studio"}
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Studio
            </Link>
            <Link
              href={"/about-us"}
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              About Us
            </Link>
            <Link
              href={"/contact-us"}
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
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
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Case Studies
            </Link>
            <Link
              href={"/blog"}
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Blog
            </Link>
            <Link
              href={"/blog/playbook"}
              className="text-white hover:text-[#bce8ef] transition-colors duration-300 text-sm sm:text-base font-normal font-plus-jakarta-sans"
            >
              Playbook
            </Link>
            <p
              className="text-white hover:text-[#bce8ef] transition-colors duration-300   text-sm sm:text-base font-normal font-plus-jakarta-sans"
              onClick={() => setIsModalOpen(true)}
            >
              Newsletter
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <NewsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      )}
    </footer>
  );
}

export default Footer;
