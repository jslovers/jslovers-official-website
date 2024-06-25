import { generateUnderlineSVGs } from "@/lib/helpers";
import { cn } from "@/lib/utils";
type SectionHeaderProps = {
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
    <section className={cn("flex flex-col gap-1 lg:gap-4", className)}>
      <h3
        className={cn(
          "text-text-sub-heading text-2xl font-semibold lg:text-[40px]",
          titleClassName,
        )}
      >
        {header}
      </h3>
      <div className="hidden gap-2 lg:flex">
        {generateUnderlineSVGs(desktopWidths, desktopHeights)}
      </div>
      <div className="flex gap-1 lg:hidden ">
        {generateUnderlineSVGs(mobileWidths, mobileHeights)}
      </div>
    </section>
  );
};

export default SectionHeader;
