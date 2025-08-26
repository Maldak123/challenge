import { useState } from "react";

import Avatar from "../assets/avatar.png";
import Logo from "../assets/logoPb.png";
import MenuImg from "../assets/menu.png";
import Fechar from "../assets/fechar.png";
import Sun from "../assets/sun.png"

function Navbar() {
  const [ativo, setAtivo] = useState(false);

  return (
    <header className="w-full h-16 bg-[#981FBA] flex justify-between py-2.5 px-4">
      <div className="flex gap-1">
        <img src={Logo} alt="Logo do Passa a Bola" className="w-11 h-11" />
        <p className="font-[Anton] text-white text-xl/[1.19]">
          PASSA <br /> A BOLA
        </p>
      </div>
      <div className="flex gap-2.5 items-center">
        <img src={Avatar} alt="Profile icon" className="w-6 h-6" />
        <img
          src={MenuImg}
          alt="Menu"
          className="w-6 h-6"
          onClick={() => {
            setAtivo(!ativo);
          }}
        />
      </div>

      <span className={`${ativo ? "block" : "hidden"} top-0 left-0 w-full h-dvh bg-black fixed opacity-50`} onClick={() => {
            setAtivo(!ativo);
          }}></span>
      <div className={`
          fixed top-0 right-0 h-dvh w-2/3 bg-[#981FBA]
          p-6 flex flex-col justify-between items-end
          transition-transform duration-300 ease-in-out
          ${ativo ? 'translate-x-0' : 'translate-x-full'}
        `}>
        <img
          src={Fechar}
          className="w-6 h-6"
          onClick={() => {
            setAtivo(!ativo);
          }}
        />

        <nav className="w-full">
          <ul className="w-full flex flex-col gap-3.5 uppercase text-left text-white font-bold text-2xl">
            <li>campeonatos</li>
            <li>Placares de jogos</li>
            <li>notícias</li>
          </ul>
        </nav>

        <img src={Sun} alt="Toggle Dark Mode" className="w-6 h-6" />
      </div>
    </header>
  );
}

export default Navbar;
