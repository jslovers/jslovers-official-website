import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import { Job } from "@/types";

interface JobCardProps {
  className?: string;
  job: Job
}
const JobCard = ({
  className,
  job
}: JobCardProps) => {
  return (
    <div
      className={cn(
        "border-solid border-border-card border-[3px] rounded-[10px] py-6 px-3",
        className
      )}
    >
      <Image
        src={job.company_logo}
        width="205"
        height="52"
        alt={job.company_name}
        loading="lazy"
      />
      <div className="my-3 border-2 border-border-heading" />
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">{job.company_name}</p>
          {job.is_remote && (
            <p className="font-medium text-sm py-2 px-3 bg-[#D9D9D9] rounded">
              Remote
            </p>
          )}
        </div>
        <p className="font-semibold text-2xl">{job.role}</p>
        <div className="flex gap-x-2 items-center">
          <p className="text-base font-medium text-[#676769]">Location</p>
          <p>
            <span className="text-base font-medium">{job.location?.city}</span>,{" "}
            <span className="font-normal text-sm">{job.location?.country}</span>
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="text-base font-medium text-[#676769]">Experience</p>
          <p className="text-base font-medium">{job.experience}</p>
        </div>
      </div>
      <button
        className={cn(
          buttonVariants(),
          "border-solid border-2 border-border mt-2.5"
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
