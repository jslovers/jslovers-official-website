"use client";

import { useState } from "react";

type AccordionProps = {
  summaryBgColor: string;
  title: string;
  content: string;
}

const Accordion = ({
  summaryBgColor,
  title,
  content,
}: AccordionProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`border-2 border-border lg:border-[3px] ${
        expanded ? "rounded-[15px]" : "rounded-full"
      }`}
    >
      <h2>
        <button
          className={`flex w-full items-center justify-between px-5 text-left text-sm font-medium hover:cursor-pointer lg:px-12 lg:text-2xl ${
            expanded
              ? "rounded-tl-[15px] rounded-tr-[15px] border-b-2 border-border py-3"
              : `rounded-full py-2 lg:py-4`
          }`}
          onClick={toggleExpand}
          style={{ backgroundColor: expanded ? "" : summaryBgColor }}
        >
          <span>{title}</span>
          <span
            className={`ml-2 flex h-1 w-3 items-center justify-center md:h-2 md:w-4 lg:h-4 lg:w-7 ${
              expanded ? "" : "rotate-180"
            }`}
          >
            <svg
              viewBox="0 0 32 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16L16 2L30 16"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h2>

      <div
        className={`grid overflow-hidden text-xs lg:text-base ${
          expanded
            ? "grid-rows-[1fr] px-3 py-4 opacity-100 lg:px-12"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
