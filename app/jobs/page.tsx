import { buttonVariants } from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import { Icons } from "@/components/Icons";
import JobCard from "@/components/Cards/JobCard";
import {
  comapnyFilterOptions,
  experienceFilterOptions,
  jobsList,
  locationFilterOptions,
  roleFilterOptions,
} from "@/lib/mock_data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SignupForMeetupCard from "@/components/Cards/SignupForMeetupCard";

export default async function page() {
  return (
    <div>
      <section className="flex items-center justify-center flex-col mt-20 lg:mt-[10px]">
        <h1 className="page-heading text-5xl lg:text-7xl">Jobs</h1>
        <p className="max-w-xl text-center mt-8 text-[20px] text-text-paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="grid grid-cols-2 w-full gap-3 justify-items-center lg:flex lg:items-center lg:justify-center lg:gap-x-12 mt-10 mb-9 lg:mb-[110px]">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Icons.amazon key={i} />
          ))}
        </div>
      </section>
      <section className="mx-10 lg:mx-32">
        <div className="hidden lg:block">
          <p className="font-medium text-[20px]">
            Filter the job results as per your need
          </p>
          <div className="flex items-center gap-x-8 mt-6">
            <Dropdown
              filter_name="Company"
              filter_options={comapnyFilterOptions}
              filter_background="#e0719e"
            />
            <Dropdown
              filter_name="Role"
              filter_options={roleFilterOptions}
              filter_background="#f6e049"
            />
            <Dropdown
              filter_name="Experience"
              filter_options={experienceFilterOptions}
              filter_background="#7fd6c2"
            />
            <Dropdown
              filter_name="Location"
              filter_options={locationFilterOptions}
              filter_background="#f6a649"
            />
          </div>

          <div className="mt-16 mb-9 border-[1.5px] border-divider" />
        </div>
        <div className="carousel carousel-center max-w-full flex justify-between gap-7 lg:grid lg:grid-cols-4 lg:gap-4">
          {jobsList?.length > 0 &&
            jobsList.map((job, i) => (
              <JobCard
                key={i}
                {...job}
                className="carousel-item min-w-[280px] lg:min-w-min"
              />
            ))}
        </div>
        <p className="text-2xl font-medium mt-9 mb-14 lg:hidden text-center">
          Similar Jobs
        </p>
        <div className="carousel carousel-center max-w-full flex justify-between gap-7 mb-64 lg:hidden">
          {jobsList?.length > 0 &&
            jobsList.map((job, i) => (
              <JobCard
                key={i}
                {...job}
                className="carousel-item min-w-[280px] lg:min-w-min"
              />
            ))}
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <button
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "border-solid border-2 border-border my-16 px-8 py-6 text-xl font-medium"
            )}
          >
            Load more
          </button>
        </div>
      </section>
      <SignupForMeetupCard />
      {/* <section className="bg-background-yellow-light flex flex-col justify-center items-center">
        <p className=" text-2xl lg:text-[40px] font-semibold text-center mt-10 max-w-xs lg:max-w-3xl mb-5">
          Want to brushUp your learning and get ready for interviews ?
        </p>
        <p className=" lg:text-xl text-text-paragraph max-w-xs lg:max-w-2xl text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={cn(
            buttonVariants(),
            "border-solid border-2 border-border mt-9 mb-14"
          )}
        >
          Start Learning
          <Image
            src="/assets/icons/right_arrow.svg"
            width="11"
            height="11"
            alt="right-arrow"
            className="ml-1"
            loading="lazy"
          />
        </button>
      </section> */}
    </div>
  );
}
