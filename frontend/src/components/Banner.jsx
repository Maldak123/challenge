function Banner({ img, cor, txt, comp }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={`w-full max-h-[150px] py-10 bg-contain -top-5 flex flex-col gap-3.25 justify-center items-center`}>
      <div className="p-2 bg-white -rotate-[3.17deg] w-fit">
        <h2 style={{ color: `${cor}` }} className={`w-full uppercase font-[Anton] text-4xl`}>{txt}</h2>
      </div>
      <div className={`${comp ? "block" : "hidden"}`}>
        <h3 className="w-full uppercase font-[Anton] text-4xl text-white text-center">{comp}</h3>
      </div>
    </div>
  );
}

export default Banner;
