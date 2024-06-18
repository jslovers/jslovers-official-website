import Image from "next/image";
import Workshop from "@/components/Workshop";
import HeroImages from "./HeroImages";

const Hero = ({ data }: any) => {
  return (
    <div className="container py-4">
      <div className="max-w-2xl justify-between gap-x-20 lg:flex lg:max-w-full lg:items-center">
        <Workshop
          workshopData={data.WorkshopData}
          className={"w-full max-w-2xl lg:w-1/2 lg:shrink-0"}
        />

        <HeroImages />
      </div>
    </div>
  );
};

export default Hero;
