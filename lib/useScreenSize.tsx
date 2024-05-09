"use client";
import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const isBrowser = typeof window !== "undefined";

  const [screenSize, setScreenSize] = useState({
    width: isBrowser ? window.innerWidth : undefined,
    height: isBrowser ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBrowser]);

  return screenSize;
};
