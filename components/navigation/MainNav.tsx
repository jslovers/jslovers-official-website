import { NavItem } from "@/types";
import Link from "next/link";
import { Icons } from "../Icons";

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/">
        <Icons.logo />
      </Link>

      {items?.length ? (
        <nav className="hidden gap-10 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center  md:text-lg  sm:text-sm "
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
