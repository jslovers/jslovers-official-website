import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { SPEAKERS } from "@/config/speakers";
import SpeakerCard from "@/components/Cards/SpeakerCard";

export default async function page() {
  return (
    <>
      <section className="container flex flex-col gap-9 items-center lg:flex-row-reverse lg:justify-around lg:gap-4">
        <Image
          src="/assets/speakers_hero_img.png"
          width={600}
          height={432}
          alt=""
          priority
          className="w-[312px] h-[224px] lg:w-[600px] lg:h-[432px]"
        />

        <div className="flex flex-col items-center gap-5 text-center max-w-[415px] lg:text-start lg:items-start">
          <h1 className="page-heading text-5xl lg:text-7xl">Speakers</h1>

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
            <span>Become a speaker</span>
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

      <section className="container py-16 text-center md:text-left">
        <div className="overflow-x-auto snap-x max-w-full flex gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {SPEAKERS.Speakers.map((speakerProps) => (
            <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
          ))}
        </div>
      </section>
          
      {/* <section className="bg-background-yellow-light flex flex-col justify-center items-center py-11">
        <div className="px-6 max-w-[774px] flex flex-col justify-center items-center lg:px-0">
          <p className="text-2xl font-semibold text-center lg:text-4xl">
            Want to brushUp your learning and get ready for interviews?
          </p>
          <p className="text-text-paragraph text-center mt-3 lg:mt-5 lg:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "border-2 border-border justify-between text-base font-medium h-[50px] mt-6 lg:mt-9 lg:border-4 lg:text-xl lg:py-8 lg:rounded-[10px]"
            )}
          >
            <span>Start Learning</span>
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
      </section> */}
    </>
  );
}
