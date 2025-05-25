import React from "react";
import Image from "next/image";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  type: "founder" | "executive";
};

function BlogCard({ image, title, date, readTime, type }: BlogCardProps) {
  return (
    <div className="flex flex-col w-fit gap-8 max-w-[370px] h-fitrounded-2xl border-0 ">
      <Image
        src={image}
        alt={title}
        width={370}
        height={200}
        className="rounded-2xl"
      />
      <div className="flex flex-col items-start justify-start gap-4 ">
        <p
          className={`text-sm flex items-center gap-2 ${
            type === "founder"
              ? "text-[#0671e0]"
              : type === "executive"
              ? "text-[#ff6644]"
              : "text-gray-500"
          }`}
        >
          {(type === "founder" || type === "executive") && (
            <span
              className={`w-2 h-2 rounded-full ${
                type === "founder" ? "bg-[#0671e0]" : "bg-[#ff6644]"
              }`}
            ></span>
          )}
          {type}
        </p>
        <p className="text-sm text-gray-500">{date}</p>
        <div className="flex flex-col gap-2">
          <h4 className="font-tomato font-semibold text-lg">{title}</h4>

          <p className="text-sm text-gray-500">{readTime}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
