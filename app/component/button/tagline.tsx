// components/TextOnly.tsx
import React from "react";

interface TextOnlyProps {
  children: string; // Hanya terima string
  className?: string;
}

const TextOnly: React.FC<TextOnlyProps> = ({ children, className }) => {
  return (
    <div
      className={` text-white border border-white rounded-full w-fit text-xs font-light py-[2px] px-2 sm:py-1 sm:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default TextOnly;
