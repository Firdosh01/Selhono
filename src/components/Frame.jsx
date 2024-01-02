import React from "react";

export default function Frame({ frameImg, frameTitle }) {
  return (
    <div className="md:mt-[66px] mt-[33px]">
      <div className="relative">
        <img
          src={frameImg}
          alt=""
          className="object-cover w-full lg:h-[356px] md:h-[215px] h-[170px] select-none"
        />
        <div className="frame_text lg:mt-[188px] mt-[70px]">
          <h1 className="heading lg:text-[70px] sm:text-[50px] text-[30px]  text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] select-none">
            {frameTitle}
          </h1>
        </div>
      </div>
    </div>
  );
}
