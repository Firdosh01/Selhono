import React from "react";
import { useParams } from "react-router-dom";
import Frame from "../components/Frame";
import singleServicesFrame from "../assets/Service/SingleServices.png";
import Logos from "../components/common/Logos";
import videoPlayingImg from '../assets/Service/Rectangle 25.png'

export default function ServiceDetails() {
  const params = useParams();
  console.log(params.name);
  return (
    <section>
      <div>
        <Frame frameImg={singleServicesFrame} frameTitle={params.name} />
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="mt-[110px]">
            <h2 className=" heading xl:text-[50px] md:text-[40px] text-[30px]  text-black text-center">
              We set the trends of modern living services.
            </h2>
            <p className=" tracking-[0.25px] paragraph xl:text-[25px] md:text-[18px] text-[15px] text-center mt-[48px] font-normal  text-burlywood-50">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page
            </p>
          </div>
          <div className="mt-[48px] grid md:grid-cols-2 gap-[59px]">
            <div className="md:max-w-[587px] ">
              <p className=" tracking-[0.25px] paragraph xl:text-[25px] md:text-[18px] text-[15px]  font-normal  text-black">
                when lookings at its layouts the points spriof using that it has
                a more less normal.A wonderful serenity has taken pgossession of
                my entire soul, like thesce sweet morndsings of sphring which I
                enjoy with my forwhole heart. I am alone, and feel the charm of
                excgistence in this spot, which was created for the bliss of
                souls like mine.
              </p>
            </div>
            <div className="md:max-w-[559px] flex items-end">
              <p className=" tracking-[0.25px] paragraph xl:text-[22px] md:text-[15px] text-[12px]   font-normal  text-black">
                when lookings at its layouts the points spriof using that it has
                a more less normal.A wonderful serenity has taken pgossession of
                my entire soul, like thesce sweet morndsings of sphring which I
                enjoy with my forwhole heart. I am alone, and feel the charm of
                excgistence in this spot, which was created for the bliss of
                souls like mine.
              </p>
            </div>
          </div>
          <section className="mt-[190px] lg:block hidden">
            <Logos />
          </section>
          <div className="md:mt-[208px] mt-[100px]">
            <div className="relative ">
              <img src={videoPlayingImg} alt=""  className="w-full h-full"/>
             <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 md:w-[172px]  md:h-[172px] w-[90px] h-[90px]">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 172 172" fill="none">
                     <g filter="url(#filter0_d_31_32)">
                        <circle cx="86" cy="76" r="66" fill="white"/>
                        <path d="M82.941 91.4289L99.1666 77.7781C99.428 77.558 99.6378 77.2851 99.7817 76.9779C99.9255 76.6708 100 76.3368 100 75.9987C100 75.6607 99.9255 75.3266 99.7817 75.0195C99.6378 74.7123 99.428 74.4394 99.1666 74.2194L82.941 60.5686C81.3923 59.2658 79 60.3459 79 62.3479V89.6534C79 91.6554 81.3923 92.7355 82.941 91.4289Z" fill="#CDA274"/>
                     </g>
                     <defs>
                        <filter id="filter0_d_31_32" x="0" y="0"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="10"/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_32"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_32" result="shape"/>
                        </filter>
                     </defs>
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
