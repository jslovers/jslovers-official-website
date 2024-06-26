"use client";
import { jobsList, jobFilters } from '@/lib/mock_data';
import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react'
import JobCard from './Cards/JobCard';
import { buttonVariants } from "@/components/Button";
import { JobFilterType } from '@/types';
import CarouselWithDots from './CarouselWithDots';


export const JobSection = () => {
    const [selectedFilters, setSelectedFilters] = useState<Map<JobFilterType, Set<string>>>(new Map());
    const [activeFilterType, setActiveFilterType] = useState<JobFilterType | null>(null);

    const toggleFilterType = (filterType: JobFilterType) => {
        if (activeFilterType === filterType) {
            setActiveFilterType(null);
        } else {
            setActiveFilterType(filterType);
        }
    }

    const onFilterClick = useCallback((filterType: JobFilterType, filterName: string) => {
        setSelectedFilters((prevFilters) => {
            const newFilters = new Map(prevFilters);
            const filterSet = new Set(newFilters.get(filterType) || []);

            if (filterSet.has(filterName)) {
                filterSet.delete(filterName);
            } else {
                filterSet.add(filterName);
            }

            if (filterSet.size === 0) {
                newFilters.delete(filterType);
            } else {
                newFilters.set(filterType, filterSet);
            }

            return newFilters;
        });
    }, []);

    return (
        <section className="mx-6 lg:mx-32">
            <div className='mb-6'>
                <p className="font-medium text-[20px] mb-4">
                    Filter the job results as per your need
                </p>
                <div className="flex flex-nowrap lg:flex-wrap overflow-y-scroll lg:overflow-hidden items-center gap-4 mb-4">
                    {(Object.keys(jobFilters) as JobFilterType[]).map((filterType, index) => (
                        <button
                            key={'job' + filterType + index}
                            style={{ backgroundColor: jobFilters[filterType].filter_backgroundColor }}
                            className={`text-xl font-medium py-3 px-6 rounded-[56px] inline-flex items-center border-solid border-2 border-border mb-4 lg:mb-0 whitespace-nowrap`}
                            onClick={() => toggleFilterType(filterType)}
                        >
                            <span className="mr-1">{filterType}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="15"
                                viewBox="0 0 28 15"
                                fill="none"
                            >
                                <path
                                    d={activeFilterType === filterType ? "M2 13.5L14 1.5L26 13.5" : "M2 1.5L14 13.5L26 1.5"}
                                    stroke="black"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    ))}

                </div>

                {activeFilterType && <div className="flex flex-nowrap lg:flex-wrap overflow-y-scroll lg:overflow-hidden items-center gap-4 mb-2 lg:mb-0">{jobFilters[activeFilterType].filter_options.map((option, index) => (
                    <button
                        key={option + index}
                        className={`${selectedFilters.get(activeFilterType)?.has(option) ? 'bg-gray-300' : 'bg-[#F3F6E7]'} whitespace-nowrap text-xl font-medium py-3.5 px-7 rounded-full inline-flex items-center mb-4 lg:mb-0`}
                        onClick={() => onFilterClick(activeFilterType, option)}
                    >
                        {option}
                    </button>
                ))} </div>}

                <div className="my-4 h-0.5 border-t-0 bg-[#C4C4C4]" />

                {selectedFilters.size > 0 && (
                    <div className="flex flex-nowrap lg:flex-wrap overflow-y-scroll lg:overflow-hidden items-center gap-4">
                        {Array.from(selectedFilters).map(([filterType, values]) =>
                            Array.from(values).map((value, index) => (
                                <button key={filterType + value + index} onClick={() => onFilterClick(filterType, value)} className="text-xl font-medium py-3.5 px-7 rounded-full inline-flex items-center border-[#696969] border-2 border-solid whitespace-nowrap mb-4 lg:mb-0">
                                    <span className="mr-1 text-[#696969]">{value}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="28" height="22" fill="#696969" >
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                            ))
                        )}
                    </div>
                )}


            </div>
            {jobsList.length > 0 &&
                <>
                    <CarouselWithDots className="lg:hidden">
                        {jobsList.map((job, i) => <JobCard key={'jobCard' + i} job={job} />)}
                    </CarouselWithDots>
                    <div className="hidden lg:grid gap-4 auto-rows-auto grid-flow-dense" style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    }}>
                        {jobsList.map((job, i) => (
                            <JobCard
                                key={'jobCard' + i}
                                job={job}
                                className='min-w-min'
                            />
                        ))}
                    </div>
                </>
            }

            {/* {jobsList?.length > 0 &&
                <>
                    <p className="text-2xl font-medium my-9 lg:hidden text-center">
                        Similar Jobs
                    </p>
                    <CarouselWithDots className="lg:hidden">
                        {jobsList.map((job, i) => <JobCard key={i} {...job} />)}
                    </CarouselWithDots>
                    <div className="hidden carousel carousel-center max-w-full justify-between gap-7 lg:grid lg:grid-cols-4 lg:gap-4">
                        {jobsList.map((job, i) => (
                            <JobCard
                                key={i}
                                {...job}
                                className="carousel-item min-w-[280px] lg:min-w-min"
                            />
                        ))}
                    </div>
                </>
            } */}

            <div className="hidden lg:flex items-center justify-center">
                <button
                    className={cn(
                        buttonVariants({ variant: "secondary" }),
                        "border-solid border-2 border-border my-16 px-8 py-6 text-xl font-medium"
                    )}
                >
                    Load more
                </button>
            </div>
        </section>
    )
}