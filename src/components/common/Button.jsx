import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, active, style, linkto }) {
  return (
    <div className="w-fit">
      <Link to={linkto}>
        <div
          className={`flex items-center  ${style} ${
            active ? " bg-burlywood-100 shadow-[0px_10px_20px_0px_#1F2022]" : "bg-black  shadow-[0px_10px_20px_0px_rgba(192,192,192,0.35)]"
          } xl:rounded-[18px] md:rounded-xl rounded-md `}
        >
          <div
            className={`${
              active ? " bg-burlywood-100" : "bg-black"
            } font-Jost xl:text-[18px] md:text-[15px] text-[10px] font-semibold leading-[125%] tracking-[0.36px] text-white select-none`}
          >
            {children}
          </div>
          <div className="md:w-[19px] md:h-[17px] w-[14px] h-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M1.92944 8.43517L15.6526 8.29832M10.5476 1.91113L17.0706 8.43412L10.4162 15.0885"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
