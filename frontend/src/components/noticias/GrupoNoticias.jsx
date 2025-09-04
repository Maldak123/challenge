// src/components/noticias/GrupoNoticias.jsx

import Noticia from "./Noticia";

import Imagem from "../../assets/noticias/santos.webp";
import Favicon from "../../assets/noticias/favicon.png";

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

  // Pega as 4 primeiras notícias para preencher o grid
  const [noticia1, noticia2, noticia3] = dados.noticias;

  return (
    // DOCUMENTAÇÃO DO LAYOUT:
    // - Padrão (mobile/tablet): 'flex flex-col' para empilhar as notícias verticalmente.
    // - Telas grandes ('lg'): Ativa o grid exato que você especificou.
    //   - 'lg:grid-cols-3': Cria 3 colunas.
    //   - 'lg:grid-rows-2': Cria 2 linhas.
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">

      {/* div1: grid-area: 1 / 1 / 2 / 3; */}
      {/* Ocupa as duas primeiras colunas da primeira linha. */}
      <div className="lg:col-span-4 h-fit">
        <Noticia
          key={noticia1.id}
          {...noticia1}
          img={noticia1.imagemUrl}
          tempo={noticia1.tempoPublicacao}
        />
      </div>

      {/* div2: grid-area: 2 / 1 / 3 / 2; */}
      {/* Ocupa a primeira coluna da segunda linha. */}
      <div className="lg:col-span-2">
        <Noticia
          key={noticia2.id}
          {...noticia2}
          img={noticia2.imagemUrl}
          tempo={noticia2.tempoPublicacao}
        />
      </div>

      {/* div3: grid-area: 2 / 2 / 3 / 3; */}
      {/* Ocupa a segunda coluna da segunda linha. */}
      <div className="lg:col-span-2">
        <Noticia
          key={noticia3.id}
          {...noticia3}
          img={noticia3.imagemUrl}
          tempo={noticia3.tempoPublicacao}
        />
      </div>
    </div>
  );
}

export default GrupoNoticias;