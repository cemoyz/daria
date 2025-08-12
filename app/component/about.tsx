import React from "react";
import Tagline from "./button/tagline";
import Judul from "./button/judul";
import { about } from "../material/item";

function About() {
  return (
    <div id="about">
      <div className="flex justify-center flex-col items-center">
        <Tagline>Tentang Kami</Tagline>
        <Judul className="my-2 sm:my-4">Mengapa Memilih DARIA?</Judul>
        <p className="text-center text-white px-10">
          DARIA hadir sebagai solusi terintegrasi untuk menghubungkan calon
          tenaga kerja dengan peluang terbaik.
        </p>
      </div>
      <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-4">
        {about.map((item, index) => (
          <div
            key={index}
            className=" animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-full h-full rounded-xl sm:rounded-2xl sm:p-[2px] p-px"
          >
            <div className=" h-full rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4">
              <h3 className="text-secondary sm:text-lg text-base mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-white text-xs sm:text-base font-light text-justify">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
