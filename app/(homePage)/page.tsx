import SectionHeader from "@/components/SectionHeader";
import { HOMEPAGE } from "@/config/home";
import SignupForMeetupCard from "@/components/Cards/SignupForMeetupCard";
import FormSection from "@/components/FormSection/FormSection";
import FeatureStaticList from "@/components/FeatureStaticList/FeatureStaticList";
import Hero from "@/components/Hero/Hero";
import PreviousTalk from "@/components/Cards/Talk";


export default async function page() {
  return (
    <>
      <section className="isolate">
        <Hero data={HOMEPAGE.Workshop} />

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
            <PreviousTalk data={HOMEPAGE.PreviousTalks} />
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
