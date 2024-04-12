import { cn, generateUnderlineSVGs } from "@/lib/utils";
import React from "react";

// TODO: add appropriate svg height and width for mobile devices

interface SectionHeaderProps {
  header: string;
  className?: string;
  titleClassName?: string;
}

const SectionHeader = ({
  header,
  className,
  titleClassName = "text-left lg:text-right",
}: SectionHeaderProps) => {
  const desktopWidths = [266, 54, 54, 54];
  const desktopHeights = [12, 12, 12, 12];
  const mobileWidths = [139, 28, 28];
  const mobileHeights = [12, 12, 12];

  return (
    <div className={cn("flex flex-col gap-1 lg:gap-4", className)}>
      <h3
        className={cn("font-semibold text-2xl lg:text-[40px]", titleClassName)}
      >
        {header}
      </h3>
      <div className="hidden lg:flex gap-2">
        {generateUnderlineSVGs(desktopWidths, desktopHeights)}
      </div>
      <div className="flex gap-1 lg:hidden ">
        {generateUnderlineSVGs(mobileWidths, mobileHeights)}
      </div>
    </div>
  );
};

export default SectionHeader;
