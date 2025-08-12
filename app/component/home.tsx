import React from "react";
import Header from "./header";
import Image from "next/image";
import Button from "./button/button-danger";

function Home() {
  return (
    <div className="flex justify-center flex-col items-center" id="home">
      <Header></Header>
      <div className="relative flex justify-center items-center flex-col w-full max-w-lg">
        <Image
          src={"/circle-partikel.png"}
          alt=""
          width={700}
          height={700}
          className="w-[800px] animate-spin relative mt-16"
        />
        <Image
          src={"/particle.png"}
          alt="Logo Daria ID"
          width={700}
          height={700}
          className="w-[340px] sm:w-[435px] absolute mt-16"
        />
        <div className="absolute flex flex-col items-center justify-center w-full">
          <Image
            src={"/logo-daria.png"}
            alt="logo daria"
            width={700}
            height={700}
            className="sm:w-[150px] w-[100px]"
          />
          <h1 className="sm:text-xl text-base font-bold text-secondary my-2 sm:my-4">
            INFORMASI-FASILITASI-PELUANG KARIR
          </h1>
          <Button href="#about">About US</Button>
          <div className="text-white mt-4 text-xs sm:text-base font-extralight sm:font-light">
            POWERED BY: MOSTECH INDONESIA
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
