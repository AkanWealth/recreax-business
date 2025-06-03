import React from "react";
import { CaseStudy } from "@/types/general";
import { LuTableOfContents } from "react-icons/lu";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function CaseDetsBody({ caseBodyData }: { caseBodyData: CaseStudy }) {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-start lg:py-20 lg:px-[120px] lg:gap-20 px-4 py-8 sm:px-6 md:px-8">
      <aside className="flex flex-col items-start justify-between gap-4 w-full sm:w-auto relative top-0">
        <div className="flex flex-col rounded-lg p-4 items-center justify-center gap-4 bg-[#f1fafc] w-full sm:w-auto transition-all duration-300 hover:shadow-lg">
          <p className="text-lg font-semibold flex items-center gap-2 leading-[155%] font-plus-jakarta-sans">
            <LuTableOfContents className="animate-pulse" />
            Table of Contents
          </p>
          <ul className="flex flex-col gap-3 w-full">
            {caseBodyData.tableOfContents.map((content) => (
              <li
                key={content}
                className="flex items-center gap-2 text-sm sm:text-base font-normal leading-[155%] font-plus-jakarta-sans group hover:text-[#bce8ef] transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[#2a2829] group-hover:text-[#bce8ef] transition-colors">•</span>
                {content}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-lg p-4 items-start justify-center gap-4 w-full sm:w-auto transition-all duration-300 hover:shadow-lg">
          <h2 className="text-lg font-semibold flex items-center gap-2 leading-[155%] font-plus-jakarta-sans">
            Share case studies
          </h2>
          <div className="flex flex-row text-[#2a2829] text-sm sm:text-base font-plus-jakarta-sans gap-6 sm:gap-10">
            <a
              href="https://www.facebook.com/company/recreax"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
            <a
              href="https://www.x.com/recreax"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/recreax"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Share on Instagram"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 hover:fill-[#bce8ef] transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/recreax"
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
      <section className="flex flex-col items-center justify-center max-w-[1440px] w-full lg:px-20 lg:gap-12 mt-8 sm:mt-0">
        <div
          className="w-full prose prose-headings:mt-8 prose-headings:mb-4 prose-p:mb-6 prose-headings:font-tomato prose-p:font-plus-jakarta-sans max-w-4xl px-4 mx-auto animate-fadeIn"
          dangerouslySetInnerHTML={{ __html: caseBodyData.content }}
        />
      </section>
    </div>
  );
}

export default CaseDetsBody;
