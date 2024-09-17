"use client"
import React from "react";
import DataDiri from "./dataDiri";
import Bekerja from "./bekerja";
import Wirausaha from "./wirausaha";
import Kuliah from "./kuliah";
import { useState } from "react";

function form() {
  const [formPerkerjaan, setFormPerkerjaan] = useState(Bekerja);
  const formBekerja = () => {
    setFormPerkerjaan(Bekerja);
  };
  const formWirausaha = () => {
    setFormPerkerjaan(Wirausaha);
  };
  const formKuliah = () => {
    setFormPerkerjaan(Kuliah);
  };

  return (
    <main id="generate" className=" min-h-screen flex justify-center ">
      <form className="w-[85%] mb-20 my-8 rounded-lg py-5 px-8 text-[#059212] bg-slate-200 shadow-xl">
        <div className="flex flex-col items-start">
          <div className="mb-6 mt-5 text-2xl justify-between items-center flex font-bold w-full h-max pb-10 border-b-2 border-white ">
            <h1>PENELUSURAN TAMATAN/ALUMNI</h1>
            <div className="flex w-max gap-4">
              
                <button onClick={formBekerja} className="btn btn-primary" type="button">Bekerja</button>
                <button onClick={formWirausaha} className="btn btn-primary" type="button">Wirausaha</button>
                <button onClick={formKuliah} className="btn btn-primary" type="button">Kuliah</button>
            </div>
          </div>
          <div className="flex flex-wrap h-max gap-3 justify-start w-full">
            <div className=" h-max w-full px-7">
              

              <div className="flex w-full">
                {formPerkerjaan}
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default form;
