import SocialFooter from "../components/SocialFooter";

import Logo from "../assets/logoPb.png";
import Insta from "../assets/footer/instagram.png";
import Spotify from "../assets/footer/spotify.png";
import Tiktok from "../assets/footer/tiktok.png";
import Whatsapp from "../assets/footer/whatsapp.png";
import Youtube from "../assets/footer/youtube.png";

function Footer() {
  return (
    <footer className="bg-[#518D1C] w-full p-6 flex flex-col gap-6">
      <p className="font-[Anton] text-3xl text-white uppercase">Siga o Passa a Bola nas redes sociais</p>

      <div className="flex flex-wrap w-full justify-center gap-1.25">
        <SocialFooter img={Insta} name="Instagram" link="https://www.instagram.com/passaabola"></SocialFooter>
        <SocialFooter img={Tiktok} name="Tiktok" link="https://www.tiktok.com/@passabola"></SocialFooter>
        <SocialFooter img={Youtube} name="Youtube" link="https://www.youtube.com/@passabola"></SocialFooter>
        <SocialFooter img={Whatsapp} name="Whatsapp" link="https://whatsapp.com/channel/0029Vavm10347XeEyTTNi91i"></SocialFooter>
        <SocialFooter img={Spotify} name="Spotify" link="https://open.spotify.com/show/18H1ysI9zyDIRahuCnZGQr?si=93b3d3ed36de4a9a&nd=1&dlsi=79c0ae3887b64c60"></SocialFooter>
      </div>

      <div className="w-full flex flex-col items-center gap-2.5">
        <div className="flex gap-1">
          <img src={Logo} alt="Logo do Passa a Bola" className="w-11 h-11" />
          <p className="font-[Anton] text-white text-xl/[1.19]">
            PASSA <br /> A BOLA
          </p>
        </div>

        <p className="text-[10px] text-white">&copy; Passa A Bola, 2025. - Todos os Direitos Reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
