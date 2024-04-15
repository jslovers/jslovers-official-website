"use client";

import { useState } from "react";

interface AccordionProps {
  summaryBgColor: string;
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({
  summaryBgColor,
  title,
  content,
}) => {
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
          className={`hover:cursor-pointer px-5 flex items-center justify-between w-full font-medium text-left text-sm lg:text-2xl lg:px-12 ${
            expanded
              ? "rounded-tl-[15px] rounded-tr-[15px] py-3 border-border border-b-2"
              : `rounded-full py-2 lg:py-4`
          }`}
          onClick={toggleExpand}
          style={{ backgroundColor: expanded ? "" : summaryBgColor }}
        >
          <span>{title}</span>
          <span
            className={`flex justify-center items-center ml-2 h-1 w-3 md:h-2 md:w-4 lg:h-4 lg:w-7 ${
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
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </h2>

      <div
        className={`grid text-xs overflow-hidden lg:text-base ${
          expanded
            ? "grid-rows-[1fr] opacity-100 px-3 py-4 lg:px-12"
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
