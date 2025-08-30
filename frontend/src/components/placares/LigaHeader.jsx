import PointVerde from "../../assets/point-verde.png";
import CopaAmerica from "../../assets/placares/copa-america.png";

function LigaHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2.5 items-center">
        <div className="size-10 flex justify-center items-center relative border rounded-lg border-[rgba(0,0,0,0.25)]">
          <img
            src={CopaAmerica}
            alt="Logo da Copa América Feminina"
            className="size-7.5"
          />
        </div>

        <div className="flex flex-col justify-between">
          <p className="font-bold">Copa América Feminina</p>
          <p>Finais</p>
        </div>
      </div>

      <div className="flex items-center gap-1 h-fit">
        <p className="text-[#6EAA38] hover:underline text-xs">Ver tudo</p>
        <img className="size-4" src={PointVerde} alt="Ver todos os jogos" />
      </div>
    </div>
  );
}

export default LigaHeader;