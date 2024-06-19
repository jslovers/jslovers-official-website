import React from "react";
import Link from "next/link";
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
        <Image
          src={speakerImageSrc}
          alt=""
          className="mb-4 lg:mb-0"
        />
        <div className="sm:ml-5 text-center sm:text-left space-y-1.5">
          <h2 className="text-xl  lg:text-2xl xl:text-3xl font-medium text-text-sub-heading-2">
            Upcoming Workshop by
          </h2>
          <Link href="#" className="text-lg lg:text-xl font-semibold">{speakerName}</Link>
          <p className="text-sm lg:text-base font-semibold text-text-muted">
            {speakerRole}
          </p>
        </div>
      </div>
      <h1 className="mt-2 text-center lg:text-left text-2xl lg:text-[40px] font-semibold leading-tight">
        {workshopTitle}
      </h1>
      <p className="relative mt-2 text-center lg:text-left text-base lg:text-lg text-text-paragraph sm:max-w-full lg:max-w-none">
        {workshopDescription}
      </p>
      <p className="mt-3 font-semibold text-text-accent text-center lg:text-left text-sm lg:text-xl text-blue-700">
        {workshopDate}
      </p>

      <form className="mt-6 flex items-center">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <div className="relative flex flex-col lg:flex-row flex-grow space-y-4 lg:space-y-0">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            className="flex-auto w-full rounded-lg border-0  text-sm lg:text-lg  ring-2 ring-inset ring-border-input h-12 lg:h-16 pl-6 placeholder:text-sm lg:placeholder:text-lg "
          />
          <button
            type="submit"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "lg:absolute lg:inset-y-0 lg:right-0 border-solid border-2 border-border text-sm lg:text-lg h-12 lg:h-16 justify-between "
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

export default Workshop;
