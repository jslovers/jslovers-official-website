import { cn, generateUnderlineSVGs } from "@/lib/utils";
import React from "react";

// TODO: add appropriate svg height and width for mobile devices

interface SectionHeaderProps {
  header: string;
  className?: string;
}

const SectionHeader = ({ header, className }: SectionHeaderProps) => {
  const desktopWidths = [266, 54, 54, 54];
  const desktopHeights = [12, 12, 12, 12];
  const mobileWidths = [139, 28, 28];
  const mobileHeights = [12, 12, 12];

  return (
    <div className={cn("flex flex-col", className)}>
      <h3 className="text-2xl lg:text-[40px] font-semibold text-left lg:text-right">
        {header}
      </h3>
      <div>
        <div className="hidden lg:flex gap-2">
          {generateUnderlineSVGs(desktopWidths, desktopHeights)}
        </div>
        <div className="flex gap-1 lg:hidden ">
          {generateUnderlineSVGs(mobileWidths, mobileHeights)}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
