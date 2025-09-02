import React from "react";

function Jogo({ jogo, onClick }) {
  return (
    <div
      className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-[rgba(0,0,0,0.25)] p-2.5"
      onClick={() => onClick(jogo)}
    >
      <div className="flex w-max flex-col gap-1">
        {/* Time 1 */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <img
              src={jogo.time1.img}
              alt={jogo.time1.nome}
              className="size-5"
            />
            <p className="text-sm font-bold">{jogo.time1.nome}</p>
          </div>
          <p className="text-sm font-bold">{jogo.time1.placar}</p>
        </div>

        {/* Time 2 */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <img
              src={jogo.time2.img}
              alt={jogo.time2.nome}
              className="size-5"
            />
            <p className="text-sm font-bold">{jogo.time2.nome}</p>
          </div>
          <p className="text-sm font-bold">{jogo.time2.placar}</p>
        </div>
      </div>

      <span className="h-10 self-center border-l border-[rgba(0,0,0,0.25)]"></span>

      {/* Data e Status */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-[12px] font-bold whitespace-nowrap">{jogo.data}</p>
        <p className="text-[12px] whitespace-nowrap">{jogo.status}</p>
      </div>
    </div>
  );
}

export default Jogo;
