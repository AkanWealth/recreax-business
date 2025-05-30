import React from "react";
import Image from "next/image";

function Special() {
  return (
    <section className=" flex flex-col lg:flex-row w-full h-full bg-[#12233d]    lg:py-[100px] lg:px-[120px] lg:gap-[120px]">
      <Image
        src="/images/AccelSpecial.svg"
        alt="Special"
        width={446}
        height={482}
        className="w-full h-full"
      />
      <div className=" flex flex-col lg:gap-12  max-w-[650px] w-full">
        <h2 className="text-white text-2xl lg:text-5xl leading-[140%] font-bold font-tomato">
          Specially Designed <br />
          <span className="text-[#00ffff]">For YOU</span>
        </h2>
        <div className="flex w-full flex-col lg:gap-6 ">
          <div className=" w-full rounded-xl bg-[#f1dafc] p-4 ">
            <p className="text-[#2a2829] text-sm lg:text-lg font-plus-jakarta-sans font-semibold leading-[155%]">
              First-time founders with a strong idea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
