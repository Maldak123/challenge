import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Banner from "./components/Banner";

import HeroBg from "./assets/hero/hero.png";
import Logo from "./assets/logoPb.png";
import BannerVerm from "./assets/sections/faixa-verm.png";

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

        <section className="w-full h-fit relative">
          <Banner img={BannerVerm} cor={"#A23D4B"} txt={"inscrições abertas"} comp={"copa passa a bola"}></Banner>

          <div className="flex flex-col gap-6 p-6 pt-48 items-center">
            <div className="max-w-100 rounded-xl bg-[#BE5C6A] p-2">
              <p className="text-white font-bold text-base text-center">Já tira a chuteira do armário porque em uma semana a gente se encontra pra uma noite de futebol e resenha!</p>
            </div>

            <div className="flex gap-4 h-fit">
              <div className="flex flex-col gap-5 text-left w-full">
                <p className="uppercase text-4xl text-[#A23D4B] font-[Anton]">quando?</p>
                <p><strong>Data: </strong>Sábado, 30 de Agosto</p>
                <p><strong>Horário: </strong>20:00</p>
              </div>

              <span className="border-1 opacity-25 min-h-full"></span>

              <div className="flex flex-col gap-5 text-right w-full">
                <p className="uppercase text-4xl text-[#A23D4B] font-[Anton]">inscrições</p>
                <p><strong>Prazo Final*: </strong>25 de Agosto</p>
                <p><strong>Valor: </strong><u>Gratuito.</u></p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <p><strong>Vagas limitadas.</strong></p>
              <button className="rounded-sm bg-[#A23D4B] p-2 w-full"><a href="#" className="font-[Anton] text-3xl text-white uppercase">Inscrever-se</a></button>
              <p className="text-xs text-left w-full">*As inscrições podem encerrar antes do prazo.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
