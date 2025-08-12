"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navigation, navigationSm } from "../material/item";
import { AnimatePresence, motion } from "motion/react";
import { IoClose, IoMenu } from "react-icons/io5";

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isnavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.replace("#", ""));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 60 && rect.bottom >= 60;
      });
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex relative justify-center w-full z-50">
      {/* mobile navigation */}
      <div className="flex sm:hidden w-80 mx-5 fixed flex-col top-2 items-center">
        <div
          className={`flex justify-between w-full bg-white px-4 py-2 items-center -mb-1 ${
            isnavOpen ? "rounded-t-2xl" : "rounded-full"
          } shadow-md`}
        >
          <Link href="#home" className="">
            <Image
              src="/logo-nav.png"
              alt="Logo Daria ID"
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </Link>
          <AnimatePresence>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setNavOpen(!isnavOpen)}
              className="text-xl text-merah"
            >
              {isnavOpen ? <IoClose /> : <IoMenu />}
            </motion.button>
          </AnimatePresence>
        </div>
        <AnimatePresence initial={false}>
          {isnavOpen && (
            <motion.div
              initial={{ opacity: 0.5, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              className="flex gap-1.5 items-center justify-center flex-col w-full text-center p-4 bg-white rounded-b-2xl"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -0.009, x: 200 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -200, x: 0 }}
                  transition={{ delay: index * 0.08 }} // Delay tiap item
                  className={`text-sm font-medium transition-colors hover:text-merah hover:bg-merah/5 active:text-merah active:bg-merah/15 rounded-lg w-full ${
                    activeSection === item.href
                      ? "text-merah bg-merah/15 font-semibold rounded-lg hover:bg-merah/15"
                      : "text-gray-700"
                  }`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden sm:flex bg-white py-2 fixed top-2 items-center gap-x-4 px-4 shadow-md rounded-full">
        <Link href="#home" className="">
          <Image
            src="/logo-nav.png"
            alt="Logo Daria ID"
            width={100}
            height={100}
            className="w-4 h-4 sm:w-8 sm:h-8"
          />
        </Link>
        <div className="flex gap-x-4 items-center justify-center pl-10">
          {navigationSm.map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNavOpen(!isnavOpen)}
              key={item.name}
            >
              <Link
                className={`text-sm font-medium transition-colors hover:text-merah ${
                  activeSection === item.href
                    ? "text-merah font-semibold"
                    : "text-primary"
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setNavOpen(!isnavOpen)}
        >
          <Link
            className={`text-sm font-medium transition-colors bg-merah text-white py-1 px-2 rounded-full hover:bg-primary hover:text-merah
            }`}
            href="#contact"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
