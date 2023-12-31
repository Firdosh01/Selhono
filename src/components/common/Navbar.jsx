import React from "react";
import { navigation } from "./constent";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="wrapper">
      <div className="container">
        <nav className="flex items-center justify-between nav_container">
          <div className="flex gap-[7px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M10.4167 41.6667V22.6167L6.38542 25.7208L5.12917 24.0708L25 8.85417L44.8708 24.0708L43.6146 25.7083L39.5833 22.6167V41.6667H10.4167ZM16.6667 30.7708C16.2361 30.7708 15.8611 30.6111 15.5417 30.2917C15.2222 29.9722 15.0625 29.5972 15.0625 29.1667C15.0625 28.7361 15.2222 28.3611 15.5417 28.0417C15.8611 27.7222 16.2361 27.5625 16.6667 27.5625C17.0972 27.5625 17.4722 27.7222 17.7917 28.0417C18.1111 28.3611 18.2708 28.7361 18.2708 29.1667C18.2708 29.5972 18.1111 29.9722 17.7917 30.2917C17.4722 30.6111 17.0972 30.7708 16.6667 30.7708ZM25 30.7708C24.5694 30.7708 24.1944 30.6111 23.875 30.2917C23.5556 29.9722 23.3958 29.5972 23.3958 29.1667C23.3958 28.7361 23.5556 28.3611 23.875 28.0417C24.1944 27.7222 24.5694 27.5625 25 27.5625C25.4306 27.5625 25.8056 27.7222 26.125 28.0417C26.4444 28.3611 26.6042 28.7361 26.6042 29.1667C26.6042 29.5972 26.4444 29.9722 26.125 30.2917C25.8056 30.6111 25.4306 30.7708 25 30.7708ZM33.3333 30.7708C32.9028 30.7708 32.5278 30.6111 32.2083 30.2917C31.8889 29.9722 31.7292 29.5972 31.7292 29.1667C31.7292 28.7361 31.8889 28.3611 32.2083 28.0417C32.5278 27.7222 32.9028 27.5625 33.3333 27.5625C33.7639 27.5625 34.1389 27.7222 34.4583 28.0417C34.7778 28.3611 34.9375 28.7361 34.9375 29.1667C34.9375 29.5972 34.7778 29.9722 34.4583 30.2917C34.1389 30.6111 33.7639 30.7708 33.3333 30.7708Z"
                fill="#CDA274"
              />
            </svg>
            <h3 className="uppercase lg:text-[40px] text-[20px] font-normal leading-[50px] font-DMSerif">
              selhono
            </h3>
          </div>
          <div className=" flex gap-[31px] items-center">

          <ul className="hidden gap-2 sm:flex md:gap-5">
            {navigation.map((nav) => {
              return (
                <li className="flex font-Jost font-medium   md:text-[20px] text-[1rem] leading-[25px] text-black">
                  <NavLink to={nav.path}>{nav.link}</NavLink>
                </li>
              );
            })}
          </ul>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <g opacity="0.8">
              <path d="M16.6843 16.6844L22 22M19.3756 10.1874C19.3756 15.2616 15.2622 19.3749 10.1881 19.3749C5.11399 19.3749 1.00061 15.2616 1.00061 10.1874C1.00061 5.11332 5.11399 0.999939 10.1881 0.999939C15.2622 0.999939 19.3756 5.11332 19.3756 10.1874Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
          </svg>
          </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
