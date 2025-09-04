import React from "react";
import Fechar from "../../assets/navbar/fechar.png";
import CopaAmericaIcon from "../../assets/placares/copa-america.png";

function Modal({ active, jogo, onClose }) {
  if (!jogo) {
    return null;
  }

  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } fixed inset-0 z-[999] h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)] p-4`}
      onClick={onClose}
    >
      <div className="relative flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-4 shadow-lg lg:max-w-lg lg:gap-6 lg:p-6">
        <button onClick={onClose}>
          <img
            src={Fechar}
            className="absolute top-3 right-3 h-6 w-6 cursor-pointer lg:top-4 lg:right-4 lg:h-7 lg:w-7"
            alt="Fechar modal"
          />
        </button>

        <div className="mt-2 flex items-center gap-3 lg:gap-4">
          <img
            src={CopaAmericaIcon}
            alt={jogo.competition}
            className="h-8 w-8 lg:h-12 lg:w-12"
          />
          <div>
            <h5 className="text-base font-bold lg:text-xl">
              {jogo.competition}
            </h5>
            <p className="text-sm text-gray-500 lg:text-base">{jogo.stage}</p>
          </div>
        </div>

        <div className="flex items-start justify-around text-center">
          <div className="flex w-2/5 flex-col items-center gap-2">
            <img
              src={jogo.time1.img}
              alt={jogo.time1.nome}
              className="h-12 w-16 object-contain lg:h-16 lg:w-20"
            />
            <p className="text-base font-bold lg:text-lg">{jogo.time1.nome}</p>
          </div>
          <div className="flex w-2/5 flex-col items-center gap-2">
            <img
              src={jogo.time2.img}
              alt={jogo.time2.nome}
              className="h-12 w-16 object-contain lg:h-16 lg:w-20"
            />
            <p className="text-base font-bold lg:text-lg">{jogo.time2.nome}</p>
          </div>
        </div>

        <div className="-mt-2 flex items-center justify-center gap-4">
          <p
            className={`text-5xl font-bold ${jogo.time1.placar >= jogo.time2.placar ? "text-[#6EAA38]" : "text-[#BA1B31]"} lg:text-6xl`}
          >
            {jogo.time1.placar}
          </p>
          <div className="flex flex-col items-center text-xs text-gray-500 lg:text-sm">
            {jogo.penalty_score && <p>Pênaltis: {jogo.penalty_score}</p>}
            <span className="text-xl font-bold text-gray-400 lg:text-2xl">
              X
            </span>
          </div>
          <p
            className={`text-5xl font-bold ${jogo.time2.placar >= jogo.time1.placar ? "text-[#6EAA38]" : "text-[#BA1B31]"} lg:text-6xl`}
          >
            {jogo.time2.placar}
          </p>
        </div>

        <div className="mt-2 flex min-h-[60px] w-full justify-between text-xs text-gray-700 lg:min-h-[80px] lg:text-sm">
          <div className="flex w-1/2 flex-col items-start gap-1 pr-2">
            {jogo.time1.scorers.map((scorer, index) => (
              <p key={index}>{scorer}</p>
            ))}
          </div>
          <div className="flex w-1/2 flex-col items-end gap-1 pl-2 text-right">
            {jogo.time2.scorers.map((scorer, index) => (
              <p key={index}>{scorer}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
