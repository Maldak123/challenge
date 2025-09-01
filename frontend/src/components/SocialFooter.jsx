function SocialFooter({img, name, link}){
  return(
    <a href={link}>
      <div className="w-[90px] h-fit flex flex-col justify-between items-center gap-1 py-1 px-3 bg-[#447718]">
        <img src={img} alt={`${name} Logo`} className="max-w-fit max-h-8 aspect-square"/>
        <p className="uppercase text-xs font-bold text-white">{name}</p>
      </div>
    </a>
  )
}

export default SocialFooter
