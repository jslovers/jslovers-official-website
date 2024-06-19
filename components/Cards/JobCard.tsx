import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import { JobData } from "@/types";

interface JobCardProps extends JobData {
  className?: string;
}
const JobCard = ({
  company_name,
  location,
  is_remote,
  experience,
  role,
  company_logo,
  className,
}: JobCardProps) => {
  return (
    <div
      className={cn(
        "border-solid border-border-card border-[3px] rounded-[10px] py-6 px-3",
        className
      )}
    >
      <Image
        src={company_logo}
        width="205"
        height="52"
        alt={company_name}
        loading="lazy"
      />
      <div className="my-3 border-[1.5px] border-border-heading" />
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <p className="font-medium">{company_name}</p>
          {is_remote && (
            <p className="font-medium text-sm py-2 px-3 bg-background-gray rounded">
              Remote
            </p>
          )}
        </div>
        <p className="font-semibold text-2xl">{role}</p>
        <div className="flex gap-x-2 items-center">
          <p className="text-text-label-2 font-medium">Location</p>
          <p>
            <span className="text-text-sub-heading">{location?.city}</span>,{" "}
            {location?.country}
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="text-text-label-2 font-medium">Experience</p>
          <p className="text-text-sub-heading">{experience}</p>
        </div>
      </div>
      <button
        className={cn(
          buttonVariants(),
          "border-solid border-2 border-border mt-[10px]"
        )}
      >
        View Details
        <Image
          src="/assets/icons/right_arrow.svg"
          width="11"
          height="11"
          alt=""
          className="ml-1"
          loading="lazy"
        />
      </button>
    </div>
  );
};

export default JobCard;
