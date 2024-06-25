import { Feature } from "@/types";
import Image from "next/image";

export const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex min-w-64 max-w-64 flex-col">
      <dt className="text-center text-xl font-semibold xl:text-2xl">
        {feature.title}
      </dt>
      <dd className="flex flex-col items-center">
        <div className="flex h-40 items-center">
          <Image
            src={feature.imgSrc}
            alt={feature.title}
            width={115}
            height={115}
            className="w-[115px] h-[115px]"
          />
        </div>
        <p className="text-text-paragraph text-center text-sm lg:text-base lg:font-medium">
          {feature.description}
        </p>
      </dd>
    </div>
  );
};
