import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Workshop from "@/components/Workshop";
import { HOMEPAGE } from "@/config/home";
import SignupForMeetupCard from "@/components/SignupForMeetupCard";
import FormSection from "@/components/FormSection/FormSection";
import FeatureStaticList from "@/components/FeatureStaticList/FeatureStaticList";

export default async function page() {
  return (
    <>
      <section className="isolate">
        <div className="container py-4">
          <div className="max-w-2xl justify-between gap-x-20 lg:flex lg:max-w-full lg:items-center">
            <Workshop
              workshopData={HOMEPAGE.WorkshopData}
              className={"w-full max-w-2xl lg:w-1/2 lg:shrink-0"}
            />

            <div className="hidden w-1/2 lg:flex ">
              <div className="flex w-1/2 flex-col justify-center ">
                <Image
                  src="/assets/hero_image_1_v1.png"
                  width="254"
                  height="226"
                  alt="hero_image"
                  className="object-cover "
                  loading="lazy"
                />
              </div>
              <div className="flex w-1/2 flex-col justify-center space-y-16">
                <Image
                  src="/assets/hero_image_2_v1.png"
                  width="147"
                  height="179"
                  alt="hero_image"
                  className="ml-auto object-cover"
                  loading="lazy"
                />
                <Image
                  src="/assets/hero_image_3_v1.png"
                  width="260"
                  height="274"
                  alt="hero_image"
                  className="object-cover "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="isolate">
        <div className="container space-y-16 py-16">
          <SectionHeader header="Our Achivements" className="mx-auto w-min" />
          <FeatureStaticList cardData={HOMEPAGE.Achievements} />
        </div>
      </section>

      <section className="isolate">
        <div className="container flex flex-col items-center justify-center space-y-16 py-16">
          <SectionHeader header="Previous talks" className="w-min" />
          <div className="carousel carousel-center flex max-w-full flex-wrap justify-between gap-7 py-5 xl:gap-8">
            {HOMEPAGE.PreviousTalks.map((previousTalk, index) => {
              return (
                <div
                  key={`previousTalk.title + ${index}`}
                  className="carousel-item rounded-lg border-2 border-border p-5 lg:p-7"
                >
                  <div className="md:w-70 md:h-70  flex h-60 w-60 flex-col  xl:h-80 xl:w-80">
                    <div className="flex h-2/3 items-center justify-center">
                      <Image
                        src={previousTalk.imgSrc}
                        alt={previousTalk.title}
                        width={200}
                        height={200}
                      />
                    </div>
                    <span className="text-[20px] font-medium">
                      {previousTalk.date}
                    </span>
                    <h4 className="text-[28px] font-semibold">
                      {previousTalk.title}
                    </h4>
                    <p className="text-text-sub-heading text-lg font-semibold">
                      by {previousTalk.speaker}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="isolate">
        <FormSection />
      </section>
      <SignupForMeetupCard />
    </>
  );
}
