import React from "react";

export default function dataDiri() {
  return (
    <main>
      <div className="flex flex-col pb-10 border-b-2 border-white ">
        <div className="w-2/5">
          <h1 className="text-2xl font-semibold my-4">Data diri</h1>
        </div>
        <div className="w-full flex flex-wrap gap-4">
          <div className="">
            <p className="">Nama</p>
            <input
              type="text"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">NIK</p>
            <input
              type="number"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Tempat Lahir</p>
            <input
              type="text"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Tanggal Lahir</p>
            <input
              type="date"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Tamat Thn./Jurusan</p>
            <input
              type="text"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Alamat Tinggal</p>
            <input
              type="text"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Nomer Tlpn</p>
            <input
              type="number"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Email</p>
            <input
              type="email"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <p className="">Nama akun</p>
            <input
              type="text"
              className="w-80 bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
            ></input>
          </div>
        </div>
      </div>
    </main>
  );
}
