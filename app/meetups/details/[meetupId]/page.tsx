"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { meetupsList } from '@/lib/mock_data';
import CarouselWithDots from '@/components/CarouselWithDots';
import MeetupCard from '@/components/Cards/MeetupCard';
import { SPEAKERS } from '@/config/speakers';
import SpeakerCard from '@/components/Cards/SpeakerCard';
import { convertDateTimeForMeetupDetail } from '@/lib/helpers';

export default function Page({ params: { meetupId } }: { params: { meetupId: string } }) {
    const meetup = meetupsList.filter((meetup) => meetup.id.toString() == meetupId);
    const tabs = ['Details', 'Speakers'];
    const [currentTab, setCurrentTab] = useState(0);

    if (meetup.length === 0) {
        return (<p>No meetup found.</p>);
    }

    return (
        <section className="px-8 py-8">
            <p className='text-4xl font-semibold leading-8 text-left'>{meetup[0].topicName}</p>
            <p className='text-base font-normal py-2'>{meetup[0].description || "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}</p>
            <div className='flex gap-4 flex-col lg:flex-row lg:items-start pt-3 pb-5'>
                <div className='w-full lg:w-3/4 h-[400px] bg-[#EAC1FD] rounded-lg'></div>
                <div className='border-2 border-solid border-[#9C9C9C] rounded-lg p-4'>
                    <div className='flex gap-2'>
                        <Image src="/assets/icons/clock.svg" width={24} height={24} alt="Date&Time" />
                        <span>{convertDateTimeForMeetupDetail(meetup[0].dateTime)}</span>
                    </div>
                    {
                        meetup[0].isOnline ?
                            <div className='flex gap-2 items-center pt-2'>
                                <span><Image src="/assets/icons/camera.svg" width={24} height={24} alt="Online" /></span>
                                {"This is an online event"}
                            </div>
                            :
                            <div className='flex gap-2 items-center pt-2'>
                                <span><Image src="/assets/icons/location.svg" width={24} height={24} alt="Location"/></span>
                                {meetup[0].location?.city}, {meetup[0].location?.country}
                            </div>
                    }
                </div>
            </div>
            <div className="flex border-b-[1px] border-solid border-[#676769]">
                {
                    tabs.map((tab, i) => (
                        <span key={`tab${i}`} className={`relative inline-block px-4 py-2 text-2xl font-medium ${currentTab === i ? 'text-black' : 'text-[#676769]'}`} onClick={() => setCurrentTab(i)}>
                            {tab}
                            {currentTab === i && (
                                <div className="absolute w-full h-1 bottom-[-2px] left-0 bg-blue-300 rounded-full"></div>
                            )}
                        </span>
                    ))
                }
            </div>
            {currentTab === 0 && (
                <p className='text-base font-normal py-2'>
                    {meetup[0].details ||

                        `Hello JSLovers,
                    [Invites are out] 

                    Session Details:

                    Talk 1: Accessibility Beyond Compliance
                    Speaker: Tanisha Sabherwal, Software Engineer, JP Morgan
                    (https://twitter.com/tanishaaa03)

                    Talk 2: Nested Interactive Elements Accessibility
                    Speaker: Gaurav Gupta, Lead Software Engineer, smallcase (https://twitter.com/gaurav5430)

                    Meetup link will be shared over Invites.

                    Thanks,
                    JSLovers Team

                    Venue - Online`
                    }
                </p>
            )
            }

            {
                currentTab === 1 &&
                <section className="pt-8 pb-2">
                    <div className="overflow-x-scroll overflow-y-hidden max-w-full flex gap-4">
                        {SPEAKERS.Speakers.map((speakerProps) => (
                            <SpeakerCard key={speakerProps.id} speaker={speakerProps} />
                        ))}
                    </div>
                </section>
            }

            <p className='text-3xl font-medium text-left py-5'>More By the Speaker</p>
            {meetupsList.length > 0 &&
                <>
                    <CarouselWithDots className="lg:hidden">
                        {meetupsList.map((meetup, i) => <MeetupCard key={'meetupCard' + i} meetup={meetup} className="w-80" />)}
                    </CarouselWithDots>
                    <div className="hidden lg:grid gap-4 auto-rows-auto grid-flow-dense" style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    }}>
                        {meetupsList.slice(0, 4).map((meetup, i) => (
                            <MeetupCard
                                key={'meetupCard' + i}
                                meetup={meetup}
                                className='min-w-min'
                            />
                        ))}
                    </div>
                </>
            }
            <p className='text-3xl font-medium text-left py-5'>Similar Meetups</p>
            {meetupsList.length > 0 &&
                <>
                    <CarouselWithDots className="lg:hidden">
                        {meetupsList.map((meetup, i) => <MeetupCard key={'meetupCard' + i} meetup={meetup} className="w-80" />)}
                    </CarouselWithDots>
                    <div className="hidden lg:grid gap-4 auto-rows-auto grid-flow-dense" style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    }}>
                        {meetupsList.slice(0, 4).map((meetup, i) => (
                            <MeetupCard
                                key={'meetupCard' + i}
                                meetup={meetup}
                                className='min-w-min'
                            />
                        ))}
                    </div>
                </>
            }
        </section>
    )
}