import React from "react";
import Image from "next/image";

function BlogHero() {
  return (
    <div className="relative flex flex-col items-center justify-center md:px-20 md:py-12 overflow-hidden w-full">
      {/* Decorative background image */}
      <img
        src="/images/bg/bloghero.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 w-64 md:w-96 opacity-60 z-0"
        // Adjust w-64/md:w-96 as needed for size
      />
      <h1 className="md:text-[64px] font-bold text-center font-tomato max-w-[600px] z-10 relative">
        The ReCreaX Founders Blog
        <Image
          src="/images/BlogHeroshape.svg"
          alt="logo"
          width={70}
          height={70}
          className="ml-2 inline"
        />
      </h1>
    </div>
  );
}

export default BlogHero;
