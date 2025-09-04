const SobreSecoes = ({cor, txt}) => {
  return (
    <div className="relative lg:mb-15 lg:mt-5 w-full -rotate-[3.17deg] py-5 text-center md:min-w-3/5">
      <span style={{backgroundColor: `${cor}`}} className={`absolute inset-0 h-full w-full`}></span>

      <h3 className="relative font-bold text-white uppercase">
        {txt}
      </h3>
    </div>
  );
};

export default SobreSecoes;
