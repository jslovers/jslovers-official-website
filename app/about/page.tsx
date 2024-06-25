import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Accordion from "@/components/Accordion";
import { CarouselSection } from "@/components/CarouselSection";
import { ImageDoubleFrame } from "@/components/ImageDoubleFrame";
import SectionHeader from "@/components/SectionHeader";
import SpeakerCard from "@/components/Cards/SpeakerCard";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { ABOUT } from "@/config/about";
import FeatureStaticList from "@/components/FeatureStaticList/FeatureStaticList";

export default async function page() {
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
        </div>
      </section>

      <section className="isolate">
        <div className="container flex flex-col items-center justify-center gap-6 py-8 lg:gap-9">
          <SectionHeader
            header={`${ABOUT.purpose.title}`}
            className="mx-auto w-min"
            titleClassName="text-center"
          />
          <FeatureStaticList cardData={ABOUT.purpose.cards} />
        </div>
      </section>

      <section className="isolate">
        <div className="container flex flex-col items-center justify-center gap-6 py-8 lg:gap-9">
          <SectionHeader
            header={`${ABOUT.team.title}`}
            className="mx-auto w-min"
            titleClassName="text-center"
          />
          <p className="text-text-sub-heading mx-auto max-w-[871px] text-center text-base font-normal lg:hidden lg:text-2xl lg:font-medium">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <section>
            <div className="flex w-full gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3">
              {ABOUT.team.members.map((speakerProps) => (
                <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 py-8 lg:container lg:gap-9">
        <SectionHeader
          header={`${ABOUT.story.title}`}
          className="mx-auto w-min"
          titleClassName="text-center"
        />

        <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-11">
          <div className="container flex flex-col items-center gap-1 lg:w-[50%] lg:gap-3 lg:px-0">
            {ABOUT.story.faqs.map((faq, i) => (
              <Accordion
                key={faq.ques}
                summaryBgColor={faq.summaryBgColor}
                title={faq.ques}
                content={faq.ans}
              />
            ))}
          </div>
          <div className="flex max-w-full flex-col items-center px-4 py-5 lg:w-[50%]">
            <CarouselSection>
              {ABOUT.story.images.map((image, i) => (
                <CarouselItem key={i}>
                  <ImageDoubleFrame>
                    <Image
                      src={image}
                      width={381}
                      height={226}
                      alt=""
                      className="w-[250px] rounded-[10px] lg:w-[381px]"
                      loading="lazy"
                    />
                  </ImageDoubleFrame>
                </CarouselItem>
              ))}
            </CarouselSection>
          </div>
        </div>
      </section>

      <section className="isolate mt-5 bg-lavenderRose lg:mt-12">
        <div className="container mx-auto max-w-2xl py-8 text-center lg:py-10">
          <h2 className="text-2xl font-semibold leading-tight lg:text-[40px]">
            Join JSLovers for free
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
                className="h-12 w-full flex-auto rounded-lg border-0 pl-6 text-sm ring-2 ring-inset ring-spanishGray placeholder:text-sm lg:h-16 lg:text-lg lg:placeholder:text-lg"
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
}
