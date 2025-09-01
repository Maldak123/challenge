import PointVerde from "../../assets/point-verde.png";
import CopaAmerica from "../../assets/placares/copa-america.png";

function LigaHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="relative flex size-10 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.25)]">
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

      <div className="flex h-fit items-center gap-1">
        <p className="text-xs text-[#6EAA38] hover:underline">Ver tudo</p>
        <img className="size-4" src={PointVerde} alt="Ver todos os jogos" />
      </div>
    </div>
  );
}

export default LigaHeader;
