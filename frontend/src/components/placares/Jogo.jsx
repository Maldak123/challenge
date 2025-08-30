import Brasil from "../../assets/placares/brasil.png";
import Colombia from "../../assets/placares/colombia.png";

function Jogo() {
  return (
    <div className="p-2 relative flex gap-4 min-w-[235px] w-full h-16 border rounded-lg border-[rgba(0,0,0,0.25)]">
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between text-sm">
          <div className="flex gap-1 items-center">
            <img src={Brasil} alt="Brasil" className="size-5" />
            <p className="font-bold">Brasil</p>
          </div>

          <p className="font-bold">4</p>
        </div>

        <div className="flex justify-between w-full text-sm">
          <div className="flex gap-1 items-center">
            <img src={Colombia} alt="Colômbia" className="size-5" />
            <p className="font-bold">Colômbia</p>
          </div>

          <p className="font-bold">4</p>
        </div>
      </div>

      <span className="h-full border-l border-[rgba(0,0,0,0.25)]"></span>

      <div className="flex flex-col justify-center items-center gap-1 w-fit">
        <p className="font-bold text-[10px]">02/08/2025</p>
        <p className="text-[10px]">Fim de jogo</p>
      </div>
    </div>
  );
}

export default Jogo;
