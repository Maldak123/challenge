function Noticia({ key, titulo, resumo, fonte, tempo, img }) {
  return (
    <div
      key={key}
      className="flex h-fit flex-col gap-2.5 rounded-sm border-1 border-[rgba(0,0,0,0.25)] p-2.5 max-w-full md:max-w-[49%]"
    >
      <div className="max-h-[60%] min-h-[40%]">
        <img
          src={img}
          alt="Imagem da matéria"
          className="rounded-[2px] w-full"
        />
      </div>

      <div className="flex w-full flex-col gap-2.5">
        <h2 className="line-clamp-2 h-fit w-full text-xl font-black">
          {titulo}
        </h2>
        <p className="line-clamp-2 truncate text-wrap">{resumo}</p>
      </div>

      <div className="flex items-center gap-1">
        <img
          src={fonte.logoUrl}
          alt="Logo da fonte da notícia"
          className="size-6 rounded-full"
        />

        <div className="flex items-center gap-2">
          <p className="text-xs">{fonte.nome}</p>
          <span className="h-1 w-1 rounded-full bg-black opacity-25"></span>
          <p className="text-xs">{tempo}</p>
        </div>
      </div>
    </div>
  );
}

export default Noticia;
