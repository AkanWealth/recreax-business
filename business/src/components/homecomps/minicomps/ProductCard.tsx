import React from "react";
import Image from "next/image";


interface ProductCardProps {
  image: string;
  title: string;
  ownerName: string;
  ownerRole: string;
  companyLogo: string;
  review: string;
  link: string;
}

function ProductCard({
  image,
  title,
  ownerName,
  ownerRole,
  companyLogo,
  review,
  link,
}: ProductCardProps) {
  return (
    <div className="max-w-[550px] h-fit flex flex-col items-start justify-start gap-8">
      <Image
        className="rounded-lg"
        src={image}
        alt={title}
        width={550}
        height={550}
      />
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-bold font-plus-jakarta-sans">{title} </h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={companyLogo} alt={title} width={50} height={50} />
          </a>
        </div>

        <p className="text-lg font-plus-jakarta-sans text-[#65605c]">
          {review}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
