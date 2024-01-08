import React from "react";
import { useParams } from "react-router-dom";
import Frame from "../components/Frame";
import singleServicesFrame from "../assets/Service/SingleServices.png";
import Logos from "../components/common/Logos";
import videoPlayingImg from '../assets/Service/Rectangle 25.png'
import servicesImg from '../assets/Service/Rectangle 26 (1).png'
import CTABtn from '../components/common/Button'
import Exprience from "../components/common/Exprience";
import Footer from "../components/common/Footer";

export default function ServiceDetails() {
  const params = useParams();
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
             <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 md:w-[172px]  md:h-[172px] w-[50px] h-[50px]">
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
          <div>
            <div className="flex mt-[135px] itemscenter justify-center sm:flex-row flex-col">
            <div className="flex flex-col gap-[23px] maxw-[435px] relative">
              <h3 className=" heading xl:text-[50px] md:text-[40px] text-[30px]  text-black  tracking-[1px]">Use of Interior</h3>
              <div className="flex flex-col md:gap-[34px] gap-[10px] sm:mr-[83px]">
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">1</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]">We provide high quality design services.</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">2</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> Project on time and Latest Design.</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">3</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> Scientific Skills For getting a better result.</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">4</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> Renovations Benefit of Service</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">5</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> We are confident about our projects.</p>
                </div>
              </div>
            <div className="absolute sm:block hidden top-[50%] right-0 bg-[#CECECE] w-[1px] h-[249px] -translate-y-2/4" />
            </div>
            <div className="flex flex-col gap-[23px] maxw-[435px] sm:ml-[83px] sm:mt-0 mt-[30px]  items-end sm:items-start">
              <h3 className=" heading xl:text-[50px] md:text-[40px] text-[30px]  text-black  tracking-[1px] text-center">Make An Art</h3>
              <div className="flex flex-col md:gap-[34px] gap-[10px]">
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">1</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]">We provide high quality design services.</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">2</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> Project on time and Latest Design.</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">3</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> Scientific Skills For getting a better result.</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">4</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> Renovations Benefit of Service</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <span className=" text-burlywood-100 font-DMSerif xl:text-[20px] md:text-[13px] text-[10px] font-normal leading-[125%] tracking-[0.4px]">5</span>
                  <p className=" paragraph text-richBlack xl:text-[22px] md:text-[15px] text-[12px] font-normal leading-[270%] tracking-[0.22px]"> We are confident about our projects.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="flex gap-[99px] justify-between md:mt-[247px] mt-[100px] md:flex-row flex-col">
            <div className="xl:w-[593px] xl:h-[310px] md:w-[450px] md:h-[250px]">
              <img src={servicesImg} alt="" className="w-full h-full" />
            </div>
            <div className="md:w-1/2">
              <h1 className=" heading xl:text-[50px] md:text-[40px] text-[30px] tracking-[1px] text-black max-w-[518px]">We love design.That's how we got here.</h1>
              <p className=" tracking-[0.22px] paragraph xl:text-[22px] md:text-[15px] text-[12px]   font-normal  text-richBlack mt-[11px] max-w-[500px]">It is a long established fact that a reader will be distracted by the of readable content ..</p>
              <div className="mt-[32px]">
                <CTABtn
                linkto={"/our-projects/"}
                active={false}
                children={"Our Portfolio"}
                style={
                  "xl:py-[26px] xl:px-[40px] md:py-[15px] md:px-[20px] py-[7px] px-[10px] md:gap-[11px] gap-[5px]"
                }
                />
              </div>
            </div>
          </div>
          <div className="md:mt-[150px] mt-[100px]">
            <Exprience />
          </div>
        </div>
      </div>
      <div className="md:mt-[300px] mt-[150px]">
        <Footer />
      </div>
    </section>
  );
}
