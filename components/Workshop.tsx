import React from "react";
import Image from "next/image";
import { buttonVariants } from "./Button";
import { cn } from "@/lib/utils";
import { WorkShopData } from "@/types";

interface WorkshopProps {
  workshopData: WorkShopData;
  className?: string;
}

const Workshop = ({ workshopData, className }: WorkshopProps) => {
  const {
    speakerImageSrc,
    speakerName,
    speakerRole,
    workshopTitle,
    workshopDescription,
    workshopDate,
  } = workshopData;

  return (
    <div className={cn(className)}>
      <div className="flex justify-center lg:justify-start items-center group flex-wrap">
        <div className="lg:w-[149px] lg:h-[149px]">
          <Image src={speakerImageSrc} alt="hero_image" />
        </div>

        <div className="lg:ml-5 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-medium text-text-sub-heading-2 mb-2">
            Upcoming Workshop by
          </h2>
          <p className="text-xl font-semibold">{speakerName}</p>
          <p className="text-base font-semibold text-text-muted">
            {speakerRole}
          </p>
        </div>
      </div>
      <h1 className="mt-2 text-center lg:text-left text-[40px] font-semibold leading-tight">
        {workshopTitle}
      </h1>
      <p className="relative mt-2 text-center lg:text-left text-lg text-text-paragraph sm:max-w-md lg:max-w-none">
        {workshopDescription}
      </p>
      <p className="mt-3 font-semibold text-text-accent text-center lg:text-left">
        {workshopDate}
      </p>

      {/* todo:mobile view  */}

      <form className="mt-6 flex items-center">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <div className="relative flex flex-grow items-stretch">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            className="flex-auto w-full rounded-lg border-0  sm:text-sm sm:leading-6 ring-2 ring-inset ring-border-input  h-16 pl-6 placeholder:text-lg placeholder:text-"
          />
          <button
            type="submit"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "absolute inset-y-0 right-0 border-solid border-2 border-border text-lg "
            )}
          >
            Register for free &rarr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Workshop;
