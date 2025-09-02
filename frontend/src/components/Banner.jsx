// src/components/Banner.jsx

function Banner({ img, cor, txt }) {
  return (
    <div className="relative -top-5 flex w-full flex-col items-center justify-center gap-3.25 overflow-hidden py-10 lg:py-17">
      {/* DOCUMENTAÇÃO DA IMAGEM DE FUNDO:
          - 'object-fill': Trocamos 'object-cover' de volta para 'object-fill'.
            Isso fará com que a imagem ESTIQUE para preencher 100% da largura e 100%
            da altura do contêiner, que é o comportamento de "escalar" que você
            deseja para este tipo de imagem de fundo, em vez do "zoom".
      */}
      <img
        src={img}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-fill"
      />

      <div className="w-11/12 max-w-4xl -rotate-[3.17deg] bg-white p-4">
        <h2
          style={{ color: `${cor}` }}
          className="break-words text-center font-[Anton] !text-4xl uppercase lg:!text-8xl"
        >
          {txt}
        </h2>
      </div>
    </div>
  );
}

export default Banner;