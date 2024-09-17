import DataDiri from "./dataDiri";

function Kuliah() {
return(
    <div className="w-full  h-full ">
    <div className="w-full flex flex-col gap-4 justify-center">
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
      <div className="">
        <p className="">Melanjutkan kuliah di:</p>
        <input
          type="text"
          className="w-full bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
        ></input>
      </div>
      <div className="">
        <p className="">Alamat:</p>
        <input
          type="number"
          className="w-full bg-transparent border-2 border-white text-black text-lg rounded-lg px-3 focus:outline-none"
        ></input>
      </div>
      <div className="flex w-full gap-5 justify-center mt-5">
          <button className="btn btn-primary w-3/12">Simpan</button>
          <button className="btn btn-error w-3/12">Unduh</button>
          <button className="btn btn-info w-3/12">Preview</button>
          </div>
    </div>
  </div>
)

};

export default Kuliah;