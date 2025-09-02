import Banner from "../components/Banner";
import Encontro from "../components/Encontro";
import Liga from "../components/placares/Liga";
import GrupoNoticias from "../components/noticias/GrupoNoticias";

import HeroBg from "../assets/hero/hero.png";
import Logo from "../assets/logoPb.png";
import BannerVerm from "../assets/sections/faixa-verm.png";
import BannerVerde from "../assets/sections/faixa-verde.png";
import BannerVerdeDesk from "../assets/sections/faixa-verde-desktop.png";
import BannerRoxa from "../assets/sections/faixa-roxa.png";
import FaixaVerm from "../assets/sections/banner-verm.png";
import PointVerm from "../assets/point.png";

function Home() {
  return (
    <main className="relative py-16 flex flex-col items-center">
      {/* Hero Section - Já está correta, sempre full-width */}
      <section className="relative h-[85lvh] w-full">
        <div className="absolute -z-999 flex h-full w-full justify-center overflow-hidden">
          <img
            src={HeroBg}
            alt=""
            className="pointer-events-none h-full w-full object-cover select-none"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-between p-6">
          <div className="w-full font-[Anton] text-4xl text-white">
            <h1>
              A <br />
              <span className="text-8xl text-[#981FBA] lg:text-9xl"> CASA </span>
              <br />
              DO FUTEBOL FEMININO
            </h1>
          </div>
          <img
            src={Logo}
            alt="Logo do Passa a Bola"
            className="h-15 w-15 opacity-70"
          />
        </div>
      </section>

      {/* Container principal para o resto do conteúdo */}
      <div className="w-full flex flex-col items-center gap-4">
        {/* Seção Próximos Encontros */}
        <section className="relative -top-4 h-fit w-full">
          <Banner
            img={BannerVerm}
            cor={"#BA1B31"}
            txt={"próximos encontros"}
          />
          {/* Container de conteúdo para esta seção */}
          <div className="w-full lg:max-w-[80%] mx-auto mt-2 flex flex-col items-center gap-2 p-6">

            <div className="relative w-full -rotate-[3.17deg] p-2 text-center md:max-w-1/2">
              <span className="absolute inset-0 h-full w-full bg-[#BA1B31]"></span>

              <h3 className="relative font-bold text-white uppercase">
                Jogue com a gente! <br /> Gratuito e para todas.
              </h3>
            </div>

            <div className="relative mt-4 flex w-full">
              <div className="flex gap-3 overflow-x-auto scroll-smooth p-4">
                <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm} />
                <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm} />
                <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm} />
                <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm} />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <div className="flex max-w-1/2 flex-col gap-1 opacity-50">
                <p className="w-full text-left text-xs">*Vagas limitadas.</p>
                <p className="w-full text-left text-xs">*As inscrições podem encerrar antes do prazo.</p>
              </div>

              <div className="flex h-fit items-center gap-1">
                <p className="text-[#BA1B31] hover:underline">Ver tudo</p>
                <img className="h-6 w-6" src={PointVerm} alt="" />
              </div>
            </div>

          </div>
        </section>

        {/* Seção Placares e Notícias - AQUI ESTAVA O PROBLEMA */}
        <section className="h-fit w-full">
          <Banner
            img={window.screen.width <= 1024 ? BannerVerde : BannerVerdeDesk}
            cor={"#6EAA38"}
            txt={"placares e notícias"}
          />
          {/* 👇 ESTE É O CONTAINER DE CONTEÚDO CORRIGIDO */}
          <div className="w-full lg:max-w-[80%] mx-auto mt-2 flex flex-col items-center gap-6 p-6">

            <div className="relative w-full -rotate-[3.17deg] p-2 text-center md:max-w-1/2">
              <span className="absolute inset-0 h-full w-full bg-[#6EAA38]"></span>
              
              <h3 className="relative font-bold text-white uppercase">
                fique ligada em tudo que tá rolando por ai!
              </h3>
            </div>

            {/* O conteúdo das notícias agora está dentro do container principal */}
            <div className="w-full flex flex-col items-center gap-2.5">
              <Liga />
              <Liga />
            </div>

            <div className="w-full">
              <GrupoNoticias />
            </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section className="relative h-fit w-full">
          <Banner
            img={BannerRoxa}
            cor={"#981FBA"}
            txt={"sobre o passa a bola"}
          />
          <div className="w-full lg:max-w-[80%] mx-auto flex flex-col items-center gap-6 p-6 pt-48">
            {/* Conteúdo "Sobre" virá aqui */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;