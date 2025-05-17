import React from "react";

// import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col gap-16 sm:gap-[120px] items-center justify-between h-screen overflow-hidden">
      {/* Hero content section */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16">
        <h1 className="text-center text-4xl font-bold">
          Welcome to our website
        </h1>
      </div>
    </div>
  );
}

export default Hero;
