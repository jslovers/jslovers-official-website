import Accordion from "@/components/Accordion";
import { buttonVariants } from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SpeakerCard from "@/components/SpeakerCard";
import { ABOUT } from "@/config/about";
import { MARKETING } from "@/config/marketing";
import { SPEAKERS } from "@/config/speakers";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section className="isolate">
        <div className="container w-fit py-16 flex flex-col gap-6 items-center justify-center lg:gap-9">
          <SectionHeader header="Who are we ?" className="w-min mx-auto" />
          <p className="max-w-[871px] mx-auto font-normal text-base text-center text-text-sub-heading lg:font-medium lg:text-2xl">
            He Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>

          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "border-2 border-border justify-between text-base font-medium h-[50px] lg:border-4 lg:text-xl lg:py-8 lg:rounded-[10px]"
            )}
          >
            <span>Learn more </span>
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

      <section className="isolate">
        <div className="container py-8 flex flex-col gap-6 items-center justify-center lg:gap-9">
          <SectionHeader
            header={`${ABOUT.About.team.title}`}
            className="w-min mx-auto"
          />
          <p className="max-w-[871px] mx-auto font-normal text-base text-center text-text-sub-heading lg:font-medium lg:text-2xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <div className="overflow-x-auto snap-x max-w-full flex gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {ABOUT.About.team.members.map((speakerProps) => (
              <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
            ))}
          </div>
        </div>
      </section>

      <section className="isolate">
        <div className="container py-8">
          <SectionHeader
            header={`${ABOUT.About.purpose.title}`}
            className="w-min mx-auto"
          />
          <div className="overflow-x-auto snap-x max-w-full flex gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {MARKETING.Achievements.map((achievement) => {
              return (
                <div
                  key={achievement.title}
                  className="min-w-[256px] flex flex-col"
                >
                  <dt className="text-xl xl:text-2xl text-center font-semibold">
                    {achievement.title}
                  </dt>
                  <dd className="flex flex-col items-center">
                    <div className="h-40 flex items-center">
                      <Image
                        src={achievement.image.src}
                        alt={achievement.title}
                        width={achievement.image.width}
                        height={achievement.image.height}
                      />
                    </div>
                    <p className="text-sm lg:text-base text-center text-text-paragraph">
                      {achievement.description}
                    </p>
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-8 flex flex-col gap-6 items-center justify-center lg:gap-9">
        <SectionHeader
          header={`${ABOUT.About.story.title}`}
          className="w-min mx-auto"
        />

        <div className="overflow-x-auto snap-x max-w-full flex gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {ABOUT.About.story.images.map((image, index) => {
            return (
              <div
                key={index}
                className="scroll-ml-6 snap-center inline-flex flex-col items-center gap-2 lg:items-start lg:mx-auto"
              >
                <div className="w-[251px] relative mb-3 mr-3 p-8 border-[5px] border-solid border-black rounded-[10px] flex flex-col items-center justify-center">
                  <Image
                    src={image}
                    width={204}
                    height={204}
                    alt="Speaker Image"
                    className="object-cover w-[174px] h-[174px] lg:w-[204px] lg:h-[204px] rounded-[10px]"
                    loading="lazy"
                  />

                  <div className="-z-[1] absolute top-[12px] left-[12px] p-8 rounded-[10px] border-[5px] rounded-tr-none rounded-bl-none border-l-0 border-t-0 border-solid border-black">
                    <div className="w-[174px] h-[174px] lg:w-[204px] lg:h-[204px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-1 lg:gap-3">
          {ABOUT.About.story.faqs.map((faq, i) => (
            <Accordion
              key={faq.ques}
              summaryBgColor={faq.summaryBgColor}
              title={faq.ques}
              content={faq.ans}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
