import React from "react";
import Fechar from "../../assets/navbar/fechar.png";
import CopaAmericaIcon from "../../assets/placares/copa-america.png";

function Modal({ active, jogo, onClose }) {
  if (!jogo) {
    return null;
  }

  console.log(jogo)

  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } bg-[rgba(0,0,0,0.5)] h-screen w-screen justify-center items-center fixed inset-0 z-[999] p-4`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-4 flex flex-col gap-4 w-full max-w-sm relative shadow-lg">
        <img
          src={Fechar}
          className="w-6 h-6 cursor-pointer absolute top-3 right-3"
          onClick={onClose}
          alt="Fechar modal"
        />

        <div className="flex items-center gap-3 mt-2">
          <img src={CopaAmericaIcon} alt={jogo.competition} className="w-8 h-8" />
          <div>
            <h2 className="font-bold text-base">{jogo.competition}</h2>
            <p className="text-sm text-gray-500">{jogo.stage}</p>
          </div>
        </div>

        <div className="flex justify-around items-start text-center">
          <div className="flex flex-col items-center gap-2 w-2/5">
            <img src={jogo.time1.img} alt={jogo.time1.nome} className="w-16 h-12 object-contain" />
            <p className="font-bold text-base">{jogo.time1.nome}</p>
          </div>
          <div className="flex flex-col items-center gap-2 w-2/5">
            <img src={jogo.time2.img} alt={jogo.time2.nome} className="w-16 h-12 object-contain" />
            <p className="font-bold text-base">{jogo.time2.nome}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 -mt-2">
          <p className={`font-bold text-5xl ${jogo.time1.placar >= jogo.time2.placar ? 'text-[#6EAA38]' : 'text-[#BA1B31]'}`}>{jogo.time1.placar}</p>
          <div className="flex flex-col items-center text-xs text-gray-500">
            {jogo.penalty_score && <p>Pênaltis: {jogo.penalty_score}</p>}
            <span className="text-xl font-bold text-gray-400">X</span>
          </div>
          <p className={`font-bold text-5xl ${jogo.time2.placar >= jogo.time1.placar ? 'text-[#6EAA38]' : 'text-[#BA1B31]'}`}>{jogo.time2.placar}</p>
        </div>

        <div className="flex justify-between w-full mt-2 text-xs text-gray-700 min-h-[60px]">
          <div className="flex flex-col items-start gap-1 w-1/2 pr-2">
            {jogo.time1.scorers.map((scorer, index) => (
              <p key={index}>{scorer}</p>
            ))}
          </div>
          <div className="flex flex-col items-end gap-1 w-1/2 pl-2 text-right">
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