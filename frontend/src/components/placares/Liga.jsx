import { useState, useEffect } from "react";
import LigaHeader from "./LigaHeader";
import Jogo from "./Jogo";
import Modal from "./Modal";

const BACKEND_URL = "http://localhost:5000/";

function Liga() {
  const [modalActive, setModalActive] = useState(false);
  const [jogoSelecionado, setJogoSelecionado] = useState(null);
  const [ligasExibidas, setLigasExibidas] = useState([]);

  useEffect(() => {
    const fetchLigas = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}ligas`);
        const data = await response.json();
        setLigasExibidas(data);
        console.log(data)
      } catch (error) {
        console.error("Erro ao buscar dados das ligas:", error.message);
      }
    };

    fetchLigas();
  }, []);

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
      {ligasExibidas.length === 0 ? (
        <p>Nenhuma liga disponível no momento.</p>
      ) : (
        ligasExibidas.map((liga, index) => (
          <div key={index} className="flex w-full flex-col gap-2.5">
            <LigaHeader info={liga.info} />
            <div
              className="flex w-full gap-3 overflow-x-auto p-1"
              tabIndex="0"
              aria-label={`Lista de jogos da liga ${liga.nome}`}
            >
              {(liga.jogosFuturos.length > 0
                ? liga.jogosFuturos
                : liga.jogosPassados
              ).map((jogo, index) => (
                <Jogo
                  key={index}
                  jogo={{
                    time1: {
                      nome: jogo.strHomeTeam,
                      placar: jogo.intHomeScore || "-",
                      img: jogo.strHomeTeamBadge,
                    },
                    time2: {
                      nome: jogo.strAwayTeam,
                      placar: jogo.intAwayScore || "-",
                      img: jogo.strAwayTeamBadge,
                    },
                    competition: jogo.strLeague,
                    stage: jogo.strStage,
                    data: jogo.dateEvent,
                    status: jogo.strStatus,
                  }}
                  onClick={handleJogoClick}
                />
              ))}
            </div>
          </div>
        ))
      )}
      <Modal
        active={modalActive}
        jogo={jogoSelecionado}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Liga;
