import CopaAmerica from "../../assets/placares/copa-america.png";

function LigaHeader() {
  return (
    <div className="flex items-center gap-2.5 lg:gap-4">
      <div className="relative flex min-h-10 min-w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.25)] lg:min-h-12 lg:min-w-12">
        <img
          src={CopaAmerica}
          alt="Logo da Copa América Feminina"
          className="size-7.5 lg:size-9"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-bold lg:text-lg">Copa América Feminina</p>
        <p className="lg:text-base">Finais</p>
      </div>

      <div className="flex h-fit w-fit cursor-pointer items-center gap-1 self-end">
        <a className="text-[#6EAA38] hover:underline">Ver tudo</a>
        <ArrowRight color="#6EAA38" className="size-6" />
      </div>
    </div>
  );
}

export default LigaHeader;
