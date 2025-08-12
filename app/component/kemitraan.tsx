import React from "react";
import Tagline from "./button/tagline";
import Judul from "./button/judul";
import Image from "next/image";

function Kemitraan() {
  return (
    <div id="kemitraan">
      <div className="flex justify-center flex-col items-center">
        <Tagline>Mitra</Tagline>
        <Judul className="my-2 sm:my-4">Mitra Kami yang Berharga</Judul>
        <p className="text-center text-white px-10">
          DARIA berkolaborasi dengan institusi resmi untuk memastikan kualitas
          dan kepercayaan dalam pengembangan dan penempatan sumber daya manusia.
        </p>
      </div>
      <div className="flex justify-center mt-2 sm:mt-4">
        <div className="w-32 sm:w-40 h-20 sm:h-28 border sm:border-2 border-secondary rounded-xl sm:rounded-2xl bg-white overflow-hidden relative">
          <Image
            src={"/lpk.png"}
            fill
            alt="LPK BJS"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Kemitraan;
