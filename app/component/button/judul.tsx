// components/Judul.tsx
import React from "react";

interface JudulProps {
  children: string; // Hanya terima string
  className?: string;
}

const Judul: React.FC<JudulProps> = ({ children, className }) => {
  return (
    <div
      className={` text-secondary sm:text-xl text-lg font-semibold sm:font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default Judul;
