import { cn } from "@/lib/utils";
interface DropdownProps {
  filter_name: string;
  filter_options: string[];
  filter_background?: string;
  className?: string;
}
const Dropdown = ({
  filter_name,
  filter_options,
  filter_background,
  className,
}: DropdownProps) => {
  return (
    <div className={cn("group inline-block relative", className)}>
      <button
        style={{
          backgroundColor: `${filter_background ? filter_background : null}`,
        }}
        className="bg-gray-300 text-xl font-medium py-3 px-6 rounded-[56px] inline-flex items-center border-solid border-2 border-border"
      >
        <span className="mr-1">{filter_name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="15"
          viewBox="0 0 28 15"
          fill="none"
        >
          <path
            d="M2 1.5L14 13.5L26 1.5"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
        {filter_options?.length > 0 &&
          filter_options.map((opt: string, i: number) => (
            <li className="" key={i}>
              <a
                className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                {opt}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
