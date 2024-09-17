'use client';
import React from "react";
import Image from "next/image";
import img from "../../../public/img/hero.svg";


export default function hero() {


  return (
    <main>
      <div className="w-full min-h-screen">
        <div className="flex items-center px-8 justify-between lg:flex-row-reverse  text-[#059212]">
          <div className="mb-14  flex w-2/5 h-full justify-start items-center">
          <Image src={img} alt="" className="w-full" />
          </div>
          <div className="pr-20 w-1/2">
            <h1 className="text-5xl font-bold">Generate Form PDF</h1>
            <h1 className="text-4xl font-bold">Darma Siswa 1 Sidoarjo</h1>
            <p className=" pb-4 pt-6 roboto.classname">
              Mempermudah anda untuk mengenerate PDF formulir BKK (Bursa Kerja
              Khusus), dan dapat mempercepat pembuatan formulir
            </p>
            <button className="btn bg-[#059212] text-[#F3FF90] hover:text-[#059212] hover:bg-[#9BEC00]">Mulai Generate</button>
          </div>
        </div>
      </div>
    </main>
  );
}
