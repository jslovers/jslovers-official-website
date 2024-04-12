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
      className={`border-2 border-border ${
        expanded ? "rounded-[15px]" : "rounded-full"
      }`}
    >
      <h2>
        <button
          className={`hover:cursor-pointer px-5 flex items-center justify-between w-full font-medium text-sm lg:text-xl ${
            expanded
              ? "rounded-tl-[15px] rounded-tr-[15px] py-3 border-border border-b-2"
              : `rounded-full py-2`
          }`}
          onClick={toggleExpand}
          style={{ backgroundColor: expanded ? "" : summaryBgColor }}
        >
          <span className="">{title}</span>
          <span className={`ml-2 ${expanded ? "rotate-180" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h2>

      <div
        className={`grid text-xs overflow-hidden lg:text-xs ${
          expanded
            ? "grid-rows-[1fr] opacity-100 px-3 py-4"
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
