"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScreenSize } from "@/lib/useScreenSize";

type CarouselSectionProps =
  | {
      children: ReactNode;
      gridOnLg: true;
      gridChildren: ReactNode;
    }
  | {
      children: ReactNode;
      gridOnLg?: false;
      gridChildren?: never;
    };

const CarouselSection = ({
  children,
  gridOnLg = false,
  gridChildren,
}: CarouselSectionProps): JSX.Element => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const screenSize = useScreenSize();

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

  if (gridOnLg && screenSize?.width && screenSize?.width >= 1024) {
    return <>{gridChildren}</>;
  }

  return (
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="w-fit py-2 text-center text-sm text-muted-foreground">
        {current} of {count}
      </div>
    </>
  );
};

export { CarouselSection };
