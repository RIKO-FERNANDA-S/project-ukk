'use client';
import React from "react";
import logo from '../../../public/icon.png';
import Image from "next/image";


export default function navbar() {
  return (
    <main className=" sticky w-full z-10">
      <div className="navbar flex  px-11 mt-4">
        <div>
        <Image src={logo} alt="logo" className="w-24"></Image>
        </div>
      </div>
    </main>
  );
}
