"use client";

import animationData from "./animationData.json";
import { useLottie } from "lottie-react";

const ProductCycleLottie = () => {
  const defaultOptions = {
    animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-full p-4">{View}</div>;
};

export default ProductCycleLottie;
