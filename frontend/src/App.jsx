import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Banner from "./components/Banner";
import Encontro from "./components/Encontro";

import HeroBg from "./assets/hero/hero.png";
import Logo from "./assets/logoPb.png";
import BannerVerm from "./assets/sections/faixa-verm.png";
import BannerVerde from "./assets/sections/faixa-verde.png";
import FaixaVerm from "./assets/sections/banner-verm.png";
import PointVerm from "./assets/point.png";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <main className="py-16">
        <section className="w-full h-[85lvh] relative">
          <div className="absolute w-full h-full overflow-hidden -z-999 flex justify-center">
            <img src={HeroBg} alt="" className="w-full h-full object-cover pointer-events-none select-none" />
          </div>

          <div className="flex flex-col p-6 justify-between items-center w-full h-full">
            <div className="text-4xl text-white font-[Anton] w-full">
              <h1>
                A <br />
                <span className="text-[#981FBA] text-8xl"> CASA </span>
                <br />
                DO FUTEBOL FEMININO
              </h1>
            </div>
            <img src={Logo} alt="Logo do Passa a Bola" className="w-15 h-15 opacity-70" />
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <section className="w-full h-fit relative">
            <Banner img={BannerVerm} cor={"#BA1B31"} txt={"próximos encontros"}></Banner>

            <div className="flex flex-col gap-2 p-6 pt-36 items-center">
              <div className="w-full text-center p-2 relative">
                <span className='absolute inset-0 w-full h-full bg-[#BA1B31] -rotate-[3.17deg]'></span>
                <p className="text-sm font-bold text-[18px] -rotate-[3.17deg] text-white uppercase">Jogue com a gente! <br /> Gratuito e para todas.</p>
              </div>

              <div className="flex mt-4 relative w-full">
                <div className="flex gap-4 overflow-x-auto p-4 scroll-smooth">
                  <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm}></Encontro>
                  <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm}></Encontro>
                  <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm}></Encontro>
                  <Encontro nome="Encontro nº1" diaI="27/10/2025" diaF="30/10/2025" img={FaixaVerm}></Encontro>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1 max-w-1/2 opacity-50">
                  <p className="text-xs text-left w-full">*Vagas limitadas.</p>
                  <p className="text-xs text-left w-full">*As inscrições podem encerrar antes do prazo.</p>
                </div>

                <div className="flex items-center gap-1 h-fit">
                  <p className="text-[#BA1B31] hover:underline">Ver tudo</p>
                  <img className="w-6 h-6" src={PointVerm} alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full h-fit relative">
            <Banner img={BannerVerde} cor={"#6EAA38"} txt={"placares e notícias"}></Banner>

            <div className="flex flex-col gap-6 p-6 pt-48 items-center"></div>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
