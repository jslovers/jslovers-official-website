"use client";

import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="hidden w-1/2 lg:flex ">
      <div className="flex w-1/2 flex-col justify-center ">
        <Image
          src="/assets/hero_image_1_v1.png"
          width="254"
          height="226"
          alt=""
          className="object-cover "
          loading="lazy"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-center space-y-16">
        <Image
          src="/assets/hero_image_2_v1.png"
          width="147"
          height="179"
          alt=""
          className="ml-auto object-cover"
          loading="lazy"
        />
        <Image
          src="/assets/hero_image_3_v1.png"
          width="260"
          height="274"
          alt=""
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroImages;
