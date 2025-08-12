"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonRedProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const ButtonRed: React.FC<ButtonRedProps> = ({
  children,
  href,
  className = "",
  onClick,
}) => {
  const baseClasses =
    "py-1.5 px-2.5 sm:py-2 sm:px-4 text-xs sm:text-base font-semibold rounded-full bg-merah text-white";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  // Return button without Link if no href provided
  if (!href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button className={combinedClasses} onClick={onClick}>
          {children}
        </button>
      </motion.div>
    );
  }

  // Return Link if href provided
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  );
};

export default ButtonRed;
