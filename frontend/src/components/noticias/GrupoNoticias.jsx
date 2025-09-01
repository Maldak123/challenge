import Noticia from "./Noticia";

import Imagem from "../../assets/noticias/santos.webp"
import Favicon from "../../assets/noticias/favicon.png"

function GrupoNoticias() {
  const dados = {
    noticias: [
      {
        id: 1,
        fonte: {
          nome: "Antenados no Futebol",
          logoUrl: Favicon,
        },
        titulo: "Com título do Santos, Brasileirão Feminino A2 se encerra com acesso de Botafogo, Atlético-MG e Fortaleza",
        resumo: "Santos e Botafogo se enfrentaram na Vila Belmiro na tarde deste sábado (30), com a equipe santista ficando com a taça após empate de 1 a 1.",
        tempoPublicacao: "1 dia atrás",
        imagemUrl: Imagem,
      },
      {
        id: 2,
        fonte: {
          nome: "Antenados no Futebol",
          logoUrl: Favicon,
        },
        titulo: "Com título do Santos, Brasileirão Feminino A2 se encerra com acesso de Botafogo, Atlético-MG e Fortaleza",
        resumo: "Santos e Botafogo se enfrentaram na Vila Belmiro na tarde deste sábado (30), com a equipe santista ficando com a taça após empate de 1 a 1.",
        tempoPublicacao: "1 dia atrás",
        imagemUrl: Imagem,
      },
      {
        id: 3,
        fonte: {
          nome: "Antenados no Futebol",
          logoUrl: Favicon,
        },
        titulo: "Com título do Santos, Brasileirão Feminino A2 se encerra com acesso de Botafogo, Atlético-MG e Fortaleza",
        resumo: "Santos e Botafogo se enfrentaram na Vila Belmiro na tarde deste sábado (30), com a equipe santista ficando com a taça após empate de 1 a 1.",
        tempoPublicacao: "1 dia atrás",
        imagemUrl: Imagem,
      },
    ],
  };

  return (
    <div className="flex flex-wrap gap-2.5 relative">
      {dados.noticias.map((e) =>
        (<Noticia
          key={e.id}
          titulo={e.titulo}
          resumo={e.resumo}
          fonte={e.fonte}
          tempo={e.tempoPublicacao}
          img={e.imagemUrl}
        ></Noticia>)
      )}
    </div>
  );
}

export default GrupoNoticias;
