"use client";

import Accordion from "@/components/Accordion";
import { buttonVariants } from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SpeakerCard from "@/components/SpeakerCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ABOUT } from "@/config/about";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <section className="isolate">
        <div className="container flex w-fit flex-col items-center justify-center gap-6 py-16 lg:gap-9">
          <SectionHeader
            header="Who are we ?"
            className="mx-auto w-min"
            titleClassName="text-center"
          />
          <p className="text-text-sub-heading mx-auto max-w-[871px] text-center text-base font-normal lg:text-2xl lg:font-medium">
            He Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>

          <Button variant="jsl">
            Learn more
            <ArrowRight className="ml-2 h-5 w-5 lg:ml-3 lg:h-6 lg:w-6" />
          </Button>

          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "h-[50px] bg-babyBlueEyes justify-between border-2 border-border text-base font-medium lg:rounded-[10px] lg:border-4 lg:py-7 lg:text-xl",
            )}
          >
            <span>Learn more</span>
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

      <section className="isolate">
        <div className="container flex flex-col items-center justify-center gap-6 py-8 lg:gap-9">
          <SectionHeader
            header={`${ABOUT.About.purpose.title}`}
            className="mx-auto w-min"
            titleClassName="text-center"
          />
          <div className="flex w-full snap-x gap-7 overflow-x-auto py-5 md:gap-x-8 md:gap-y-20 lg:grid lg:grid-cols-3 lg:justify-items-center xl:grid-cols-4">
            {ABOUT.About.purpose.cards.map((purpose) => {
              return (
                <div
                  key={purpose.imgSrc}
                  className="flex min-w-64 max-w-64 flex-col"
                >
                  <dt className="text-center text-xl font-semibold xl:text-2xl">
                    {purpose.title}
                  </dt>
                  <dd className="flex flex-col items-center">
                    <div className="flex h-40 items-center">
                      <Image
                        src={purpose.imgSrc}
                        alt={purpose.title}
                        width={115}
                        height={115}
                      />
                    </div>
                    <p className="text-text-paragraph text-center text-sm lg:text-base lg:font-medium">
                      {purpose.description}
                    </p>
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="isolate">
        <div className="container flex flex-col items-center justify-center gap-6 py-8 lg:gap-9">
          <SectionHeader
            header={`${ABOUT.About.team.title}`}
            className="mx-auto w-min"
            titleClassName="text-center"
          />
          <p className="text-text-sub-heading mx-auto max-w-[871px] text-center text-base font-normal lg:hidden lg:text-2xl lg:font-medium">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <div className="flex w-full snap-x gap-7 overflow-x-auto py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3">
            {ABOUT.About.team.members.map((speakerProps) => (
              <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 py-8 lg:container lg:gap-9">
        <SectionHeader
          header={`${ABOUT.About.story.title}`}
          className="mx-auto w-min"
          titleClassName="text-center"
        />

        <div className="flex w-full flex-col items-center gap-4 lg:flex-row-reverse lg:gap-11">
          <div className="flex max-w-full flex-col items-center px-4 py-5 lg:w-[50%]">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {ABOUT.About.story.images.map((image, i) => (
                  <CarouselItem key={i}>
                    <div className="relative h-auto flex-[0_0_100%]" key={i}>
                      <div
                        key={i}
                        className="flex flex-shrink-0 snap-center scroll-ml-6 flex-col items-center gap-2"
                      >
                        <div className="relative rounded-[10px] rounded-bl-none rounded-tr-none border-[5px] border-l-0 border-t-0 border-solid border-black pb-3 pr-3">
                          <div className="absolute right-0 top-0 h-3 outline outline-[6px] outline-white" />
                          <div className="absolute bottom-0 left-0 w-3 outline outline-[6px] outline-white" />

                          <div className="flex flex-col items-center justify-center rounded-[10px] border-[5px] border-solid border-black p-8">
                            <Image
                              src={image}
                              width={381}
                              height={226}
                              alt="Speaker Image"
                              className="w-[250px] rounded-[10px] lg:w-[381px]"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="w-fit py-2 text-center text-sm text-muted-foreground">
              {current} of {count}
            </div>
          </div>

          <div className="container flex flex-col items-center gap-1 lg:w-[50%] lg:gap-3 lg:px-0">
            {ABOUT.About.story.faqs.map((faq, i) => (
              <Accordion
                key={faq.ques}
                summaryBgColor={faq.summaryBgColor}
                title={faq.ques}
                content={faq.ans}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="isolate mt-5 bg-lavenderRose lg:mt-12">
        <div className="container mx-auto max-w-2xl py-8 text-center lg:py-10">
          <h2 className="text-2xl font-semibold leading-tight lg:text-[40px]">
            Join JsLovers for free
          </h2>
          <p className="text-text-paragraph mt-3 text-base lg:text-lg">
            Connect with developers from everywhere around the world. Make
            strong relationship with other members , boost your network and
            learn from each other.
          </p>
          <p className="mt-3 text-sm font-semibold text-cyanCobaltBlue lg:text-xl">
            Just enter your email below to join
          </p>

          <form className="mt-6 flex items-center">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <div className="relative flex flex-grow flex-col space-y-4 lg:flex-row lg:space-y-0">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="ring-spanishGray h-12 w-full flex-auto rounded-lg border-0 pl-6 text-sm ring-2 ring-inset placeholder:text-sm lg:h-16 lg:text-lg lg:placeholder:text-lg"
              />

              <Button
                variant="jsl"
                type="submit"
                className="lg:absolute lg:inset-y-0 lg:right-0 lg:h-16 lg:border-[3px]"
              >
                Join for free
                <ArrowRight className="ml-2 h-5 w-5 lg:ml-3 lg:h-6 lg:w-6" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
