import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { COLLABRATIONS } from "@/config/collaboration";
import SpeakerCard from "@/components/SpeakerCard";

export default async function page() {
  return (
    <>
      <section className="container flex flex-col gap-9 items-center lg:flex-row-reverse lg:justify-around lg:gap-4">
        <Image
          src="/assets/speakers_hero_img.png"
          width={600}
          height={432}
          alt="Speakers"
          priority
          className="w-[312px] h-[224px] lg:w-[600px] lg:h-[432px]"
        />

        <div className="flex flex-col items-center gap-5 text-center max-w-[415px] lg:text-start lg:items-start">
          <h1 className="page-heading text-5xl lg:text-7xl">Collaboration</h1>

          <p className="max-w-xl text-base font-medium lg:text-lg text-text-paragraph">
           JSLovers is proud community supporter of conferences, hackathons, and meetups.We help the 
           conferences, meetups, and hackathons
           in promotion, connecting with more focused audiance.
          </p>

          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "border-2 border-border justify-between text-base font-medium h-[50px] lg:border-4 lg:text-xl lg:py-8 lg:rounded-[10px]"
            )}
          >
            <span>Collabrate</span>
            <Image
              src="/assets/icons/right_arrow.svg"
              width={17}
              height={17}
              alt="right-arrow"
              className="ml-2 w-[14px] h-[14px] lg:ml-3 lg:w-[17px] lg:h-[17px]"
              loading="lazy"
            />
          </button>
        </div>
      </section>

      <section className="container py-16 text-center md:text-left">
        <div className="overflow-x-auto snap-x max-w-full flex gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {COLLABRATIONS.Speakers.map((speakerProps) => (
            <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
          ))}
        </div>
      </section>
          
     
    </>
  );
}
