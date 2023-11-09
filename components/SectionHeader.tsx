import { cn, generateUnderlineSVGs } from "@/lib/utils";
import React from "react";

// TODO: add appropriate svg height and width for mobile devices

interface SectionHeaderProps {
  header: string;
  className?: string;
}

const SectionHeader = ({ header, className }: SectionHeaderProps) => {
  const widths = [266, 54, 54, 54];
  const heights = [12, 12, 12, 12];

  return (
    <div className={cn("flex flex-col", className)}>
      <h3 className="text-[40px] font-semibold text-right">{header}</h3>
      <div className="flex gap-2">{generateUnderlineSVGs(widths, heights)}</div>
    </div>
  );
};

export default SectionHeader;
