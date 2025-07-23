// import React from "react";
// import Image from "next/image";
// import { BlogCardProps } from "@/types/general";
// function BlogCard({ image, title, date, readTime, type }: BlogCardProps) {
//   return (
//     <div className="flex flex-col w-fit gap-8 max-w-[370px] h-fitrounded-2xl border-0 ">
//       <Image
//         unoptimized={true}
//         src={image}
//         alt={title}
//         width={370}
//         height={200}
//         className="rounded-2xl"
//       />
//       <div className="flex flex-col items-start justify-start gap-4 ">
//         <p
//           className={`text-sm flex items-center gap-2 ${
//             type === "founder"
//               ? "text-[#0671e0]"
//               : type === "executive"
//               ? "text-[#ff6644]"
//               : "text-gray-500"
//           }`}
//         >
//           {(type === "founder" || type === "executive") && (
//             <span
//               className={`w-2 h-2 rounded-full ${
//                 type === "founder" ? "bg-[#0671e0]" : "bg-[#ff6644]"
//               }`}
//             ></span>
//           )}
//           {type.charAt(0).toUpperCase() + type.slice(1)}
//         </p>
//         <p className="text-sm text-gray-500">{date}</p>
//         <div className="flex flex-col gap-2">
//           <h4 className="font-tomato font-semibold text-lg">{title}</h4>

//           <p className="text-sm text-gray-500">{readTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogCard;



import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogCardProps } from "@/types/general";

// Alternative approach using onClick
function BlogCard({ image, title, date, readTime, type, slug }: BlogCardProps) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col w-fit gap-8 max-w-[370px] h-fit rounded-2xl border-0 cursor-pointer group transition-transform hover:scale-[1.02]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          unoptimized={true}
          src={image}
          alt={title}
          width={370}
          height={200}
          className="rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
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
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
        <p className="text-sm text-gray-500">{date}</p>
        <div className="flex flex-col gap-2">
          <h4 className="font-tomato font-semibold text-lg group-hover:text-[#0671e0] transition-colors">
            {title}
          </h4>
          <p className="text-sm text-gray-500">{readTime}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;