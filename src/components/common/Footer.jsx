import React from "react";
import { FooterLinks } from "./constent";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="container">
        <div className="md:flex  xl:gap-[101px] gap-[50px]   grid grid-cols-1">
          <div className="md:w-[393px]">
            <div className="flex gap-[7px] select-none">
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
            <div>
              <p className="paragraph mt-[18px] text-richBlack font-normal xl:text-[22px] text-[15px] tracking-[0.22px] max-w-[393px]">
                It is a long established fact that a reader will be distracted
                lookings.
              </p>
            </div>
            <div className="flex md:gap-[54px] gap-[20px] mt-[31px] md:text-[18px] text-[15px] cursor-pointer w-fit">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <IoLogoInstagram />
            </div>
          </div>
          <div className="flex gap-[101px] justify-between">
            {FooterLinks.map((ele, i) => {
              return (
                <div key={i}>
                  <h3 className="font-black heading xl:text-[25px] text-[17px] w-[120px]">
                    {ele.title}
                  </h3>
                  <div className="flex flex-col gap-4 mt-[9px]">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="paragraph  text-richBlack font-normal xl:text-[22px] text-[15px] tracking-[0.22px] leading-[66px] font-Jost"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex flex-col gap-[17px] w-[258px]">
              <h1 className="font-black heading xl:text-[25px] text-[17px">Contact</h1>
              <div className="flex flex-col gap-4">
                <span className="paragraph  text-richBlack font-normal xl:text-[22px] text-[15px] tracking-[0.22px] leading-[33px] font-Jost" >
                  55 East Birchwood Ave. <br /> Brooklyn, New York 11201
                </span>
                <p className="paragraph  text-richBlack font-normal xl:text-[22px] text-[15px] tracking-[0.22px] leading-[66px] font-Jost">contact@selhono.com</p>
                <p className="paragraph  text-richBlack font-normal xl:text-[22px] text-[15px] tracking-[0.22px] leading-[33px] font-Jost">(123) 456 - 7890</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
