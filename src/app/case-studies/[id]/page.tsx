import React from "react";
import CaseDetsHero from "@/components/homecomps/casecomps/CaseDetsHero";
import CaseDetsBody from "@/components/homecomps/casecomps/CaseDetsBody";
import { caseData } from "@/mocks/casestudyData";
import Link from "next/link";
import CaseBuild from "@/components/homecomps/casecomps/CaseBuild";
import CaseProds from "@/components/homecomps/casecomps/CaseProds";

export default async function Page({ params }: { params: { id: string } }) {
  // Simulate network delay
  const { id } = await params;

  const caseStudy = caseData.find((cs) => String(cs.id) === id);

  if (!caseStudy) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <svg
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 24 24"
          className="mb-6 text-gray-400"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-7h-2v5h2V10z"
            fill="currentColor"
          />
        </svg>
        <h1 className="text-4xl font-bold mb-2 text-center">
          404 - Case Study Not Found
        </h1>
        <p className="text-lg mb-6 text-center">
          Sorry, the case study you are looking for does not exist or may have
          been moved.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition"
          >
            ← Go Back
          </button>
          <Link
            href="/case-studies"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <CaseDetsHero caseHeroData={caseStudy} />
      <CaseDetsBody caseBodyData={caseStudy} />
      <CaseProds />
      <CaseBuild />
    </div>
  );
}
