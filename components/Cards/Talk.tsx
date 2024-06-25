import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Talk } from "@/types";

const PreviousTalk = ({ data }: { data: Talk[] }) => {
  const createCardsList = () => {
    return data.map((item: Talk, index: number) => {
      return (
        <Link href="#" key={`previousTalk.title + ${index}`}>
          <div className="carousel-item rounded-lg border-2 border-border p-5 lg:p-7">
            <div className="md:w-70 md:h-70  flex h-60 w-60 flex-col  xl:h-80 xl:w-80">
              <div className="flex h-2/3 items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              </div>
              <span className="text-[20px] font-medium">{item.date}</span>
              <h4 className="text-[28px] font-semibold">{item.title}</h4>
              <p className="text-text-sub-heading text-lg font-semibold">
                by {item.speaker}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  };
  return <>{data && createCardsList()}</>;
};

export default PreviousTalk;
