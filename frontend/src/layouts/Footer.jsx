import SocialFooter from "../components/home/SocialFooter";

import Logo from "../assets/logoPb.png";
import Insta from "../assets/footer/instagram.png";
import Spotify from "../assets/footer/spotify.png";
import Tiktok from "../assets/footer/tiktok.png";
import Whatsapp from "../assets/footer/whatsapp.png";
import Youtube from "../assets/footer/youtube.png";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-6 bg-[#518D1C] p-4 lg:p-8 relative bottom-0">
      <div className="flex w-full flex-col gap-5 lg:max-w-[70%]">
        <div className="flex items-center gap-1 lg:gap-2">
          <img
            src={Logo}
            alt="Logo do Passa a Bola"
            className="h-11 w-11 lg:h-14 lg:w-14"
          />
          <p className="font-[Anton] text-xl/[1.19] text-white lg:text-2xl">
            PASSA <br /> A BOLA
          </p>
        </div>

        <p className="text-sm font-bold text-white lg:text-base">
          Siga o Passa a Bola nas redes sociais:
        </p>

        <div className="flex w-full flex-wrap justify-center gap-1.25 lg:gap-2">
          <SocialFooter
            img={Insta}
            name="Instagram"
            link="https://www.instagram.com/passaabola"
          />
          <SocialFooter
            img={Tiktok}
            name="Tiktok"
            link="https://www.tiktok.com/@passabola"
          />
          <SocialFooter
            img={Youtube}
            name="Youtube"
            link="https://www.youtube.com/@passabola"
          />
          <SocialFooter
            img={Whatsapp}
            name="Whatsapp"
            link="https://whatsapp.com/channel/0029Vavm10347XeEyTTNi91i"
          />
          <SocialFooter
            img={Spotify}
            name="Spotify"
            link="https://open.spotify.com/show/18H1ysI9zyDIRahuCnZGQr?si=93b3d3ed36de4a9a&nd=1&dlsi=79c0ae3887b64c60"
          />
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="mt-4 flex w-fit flex-col gap-4 text-white">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold lg:text-lg">Links Rápidos:</h4>
              <ul className="flex list-none flex-col gap-1">
                <li className="underline text-sm lg:text-base">Início</li>
                <li className="underline text-sm lg:text-base">Próximos Encontros</li>
                <li className="underline text-sm lg:text-base">Placares e Notícias</li>
                <li className="underline text-sm lg:text-base">Sobre o Passa a Bola</li>
              </ul>
            </div>
            {/* <span className="w-full border-1 opacity-50"></span> */}
          </div>

          <div className="mt-4 flex w-fit flex-col gap-4 text-white">
            <div className="flex flex-col gap-1">
              <h4 className="font-bold lg:text-lg">Contato:</h4>

              <div className="lg:text-base">
                <strong className="no-underline">Email: </strong>
                <p className="inline text-sm lg:text-base">
                  passaabola@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-white lg:text-xs mt-5">
          © Passa A Bola, 2025. - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;