function SocialFooter({img, name, link}){
  return(
    <a href={link}>
      <div className="min-w-[104px] h-fit flex flex-col justify-between items-center gap-1 p-1 bg-[#81CC3E]">
        <img src={img} alt={`${name} Logo`} className="max-w-16 h-auto aspect-square"/>
        <p className="uppercase text-sm font-bold text-white">{name}</p>
      </div>
    </a>
  )
}

export default SocialFooter
