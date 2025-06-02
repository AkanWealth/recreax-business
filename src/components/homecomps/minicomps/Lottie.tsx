"use client";

import { useLottie } from "lottie-react";
import { LottieComponentProps } from "lottie-react";

const Lottie = ({
  data,
  loop = true,
}: {
  data: LottieComponentProps["animationData"];
  loop?: boolean;
}) => {
  const defaultOptions = {
    animationData: data,
    loop,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-full">{View}</div>;
};

export default Lottie;
