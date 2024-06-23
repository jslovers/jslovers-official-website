"use client";
import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { useScreenSize } from "@/lib/useScreenSize";

interface CarouselWithDotsProps {
  children: ReactNode[];
  autoRotateInterval?: number;
}

const CarouselWithDots: React.FC<CarouselWithDotsProps> = ({ children, autoRotateInterval = 1000 }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const screenSize = useScreenSize();

  const getItemsPerPage = (width: number) => {
    if (width >= 1280) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const itemsPerPage = getItemsPerPage(screenSize.width ?? 0);
  const totalPages = Math.ceil(children.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = children.slice(startIndex, endIndex);

  const rotatePageForward = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        rotatePageForward();
      }
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isPaused, rotatePageForward, autoRotateInterval]);

  const handlePageClick = (index: number) => {
    setCurrentPage(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="carousel carousel-center flex max-w-full flex-wrap justify-between gap-7 py-5 xl:gap-8">
        {visibleItems}
      </div>
      <div className="flex flex-row gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full ${
              index === currentPage ? 'bg-primary' : 'border-zinc-700 border-4 bg-gray-200'
            }`}
            onClick={() => handlePageClick(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWithDots;