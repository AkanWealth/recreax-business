import React from "react";
import Image from "next/image";
function Built() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#12233d] gap-16 py-20 px-32">
      <h2 className="text-white text-center  font-bold text-2xl sm:text-5xl  max-w-[600px] font-plus-jakarta-sans">
        Built to Launch Fast. Designed to Scale
      </h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 flex flex-col items-start bg-white rounded-2xl p-6 gap-6 justify-center">
          <Image
            src="/images/Strategy.png"
            alt="Strategy"
            width={231}
            height={150}
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-4xl font-plus-jakarta-sans font-semibold ">
                <Image
                  src="/images/Strategy-bulb.png"
                  alt="Strategy lightbulb"
                  width={36}
                  height={36}
                />
                Strategy
              </p>
              <p className="text-[#060c15] text-lg font-plus-jakarta-sans font-semibold ">
                Refine your idea. Validate your market
              </p>
            </div>
            <p className="text-[#060c15] text-lg font-montserrat font-normal ">
              We simplify the product development process, guiding you to test
              your idea, refine your strategy, and build a product users love
              without the guesswork.
            </p>
          </div>
        </div>
        <div className="col-span-5 bg-[#f6ffdf] flex flex-col items-start justify-center p-6 gap-6 rounded-2xl">
          <Image src="/images/UX.png" alt="UX" width={231} height={150} />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-4xl font-plus-jakarta-sans font-semibold ">
                <Image
                  src="/images/UX-screen.png"
                  alt="UX screen"
                  width={36}
                  height={36}
                />
                UI/UX
              </p>
              <p className="text-[#060c15] text-lg font-plus-jakarta-sans font-semibold ">
                Design what users actually want
              </p>
            </div>
            <p className="text-[#060c15] text-lg font-montserrat font-normal ">
              Our design sprints turn insights into intuitive experiences. We
              create user flows, wireframes, and prototypes that bring your
              vision to life.
            </p>
          </div>
        </div>
        <div className="col-span-5 bg-[#ffffff] flex flex-col items-start justify-center p-6 gap-6 rounded-2xl">
          <Image src="/images/Build.png" alt="Build" width={290} height={150} />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-4xl font-plus-jakarta-sans font-semibold ">
                <Image
                  src="/images/Build-wall.png"
                  alt="Build wall"
                  width={36}
                  height={36}
                />
                Build
              </p>
              <p className="text-[#060c15] text-lg font-plus-jakarta-sans font-semibold ">
                From idea to a real MVP. Fast.{" "}
              </p>
            </div>
            <p className="text-[#060c15] text-lg font-montserrat font-normal ">
              We build lean, functional MVPs using no-code and low-code tools.
              Your product gets tested early, saving time and budget.
            </p>
          </div>
        </div>
        <div className="col-span-7 flex flex-col items-start bg-[#f4efff] rounded-2xl p-6 gap-6 justify-center">
          <Image
            src="/images/Scale.png"
            alt="Scale Graph"
            width={230}
            height={150}
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-4xl font-plus-jakarta-sans font-semibold ">
                <Image
                  src="/images/Scale-icon.png"
                  alt="Scale icon"
                  width={36}
                  height={36}
                />
                Scale
              </p>
              <p className="text-[#060c15] text-lg font-plus-jakarta-sans font-semibold ">
                Don&apos;t just launch. Grow.
              </p>
            </div>
            <p className="text-[#060c15] text-lg font-montserrat font-normal ">
              Post-launch, we iterate based on real user feedback. From
              performance improvements to feature add-ons, we help you scale
              smarter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Built;
