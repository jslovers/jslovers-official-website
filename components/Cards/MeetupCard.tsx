import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import { Meetup } from "@/types";
import Link from "next/link";

interface MeetupCardProps {
    className?: string;
    meetup: Meetup;
}
const MeetupCard = ({
    className,
    meetup,
}: MeetupCardProps) => {
    const formatDate = (meetupDateTime: string) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(meetupDateTime);
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${day} ${months[monthIndex]} ${year}`;
    }

    return (
        <div
            className={cn(
                "border-solid border-border-card border-[3px] rounded-[10px] p-5",
                className
            )}
        >
            {/* <Image
                src={"meetup.banner"} 
                width="205"
                height="52"
                alt={meetup.topicName}
                loading="lazy"
            /> */}
            <div className="w-full h-60 bg-[#E0719E]"></div>
            <p className="text-xl font-medium leading-6 text-left pt-3">{formatDate(meetup.dateTime)}</p>
            <p className="text-[28px] font-semibold leading-8 text-left pt-2.5">{meetup.topicName}</p>
            <p className="text-lg font-semibold leading-5 text-[#383A48] text-left pt-2.5 pb-1.5 ">{meetup.speakerName}</p>
            <Link href={`/meetups/details/${meetup.id}`}>
                <button
                    className={cn(
                        buttonVariants(),
                        "border-solid border-2 border-border mt-2.5"
                    )}
                >
                    View Details
                    <Image
                        src="/assets/icons/right_arrow.svg"
                        width="11"
                        height="11"
                        alt=""
                        className="ml-1"
                        loading="lazy"
                    />
                </button>
            </Link>
        </div>
    );
};

export default MeetupCard;
