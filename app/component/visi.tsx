import React from "react";
import Tagline from "./button/tagline";
import Judul from "./button/judul";

function Visi() {
  return (
    <div id="about">
      <div className="flex justify-center flex-col items-center">
        <Tagline>Visi & Misi</Tagline>
        <Judul className="my-2 sm:my-4">Visi & Misi Kami</Judul>
      </div>
      <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-4">
        <div className=" animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-full h-full rounded-xl sm:rounded-2xl sm:p-[2px] p-px">
          <div className=" h-full rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4">
            <h3 className="text-secondary sm:text-lg text-base mb-2 text-center">
              Untuk Pencari Kerja
            </h3>
            <p className="text-white text-xs sm:text-base font-light text-justify">
              Menjadi Platform Digital Terbaik bagi para calon tenaga kerja
              industri non skill dan media informasi terbaik untuk peluang karir
              bagi tenaga kerja industri berpengalaman.
            </p>
          </div>
        </div>
        <div className=" animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-full h-full rounded-xl sm:rounded-2xl sm:p-[2px] p-px">
          <div className=" h-full rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4">
            <h3 className="text-secondary sm:text-lg text-base mb-2 text-center">
              Untuk Pencari Kerja
            </h3>
            <ul className="text-white text-xs sm:text-base font-light list-disc pl-5 space-y-1">
              <li>Bekerjasama dengan institusi resmi.</li>
              <li>
                Membangun platform Media, Fasilitasi, dan Informasi secara
                terintegrasi.
              </li>
              <li>Membangun Kerjasama Lanjutan dengan Industri.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visi;
