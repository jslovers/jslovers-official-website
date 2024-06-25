import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./Button";
import { cn } from "@/lib/utils";
import { Workshop } from "@/types";

type WorkshopProps = {
  workshopData: Workshop;
  className?: string;
};

const WorkshopDetails = ({ workshopData, className }: WorkshopProps) => {
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
      <div className="group flex flex-wrap items-center justify-center lg:justify-start">
        <Image src={speakerImageSrc} alt="" className="mb-4 lg:mb-0" />
        <div className="space-y-1.5 text-center sm:ml-5 sm:text-left">
          <h2 className="text-text-sub-heading-2  text-xl font-medium lg:text-2xl xl:text-3xl">
            Upcoming Workshop by
          </h2>
          <Link href="#" className="text-lg font-semibold lg:text-xl">
            {speakerName}
          </Link>
          <p className="text-text-muted text-sm font-semibold lg:text-base">
            {speakerRole}
          </p>
        </div>
      </div>
      <h1 className="mt-2 text-center text-2xl font-semibold leading-tight lg:text-left lg:text-[40px]">
        {workshopTitle}
      </h1>
      <p className="text-text-paragraph relative mt-2 text-center text-base sm:max-w-full lg:max-w-none lg:text-left lg:text-lg">
        {workshopDescription}
      </p>
      <p className="text-text-accent mt-3 text-center text-sm font-semibold text-blue-700 lg:text-left lg:text-xl">
        {workshopDate}
      </p>

      <form className="mt-6 flex items-center">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <div className="relative flex flex-grow flex-col space-y-4 lg:flex-row lg:space-y-0">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            className="ring-border-input h-12 w-full flex-auto  rounded-lg border-0  pl-6 text-sm ring-2 ring-inset placeholder:text-sm lg:h-16 lg:text-lg lg:placeholder:text-lg "
          />
          <button
            type="submit"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "h-12 justify-between border-2 border-solid border-border text-sm lg:absolute lg:inset-y-0 lg:right-0 lg:h-16 lg:text-lg ",
            )}
          >
            <span>Register for free</span>
            <span>&rarr;</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkshopDetails;
