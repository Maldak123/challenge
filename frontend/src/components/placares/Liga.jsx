import { useState } from "react";
import LigaHeader from "./LigaHeader";
import Jogo from "./Jogo";
import Modal from "./Modal";

import Brasil from "../../assets/placares/brasil.png";
import Colombia from "../../assets/placares/colombia.png";

function Liga() {
  const [modalActive, setModalActive] = useState(false);
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  const jogos = [
    {
      id: 1,
      competition: "Copa América Feminina",
      stage: "Final",
      time1: {
        nome: "Brasil",
        placar: 4,
        img: Brasil,
        scorers: [
          "Angelina 45+9' (P)",
          "Amanda Gutierres 80'",
          "Marta 90+6', 105'",
        ],
      },
      time2: {
        nome: "Colômbia",
        placar: 4,
        img: Colombia,
        scorers: [
          "Linda Caicedo 25'",
          "Taciane 69' (GC)",
          "Mayra Ramírez 88'",
          "Leicy Santos 115'",
        ],
      },
      penalty_score: "5-4",
      data: "02/08/2025",
      status: "Fim de jogo",
    },
    {
      id: 2,
      competition: "Copa América Feminina",
      stage: "Final",
      time1: {
        nome: "Brasil",
        placar: 2,
        img: Brasil,
        scorers: [],
      },
      time2: {
        nome: "Colômbia",
        placar: 1,
        img: Colombia,
        scorers: [],
      },
      penalty_score: null,
      data: "05/08/2025",
      status: "Fim de jogo",
    },
  ];

  const handleJogoClick = (jogo) => {
    setJogoSelecionado(jogo);
    setModalActive(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalActive(false);
    setJogoSelecionado(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex w-full flex-col gap-2.5">
        <LigaHeader />
        <div
        className="flex w-full gap-3 overflow-x-auto p-1"
        tabIndex="0"
        aria-label="Lista de jogos"
      >
          {jogos.map((jogo, index) => (
            <Jogo key={index} jogo={jogo} onClick={handleJogoClick} />
          ))}
        </div>
      </div>
      <Modal
        active={modalActive}
        jogo={jogoSelecionado}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Liga;
