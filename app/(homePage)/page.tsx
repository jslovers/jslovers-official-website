import SectionHeader from "@/components/SectionHeader";
import { HOMEPAGE } from "@/config/home";
import SignupForMeetupCard from "@/components/Cards/SignupForMeetupCard";
import FormSection from "@/components/FormSection/FormSection";
import FeatureStaticList from "@/components/FeatureStaticList/FeatureStaticList";
import Hero from "@/components/Hero/Hero";
import TalkCard from "@/components/Cards/TalkCard";
import dynamic from 'next/dynamic';
const CarouselWithDots = dynamic(() => import('@/components/CarouselWithDots'), { ssr: false });

export default async function page() {
  return (
    <>
      <section className="isolate">
        <Hero data={HOMEPAGE} />
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
          <CarouselWithDots>
            {HOMEPAGE.PreviousTalks.map((talk, index) => <TalkCard key={`${talk.title} ${index}`} talk={talk} />)}
          </CarouselWithDots>
        </div>
      </section>

      <section className="isolate">
        <FormSection />
      </section>
      <SignupForMeetupCard />
    </>
  );
}
