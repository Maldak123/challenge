import { useState, useEffect } from "react";

import Avatar from "../assets/navbar/avatar.png";
import MenuImg from "../assets/navbar/menu.png";
import Fechar from "../assets/navbar/fechar.png";
import Sun from "../assets/navbar/sun.png";
import Logo from "../assets/logoPb.png";

function Navbar() {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (ativo) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [ativo]);

  return (
    <header className="fixed w-screen h-16 bg-[#981FBA] flex justify-between py-2.5 px-6 z-999">
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

      <span
        className={`
          absolute inset-0 bg-black bg-opacity-100 h-dvh
          transition-opacity duration-300 ease-in-out
          ${ativo ? "opacity-50" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => {
          setAtivo(!ativo);
        }}
      ></span>
      <div
        className={`
          absolute top-0 right-0 h-dvh w-2/3 bg-[#981FBA]
          p-6 flex flex-col justify-between items-end
          transition-transform duration-300 ease-in-out
          ${ativo ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <img
          src={Fechar}
          className="w-6 h-6"
          onClick={() => {
            setAtivo(!ativo);
          }}
        />

        <nav className="w-full">
          <ul className="w-full flex flex-col gap-3.5 uppercase text-left text-white font-bold text-2xl">
            <li>próximos encontros</li>
            <li>Placares e noticias</li>
            <li>sobre</li>
          </ul>
        </nav>

        <img src={Sun} alt="Toggle Dark Mode" className="w-6 h-6" />
      </div>
    </header>
  );
}

export default Navbar;
