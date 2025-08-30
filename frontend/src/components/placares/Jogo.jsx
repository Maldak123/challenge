import React from "react";

function Jogo({ jogo, onClick }) {
  return (
    <div className="p-2.5 flex gap-2 min-w-[235px] max-w-[300px] w-full h-16 border rounded-lg border-[rgba(0,0,0,0.25)] cursor-pointer" onClick={() => onClick(jogo)}>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex justify-between text-sm">
          <div className="flex gap-1 items-center">
            <img src={jogo.time1.img} alt={jogo.time1.nome} className="size-5" />
            <p className="font-bold">{jogo.time1.nome}</p>
          </div>
          <p className="font-bold">{jogo.time1.placar}</p>
        </div>
        <div className="flex justify-between w-full text-sm">
          <div className="flex gap-1 items-center">
            <img src={jogo.time2.img} alt={jogo.time2.nome} className="size-5" />
            <p className="font-bold">{jogo.time2.nome}</p>
          </div>
          <p className="font-bold">{jogo.time2.placar}</p>
        </div>
      </div>
      <span className="h-full border-l border-[rgba(0,0,0,0.25)]"></span>
      <div className="flex flex-col justify-center items-center w-fit">
        <p className="font-bold text-[12px]">{jogo.data}</p>
        <p className="text-[12px]">{jogo.status}</p>
      </div>
    </div>
  );
}

export default Jogo;
