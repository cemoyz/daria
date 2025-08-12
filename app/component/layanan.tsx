import React from "react";
import Tagline from "./button/tagline";
import Judul from "./button/judul";
import { layananFor } from "../material/item";

function Layanan() {
  return (
    <div id="layanan">
      <div className="flex justify-center flex-col items-center">
        <Tagline>Layanan</Tagline>
        <Judul className="my-2 sm:my-4">Bagaimana DARIA Bekerja?</Judul>
        <p className="text-center text-white px-10">
          DARIA adalah platform digital berbasis Web yang terhubung dengan
          institusi resmi dan forum komunikasi, memfasilitasi kemajuan karier
          serta pemenuhan sumber daya manusia.
        </p>
      </div>

      <div className="relative w-full flex flex-col items-center gap-2 sm:gap-12 mt-10">
        {/* Garis vertikal tengah */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-linear-to-b from-secondary to-secondary/0 transform -translate-x-1/2 z-0" />

        {/* ITEM 1 - KIRI */}
        <div className="relative w-full flex justify-start">
          {/* Garis horizontal dari tengah ke box */}
          <div className="absolute right-1/2 top-1/2 w-1/3 h-px border-t border-dashed border-secondary/90 -translate-y-1/2 z-0" />

          {/* Box Konten */}
          <div className="flex mx my-1 sm:m-0 self-stretch animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-2/5 rounded-xl sm:rounded-2xl sm:p-[2px] p-px relative z-10">
            <div className="rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4 w-full">
              <h3 className="text-secondary sm:text-lg text-base mb-2 text-center font-semibold">
                1. Promosikan Peluang
              </h3>
              <ul className="text-white text-xs sm:text-base font-light list-disc pl-5 space-y-1">
                <li>DARIA mempromosikan peluang pelatihan dan karir</li>
                <li>Dari berbagai industri dan institusi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ITEM 2 - KANAN */}
        <div className="relative w-full flex justify-end">
          <div className="absolute left-1/2 top-1/2 w-1/3 h-px border-t border-dashed border-secondary/70 -translate-y-1/2 z-0" />

          <div className="flex mx my-1 sm:m-0 self-stretch animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-2/5 rounded-xl sm:rounded-2xl sm:p-[2px] p-px relative z-10">
            <div className="rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4 w-full">
              <h3 className="text-secondary sm:text-lg text-base mb-2 text-center font-semibold">
                2. Fasilitasi & Verifikasi
              </h3>
              <ul className="text-white text-xs sm:text-base font-light list-disc pl-5 space-y-1">
                <li>Memfasilitasi pendaftaran</li>
                <li>Melakukan pemilahan dan verifikasi awal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ITEM 3 - KIRI */}
        <div className="relative w-full flex justify-start">
          <div className="absolute right-1/2 top-1/2 w-1/3 h-px border-t border-dashed border-secondary/40 -translate-y-1/2 z-0" />

          <div className="flex mx my-1 sm:m-0 self-stretch animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-2/5 rounded-xl sm:rounded-2xl sm:p-[2px] p-px relative z-10">
            <div className="rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4 w-full">
              <h3 className="text-secondary sm:text-lg text-base mb-2 text-center font-semibold">
                3. Salurkan & Kelola Informasi
              </h3>
              <ul className="text-white text-xs sm:text-base font-light list-disc pl-5 space-y-1">
                <li>Menyalurkan calon peserta lolos verifikasi</li>
                <li>Mengelola informasi karir lanjutan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center flex-col items-center">
          <Judul className="my-2 sm:my-4">Layanan Kami untuk Anda</Judul>
          <p className="text-center text-white px-10">
            DARIA berkomitmen untuk memberikan solusi yang relevan dan efektif
            bagi setiap pihak. Temukan bagaimana kami dapat membantu Anda
            mencapai tujuan Anda, baik sebagai pencari kerja, industri, maupun
            lembaga pelatihan:
          </p>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center">
          {layananFor.map((item, index) => (
            <div
              key={index}
              className="flex sm:basis-1/2 mx-14 my-1 sm:m-0 self-stretch animate-rotate-border bg-conic/[from_var(--border-angle)] from-primary via-secondary to-primary from-70% via-70% to-100% w-full rounded-xl sm:rounded-2xl sm:p-[2px] p-px"
            >
              <div className="rounded-xl sm:rounded-2xl bg-primary p-2 sm:p-4">
                <h3 className="text-secondary sm:text-lg text-base mb-2 text-center">
                  {item.title}
                </h3>
                <ul className="text-white text-xs sm:text-base font-light list-disc pl-5 space-y-1">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layanan;
