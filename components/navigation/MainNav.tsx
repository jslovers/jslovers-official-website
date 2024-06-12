"use client"

import { NavItem } from "@/types";
import Link from "next/link";
import { Icons } from "../Icons";
import { usePathname } from 'next/navigation';

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items }: MainNavProps) {
  const currentPath = usePathname();

  return (
    <div className="flex gap-6 md:gap-10">
      <h1>
        <Link href="/">
          <span className="sr-only">JSLovers</span>
          <Icons.logo />
        </Link>
      </h1>

      {items?.length ? (
        <nav className="hidden gap-10 lg:flex">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href || ""}
              className={`flex items-center border-b-4 md:text-lg sm:text-sm ${
                currentPath === item.href ? "border-black" : "border-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
