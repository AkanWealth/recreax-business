import React from "react";
import { CaseStudy } from "@/types/general";
import { LuTableOfContents } from "react-icons/lu";

import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function CaseDetsBody({ caseBodyData }: { caseBodyData: CaseStudy }) {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-start lg:py-20 lg:px-[120px] lg:gap-20 px-4 py-8 sm:px-6 md:px-8">
      <aside
        className="flex flex-col items-start justify-between gap-4 w-full sm:w-72 relative top-0
          sm:sticky sm:top-8 h-fit"
        // Sticky on sm+ screens, scrolls with content on mobile
      >
        <div className="flex flex-col rounded-lg p-4 items-center justify-center gap-4 bg-[#f1fafc] w-full sm:w-auto transition-all duration-300 hover:shadow-lg">
          <p className="text-lg font-semibold flex items-center gap-2 leading-[155%] font-plus-jakarta-sans">
            <LuTableOfContents className="animate-pulse" />
            Table of Contents
          </p>
          <ul className="flex flex-col gap-3 w-full">
            <li>
              <a
                href="#problem"
                className="flex items-center gap-2 text-sm sm:text-base font-normal leading-[155%] font-plus-jakarta-sans group hover:text-[#bce8ef] transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[#2a2829] group-hover:text-[#bce8ef] transition-colors">
                  •
                </span>
                Problem
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="flex items-center gap-2 text-sm sm:text-base font-normal leading-[155%] font-plus-jakarta-sans group hover:text-[#bce8ef] transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[#2a2829] group-hover:text-[#bce8ef] transition-colors">
                  •
                </span>
                Solution
              </a>
            </li>
            <li>
              <a
                href="#outcome"
                className="flex items-center gap-2 text-sm sm:text-base font-normal leading-[155%] font-plus-jakarta-sans group hover:text-[#bce8ef] transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[#2a2829] group-hover:text-[#bce8ef] transition-colors">
                  •
                </span>
                Outcome
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col rounded-lg p-4 items-start justify-center gap-4 w-full sm:w-auto transition-all duration-300 hover:shadow-lg">
          <h2 className="text-lg font-semibold flex items-center gap-2 leading-[155%] font-plus-jakarta-sans">
            Share case studies
          </h2>
          <div className="flex flex-row text-[#2a2829] text-sm sm:text-base font-plus-jakarta-sans gap-6 sm:gap-10">
            <a
              href="https://www.facebook.com/share/1LWZBE8jrV/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/recreaxbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/recreaxbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on Instagram"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/showcase/recreax-for-business/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </aside>
      <section className="flex flex-col items-center justify-center max-w-[1440px] w-full lg:px-20 lg:gap-12 ">
        {/* Problem Section */}
        <div
          id="problem"
          className="flex flex-col gap-4 w-full mb-12 scroll-mt-24"
        >
          <h2 className="text-2xl leading-[155%] font-tomato text-[#003267] font-bold">
            Problem
          </h2>
          <p className="text-lg leading-[155%] font-plus-jakarta-sans text-[#2a2829]">
            {caseBodyData.problem}
          </p>
        </div>
        <hr className="w-full border-[#003267]" />
        {/* Solution Section */}
        <div
          id="solution"
          className="flex flex-col gap-4 w-full mb-12 scroll-mt-24"
        >
          <h2 className="text-2xl leading-[155%] font-tomato text-[#003267] font-bold">
            How ReCreax solved it
          </h2>
          <p className="text-lg leading-[155%] font-plus-jakarta-sans text-[#2a2829]">
            {caseBodyData.solution}
          </p>
          <div className="flex flex-wrap gap-4">
            {/* 
              Display solution images:
              - If only one image, make it full width.
              - If multiple, use a responsive grid with a 1rem gap.
            */}
            {caseBodyData.solutionImg.length === 1 ? (
              <Image
                key={0}
                src={caseBodyData.solutionImg[0]}
                width={800}
                height={400}
                unoptimized={true}
                alt="Solution visual 1"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {caseBodyData.solutionImg.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    width={400}
                    height={300}
                    unoptimized={true}
                    alt={`Solution visual ${idx + 1}`}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <hr className="w-full border-[#003267]" />
        {/* Outcome Section */}
        <div
          id="outcome"
          className="flex flex-col gap-4 w-full mb-12 scroll-mt-24"
        >
          <h2 className="text-2xl leading-[155%] font-tomato text-[#003267] font-bold">
            Outcome
          </h2>
          <p className="text-lg leading-[155%] font-plus-jakarta-sans text-[#2a2829]">
            {caseBodyData.outcome}
          </p>
          {/* Masonry/Bento Grid using CSS columns */}

          {caseBodyData.outcomeImg.length === 1 ? (
            <div className=" w-full h-auto">
            <Image
              src={caseBodyData.outcomeImg[0]}
              width={907}
              height={1038}

              unoptimized={true}
              quality={100}
              alt="Outcome visual 1"
              className="mb-6 h-auto w-full rounded  "
            />
            </div>
          ) : (
            <div className=" columns-1 gap-4 sm:columns-2">
              {caseBodyData.outcomeImg.map((img, idx) => (
                <div key={idx} className="mb-4 break-inside-avoid">
                  <Image
                    src={img}
                    alt={`Outcome visual ${idx + 1}`}
                    width={600}
                    height={400}
                    unoptimized
                    className="h-auto w-full rounded-xl object-cover shadow-md"
                  />
                </div>
              ))}
            </div>
          )}
          {/* Quote Block */}
          <blockquote className="bg-[#12233d] text-white p-12 gap-6 flex flex-col rounded-2xl ">
            <p className="italic text-lg mb-2">
              &quot;{caseBodyData.quote.message}&quot;
            </p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="font-semibold">
                  {caseBodyData.quote.author}
                </span>
                <span className="block text-sm text-gray-500">
                  {caseBodyData.quote.role}
                </span>
              </div>
              <Link
                href={caseBodyData.quote.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00ffff] text-[#12233d] p-4 flex items-center gap-2 rounded-lg text-base font-semibold transition-colors duration-300 hover:bg-[#bce8ef] hover:text-[#12233d]"
              >
                View Project <FaArrowRight />
              </Link>
            </div>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default CaseDetsBody;
