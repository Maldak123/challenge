import React from "react";

function SocialFooter({ img, name, link }) {
  return (
    <a href={link}>
      <div className="flex h-fit min-w-[90px] flex-col items-center justify-between gap-1 bg-[#447718] px-3 py-1 lg:min-w-[110px] lg:gap-2 lg:px-4 lg:py-2">
        <img
          src={img}
          alt={`${name} Logo`}
          className="aspect-square max-h-8 max-w-fit lg:max-h-10"
        />
        <p className="text-center text-xs font-bold uppercase text-white lg:text-sm">
          {name}
        </p>
      </div>
    </a>
  );
}

export default SocialFooter;