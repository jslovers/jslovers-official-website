import { Speaker } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImageDoubleFrame } from "@/components/ImageDoubleFrame";

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="lg:mx-auto">
      <ImageDoubleFrame>
        <Image
          src={speaker.imageSrc}
          width={204}
          height={204}
          alt=""
          className="h-[174px] w-[174px] rounded-[10px] object-cover lg:h-[204px] lg:w-[204px]"
          loading="lazy"
        />
      </ImageDoubleFrame>

      <div className="inline-flex w-[279px] flex-col items-center gap-2 py-2 lg:items-start">
        <div className="text-2xl font-semibold leading-[normal] text-black lg:text-[40px]">
          {speaker.name}
        </div>
        <p className="text-base font-normal leading-[normal] text-black lg:text-lg">
          {`${speaker.designation}${
            speaker.company ? `, ${speaker.company}` : ""
          }`}
        </p>
        <p className="w-[251px] text-xs font-medium leading-[normal] text-[#383a48] lg:text-sm">
          {speaker.description}
        </p>
        <div className="flex w-fit items-center justify-center gap-4">
          {speaker.socials.map((social) => (
            <Link key={social.href} href={social.href} target="_blank">
              <Image
                src={`/assets/icons/${social.platform}.svg`}
                width={25}
                height={25}
                alt={social.platform}
                loading="lazy"
                className="transition-transform duration-200 ease-in-out hover:scale-[1.2]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
