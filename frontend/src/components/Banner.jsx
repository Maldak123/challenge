function Banner({ img, cor, txt}) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={`max-w-screen w-full h-fit min-h-[150px] max-h-fit bg-cover bg-no-repeat -top-5 flex flex-col gap-3.25 justify-center items-center`}>
      <div className="p-2 bg-white -rotate-[3.17deg] max-w-fit">
        <h2 style={{ color: `${cor}` }} className={`w-fit uppercase font-[Anton] !text-4xl lg:!text-8xl text-center break-words`}>{txt}</h2>
      </div>
    </div>
  );
}

export default Banner;
