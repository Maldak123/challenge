import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import HeroBg from "./assets/hero/hero.png";
import Logo from "./assets/logoPb.png";

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
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
