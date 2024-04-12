import { Speaker } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="scroll-ml-6 snap-center inline-flex flex-col items-center gap-2 lg:items-start lg:mx-auto">
      <div className="relative mb-3 mr-3 p-8 border-[5px] border-solid border-black rounded-[10px] flex flex-col items-center justify-center">
        <Image
          src={speaker.imageSrc}
          width={204}
          height={204}
          alt="Speaker Image"
          className="object-cover w-[174px] h-[174px] lg:w-[204px] lg:h-[204px] rounded-[10px]"
          loading="lazy"
        />

        <div className="-z-[1] absolute top-[12px] left-[12px] p-8 rounded-[10px] border-[5px] rounded-tr-none rounded-bl-none border-l-0 border-t-0 border-solid border-black">
          <div className="w-[174px] h-[174px] lg:w-[204px] lg:h-[204px]" />
        </div>
      </div>

      <div className="w-[279px] inline-flex flex-col items-center gap-2 lg:items-start">
        <div className="font-semibold text-black text-2xl leading-[normal] lg:text-[40px]">
          {speaker.name}
        </div>
        <p className="font-normal text-black text-base leading-[normal] lg:text-lg">
          {`${speaker.designation}${
            speaker.company ? `, ${speaker.company}` : ""
          }`}
        </p>
        <p className="w-[251px] font-medium text-[#383a48] text-xs leading-[normal] lg:text-sm">
          {speaker.description}
        </p>
        <div className="w-fit flex items-center justify-center gap-4">
          {speaker.socials.map((social) => (
            <Link key={social.href} href={social.href} target="_blank">
              <Image
                src={`/assets/icons/${social.platform}.svg`}
                width={25}
                height={25}
                alt={social.platform}
                loading="lazy"
                className="hover:scale-[1.2] transition-transform duration-200 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
