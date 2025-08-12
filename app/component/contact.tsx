"use client";
import React from "react";
import Tagline from "./button/tagline";
import Judul from "./button/judul";
import ButtonRed from "./button/button-danger";

function Contact() {
  return (
    <div id="contact">
      <div className="flex justify-center flex-col items-center">
        <Tagline>Hubungi Kami</Tagline>
        <Judul className="my-2 sm:my-4 text-center">
          Siap Memajukan Karier Anda atau Menemukan Talenta yang Tepat?
        </Judul>
        <p className="text-center text-white px-10">
          Hubungi kami hari ini untuk memulai perjalanan Anda bersama DARIA.
        </p>
        <ButtonRed
          onClick={() => window.open("https://lpk.daria.id/register", "_blank")}
          className="my-4 sm:my-6 "
        >
          Daftar
        </ButtonRed>
      </div>
    </div>
  );
}

export default Contact;
