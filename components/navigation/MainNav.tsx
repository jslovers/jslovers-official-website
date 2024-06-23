"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

const createNavigation = (items: NavItem[], currentPath: string, closeMenu: () => void) => {
  return items.map((item, index) => (
    <Link
      key={index}
      href={item.href || ""}
      className={`flex items-center border-b-2 sm:text-sm p-1 hover:text-black  text-gray-500 my-1 md:text-lg  cursor-pointer ${
        currentPath === item.href ? "border-black text-gray-800 font-medium " : "border-white"
      }`}
      onClick={closeMenu}
    >
      {item.title}
    </Link>
  ));
};

export function MainNav({ items }: MainNavProps) {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button">
            <Link
              href="/register"
              className={cn(
                buttonVariants(),
                "border-solid border-2 border-border"
              )}
            >
              Register Now
            </Link>
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4  border  rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {items && createNavigation(items, currentPath, closeMenu)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
