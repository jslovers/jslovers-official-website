import Image from "next/image";
import HeroImages from "./HeroImages";
import WorkshopDetails from "@/components/Workshop";
import { Workshop } from "@/types";

const Hero = ({ workshop }: { workshop: Workshop }) => {
  return (
    <div className="container py-4">
      <div className="max-w-2xl justify-between gap-x-20 lg:flex lg:max-w-full lg:items-center">
        <WorkshopDetails
          workshopData={workshop}
          className={"w-full max-w-2xl lg:w-1/2 lg:shrink-0"}
        />

        <HeroImages />
      </div>
    </div>
  );
};

export default Hero;
