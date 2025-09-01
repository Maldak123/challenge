import { useState, useEffect } from "react";

import Avatar from "../assets/navbar/avatar.png";
import MenuImg from "../assets/navbar/menu.png";
import Fechar from "../assets/navbar/fechar.png";
import Sun from "../assets/navbar/sun.png";
import Logo from "../assets/navbar/navbar-logo.png";

function Navbar() {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (ativo) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ativo]);

  return (
    <header className="fixed z-999 flex h-16 w-screen justify-between bg-[#981FBA] px-6 py-2.5 lg:h-20">
      <div className="flex gap-1">
        <img src={Logo} alt="Logo do Passa a Bola" className="h-11 lg:h-15" />
      </div>

      <div className="flex items-center gap-2.5">
        <button className="cursor-pointer">
          <img src={Avatar} alt="Profile icon" className="size-6 lg:size-10" />
        </button>

        <button className="cursor-pointer">
          <img
            src={MenuImg}
            alt="Menu"
            className="size-6 lg:size-10"
            onClick={() => {
              setAtivo(!ativo);
            }}
          />
        </button>
      </div>

      <span
        className={`bg-opacity-100 absolute inset-0 h-dvh bg-black transition-opacity duration-300 ease-in-out ${ativo ? "opacity-50" : "pointer-events-none opacity-0"} `}
        onClick={() => {
          setAtivo(!ativo);
        }}
      ></span>

      <div
        className={`absolute top-0 right-0 flex h-dvh w-2/3 flex-col items-end justify-between bg-[#981FBA] p-6 transition-transform duration-300 ease-in-out lg:w-1/4 ${ativo ? "translate-x-0" : "translate-x-full"} `}
      >
        <img
          src={Fechar}
          className="h-6 w-6"
          onClick={() => {
            setAtivo(!ativo);
          }}
        />

        <nav className="max-w-[99%] self-start">
          <ul className="flex w-full flex-col gap-3.5 text-left text-2xl font-bold text-white uppercase">
            <li>próximos encontros</li>
            <li>Placares e noticias</li>
            <li>sobre</li>
          </ul>
        </nav>

        <img src={Sun} alt="Toggle Dark Mode" className="h-6 w-6" />
      </div>
    </header>
  );
}

export default Navbar;
