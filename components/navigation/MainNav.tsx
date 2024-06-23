"use client";
import Link from "next/link";
import { useState } from "react";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

const createNavigation = (items: NavItem[], currentPath: string) => {
  return items.map((item, index) => (
    <Link
      key={index}
      href={item.href || ""}
      className={`flex items-center py-2 sm:text-base md:text-lg lg:text-xl ${
        currentPath === item.href ? "border-black" : "border-transparent"
      }`}
    >
      {item.title}
    </Link>
  ));
};

export function MainNav({ items }: MainNavProps) {
  const currentPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative flex w-full items-center justify-between px-4 lg:px-8">
      <div className="flex items-center">
        <Logo />
        <nav className="hidden gap-10 lg:flex">
          {items && createNavigation(items, currentPath)}
        </nav>
      </div>
      <div className="flex items-center">
        <button
          className="flex items-center lg:hidden"
          onClick={handleMobileMenuToggle}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <Link
          href="/register"
          className={cn(
            buttonVariants(),
            "ml-4 border-2 border-solid border-border",
          )}
        >
          Register Now
        </Link>
      </div>
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-10 bg-black opacity-50"
            onClick={handleMobileMenuToggle}
          ></div>
          <nav className="fixed left-0 top-0 z-20 h-full w-64 transform bg-white shadow-md transition-transform duration-300 ease-in-out lg:hidden">
            <div className="flex flex-col items-start gap-4 p-4">
              {items && createNavigation(items, currentPath)}
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
