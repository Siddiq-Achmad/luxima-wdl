import React from "react";

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function PaginationButtons({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: PaginationButtonsProps) {
  return (
    <div className="flex justify-between items-center mt-4 gap-2">
      <button
        onClick={onPrev}
        disabled={currentPage <= 1}
        className={`px-4 py-2 text-white bg-primary rounded hover:bg-neutral-400 ${
          currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage >= totalPages}
        className={`px-4 py-2 text-white bg-primary rounded hover:bg-neutral-400 ${
          currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}
