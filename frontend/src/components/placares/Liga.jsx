import LigaHeader from "./LigaHeader";
import Jogo from "./Jogo";

function Liga() {
  return (
    <div className="flex flex-col py-2 w-full gap-2.5 relative">
      <LigaHeader></LigaHeader>

      <div className="relative flex gap-3 overflow-x-auto">
        <Jogo></Jogo>
        <Jogo></Jogo>
      </div>
    </div>
  );
}

export default Liga;
