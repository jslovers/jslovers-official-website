import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { MeetupSection } from "@/components/MeetupSection";

export default async function page() {
  return (
    <>
      <section className="container flex flex-col gap-9 items-center lg:flex-row-reverse lg:justify-around lg:gap-4">
        <Image
          src="/assets/meetups_hero.svg"
          width={600}
          height={432}
          alt=""
          priority
          className="w-[312px] h-[224px] lg:w-[600px] lg:h-[432px]"
        />

        <div className="flex flex-col items-center gap-5 text-center max-w-[415px] lg:text-start lg:items-start">
          <h1 className="page-heading text-5xl lg:text-7xl">Meetups</h1>

          <p className="max-w-xl text-base font-medium lg:text-lg text-text-paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "border-2 border-border justify-between text-base font-medium h-[50px] lg:border-4 lg:text-xl lg:py-8 lg:rounded-[10px]"
            )}
          >
            <span>See more</span>
            <Image
              src="/assets/icons/right_arrow.svg"
              width={17}
              height={17}
              alt=""
              className="ml-2 w-[14px] h-[14px] lg:ml-3 lg:w-[17px] lg:h-[17px]"
              loading="lazy"
            />
          </button>
        </div>
      </section>

      <MeetupSection />
      
      <section className="bg-[#F3F6E6] flex flex-col justify-center items-center px-6 lg:px-0 mb-8 mt-16 lg:mt-0">
        <p className="text-2xl lg:text-4xl font-semibold text-center mt-10 max-w-xs lg:max-w-3xl mb-5">
          Looking for a job ?
        </p>
        <p className="lg:text-xl max-w-xs lg:max-w-2xl text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="grid grid-cols-2 w-full gap-3 justify-items-center md:grid-cols-3 lg:flex lg:items-center lg:justify-center lg:gap-x-12 mt-10">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Icons.amazon key={i} />
          ))}
        </div>
        <button
          className={cn(
            buttonVariants(),
            "border-solid border-2 border-border mt-9 mb-10"
          )}
        >
          Get Started
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
    </>
  );
}
