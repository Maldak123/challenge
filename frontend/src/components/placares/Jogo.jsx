import React from "react";

function Jogo({ jogo, onClick }) {
  return (
    <div
      className="flex h-16 w-full max-w-[300px] min-w-[235px] cursor-pointer gap-2 rounded-lg border border-[rgba(0,0,0,0.25)] p-2.5"
      onClick={() => onClick(jogo)}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <img
              src={jogo.time1.img}
              alt={jogo.time1.nome}
              className="size-5"
            />
            <p className="font-bold">{jogo.time1.nome}</p>
          </div>
          <p className="font-bold">{jogo.time1.placar}</p>
        </div>
        <div className="flex w-full justify-between text-sm">
          <div className="flex items-center gap-1">
            <img
              src={jogo.time2.img}
              alt={jogo.time2.nome}
              className="size-5"
            />
            <p className="font-bold">{jogo.time2.nome}</p>
          </div>
          <p className="font-bold">{jogo.time2.placar}</p>
        </div>
      </div>
      <span className="h-full border-l border-[rgba(0,0,0,0.25)]"></span>
      <div className="flex w-fit flex-col items-center justify-center">
        <p className="text-[12px] font-bold">{jogo.data}</p>
        <p className="text-[12px]">{jogo.status}</p>
      </div>
    </div>
  );
}

export default Jogo;
