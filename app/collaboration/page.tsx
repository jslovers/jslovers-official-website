import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { COLLABRATIONS } from "@/config/collaboration";
import SpeakerCard from "@/components/Cards/SpeakerCard";

export default async function page() {
  return (
    <section className="isolate">
      <section className="container flex flex-col items-center gap-9 lg:flex-row-reverse lg:justify-around lg:gap-4">
        <Image
          src="/assets/speakers_hero_img.png"
          width={600}
          height={432}
          alt=""
          priority
          className="h-[224px] w-[312px] lg:h-[432px] lg:w-[600px]"
        />

        <div className="flex max-w-[415px] flex-col items-center gap-5 text-center lg:items-start lg:text-start">
          <h1 className="page-heading text-5xl lg:text-7xl">Collaboration</h1>

          <p className="text-text-paragraph max-w-xl text-base font-medium lg:text-lg">
            JSLovers is proud community supporter of conferences, hackathons,
            and meetups.We help the conferences, meetups, and hackathons in
            promotion, connecting with more focused audiance.
          </p>

          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "h-[50px] justify-between border-2 border-border text-base font-medium lg:rounded-[10px] lg:border-4 lg:py-8 lg:text-xl",
            )}
          >
            <span>Collabrate</span>
            <Image
              src="/assets/icons/right_arrow.svg"
              width={17}
              height={17}
              alt="right-arrow"
              className="ml-2 h-[14px] w-[14px] lg:ml-3 lg:h-[17px] lg:w-[17px]"
              loading="lazy"
            />
          </button>
        </div>
      </section>

      <section className="container py-16 text-center md:text-left">
        <div className="flex max-w-full snap-x gap-7 overflow-x-auto py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {COLLABRATIONS.Speakers.map((speakerProps) => (
            <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
          ))}
        </div>
      </section>
    </section>
  );
}
