import { Icons } from "@/components/Icons";
import SignupForMeetupCard from "@/components/Cards/SignupForMeetupCard";
import { JobSection } from "@/components/JobSection";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import Image from "next/image";
export default async function page() {

  return (
    <div>
      <section className="flex items-center justify-center flex-col mt-20">
        <h1 className="page-heading text-5xl lg:text-7xl">Jobs</h1>
        <p className="max-w-xl text-center mt-8 text-xl mx-6 lg:mx-0">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="grid grid-cols-2 w-full gap-3 justify-items-center lg:flex lg:items-center lg:justify-center lg:gap-x-12 mt-10 mb-9 lg:mb-28">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Icons.amazon key={i} />
          ))}
        </div>
      </section>
      <JobSection/>
      {/* <SignupForMeetupCard /> */}
      <section className="bg-[#F3F6E6] flex flex-col justify-center items-center px-6 lg:px-0 mb-8 mt-16 lg:mt-0">
        <p className="text-2xl lg:text-4xl font-semibold text-center mt-10 max-w-xs lg:max-w-3xl mb-5">
          Want to brushUp your learning and get ready for interviews ?
        </p>
        <p className="lg:text-xl max-w-xs lg:max-w-2xl text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={cn(
            buttonVariants(),
            "border-solid border-2 border-border mt-9 mb-10"
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
      </section>
    </div>
  );
}
