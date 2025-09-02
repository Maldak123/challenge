import PointVerde from "../../assets/point-verde.png";
import CopaAmerica from "../../assets/placares/copa-america.png";

function LigaHeader() {
  return (
    // DOCUMENTAÇÃO:
    // O contêiner principal agora tem apenas 'flex', 'items-center' e um 'gap'.
    // Removemos 'justify-between' porque a coluna do meio cuidará do espaçamento.
    <div className="flex items-center gap-2.5">
      {/* COLUNA 1: LOGO (TAMANHO FIXO) */}
      <div className="relative flex min-h-10 min-w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.25)]">
        <img
          src={CopaAmerica}
          alt="Logo da Copa América Feminina"
          className="size-7.5"
        />
      </div>

      {/* COLUNA 2: TÍTULO (FLEXÍVEL) */}
      {/* DOCUMENTAÇÃO:
          - "flex-1": Faz esta coluna crescer para ocupar todo o espaço disponível.
          - "min-w-0": Permite que esta coluna encolha e ative o 'truncate' no texto.
      */}
      <div className="flex-1 min-w-0">
        <p className="truncate font-bold">Copa América Feminina</p>
        <p>Finais</p>
      </div>

      {/* COLUNA 3: BOTÃO (TAMANHO FIXO) */}
      <button className="flex h-fit flex-shrink-0 items-center gap-1">
        <p className="whitespace-nowrap text-xs text-[#6EAA38] hover:underline">
          Ver tudo
        </p>
        <img className="size-4" src={PointVerde} alt="Ver todos os jogos" />
      </button>
    </div>
  );
}

export default LigaHeader;