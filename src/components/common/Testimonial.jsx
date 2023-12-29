import React from "react";
import testimonialImg1 from "../../assets/Photo.jpg";
import testimonialImg2 from "../../assets/Photo (1).jpg";
import testimonialImg3 from "../../assets/Photo (2).jpg";
export default function Testimonial() {
  return (
    <div>
      <div className=" bg-burlywood-100 rounded-[50px]">
        <div className="flex flex-col xl:py-[88px] py-[40px] gap-[38px]">
          <h2 className="text-center heading xl:text-[50px] text-[30px] tracking-[1px] text-white">
            What the People Thinks <br />
            About Us
          </h2>
          <div className="mt-[38px] grid md:grid-cols-3 grid-cols-1 gap-[20px] px-[30px]">
          

            <div className="bg-white xl:px-[37px] md:px-[20px] px-[15px] xl:pt-[53px] md:pt-[29px] xl:pb-[54px] md:pb-[30px] py-[15px] rounded-2xl">
              <div className="flex  lg:gap-[23px] gap-[5px] items-center">
                <img src={testimonialImg1} alt="" className="rounded-full " />
                <div>
                  <h4 className=" text-black lg:text-[25px]  text-[15px] font-normal leading-[150%] tracking-[0.25px] font-DMSerif">Natasha </h4>
                  <span className=" lg:text-[18px] md:text-[12px] text-[10px] font-Jost text-richBlack font-normal leading-[150%] tracking-[0.18px]">Moscow, Russia</span>
                </div>
              </div>
              <div className="mt-[25px]">
                <p className="font-normal  paragraph xl:text-[22px] md:text-[18px] text-[15px] text-richBlack">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </div>

            <div className="bg-white  xl:px-[37px] md:px-[20px] px-[15px] xl:pt-[53px] md:pt-[29px] xl:pb-[54px] md:pb-[30px] py-[15px] rounded-2xl">
              <div className="flex  lg:gap-[23px] gap-[5px] items-center">
                <img src={testimonialImg2} alt="" className="rounded-full " />
                <div>
                  <h4 className=" text-black lg:text-[22px]  text-[15px] font-normal leading-[150%] tracking-[0.22px] font-DMSerif">Raymond Galario </h4>
                  <span className="lg:text-[22px] md:text-[15px] text-[10px] font-Jost text-richBlack font-normal leading-[150%] tracking-[0.22px]">UK, London</span>
                </div>
              </div>
              <div className="mt-[25px]">
                <p className="font-normal  paragraph xl:text-[22px] md:text-[18px] text-[15px] text-richBlack">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </div>

            <div className="bg-white xl:px-[37px] md:px-[20px] px-[15px] xl:pt-[53px] md:pt-[29px] xl:pb-[54px] md:pb-[30px] py-[15px]  rounded-2xl">
              <div className="flex lg:gap-[23px] gap-[5px] items-center">
                <img src={testimonialImg3} alt="" className="rounded-full" />
                <div>
                  <h4 className=" text-black lg:text-[22px] text-[15px] font-normal leading-[150%] tracking-[0.22px] font-DMSerif">Benny Roll </h4>
                  <span className=" lg:text-[22px] md:text-[15px] text-[10px] font-Jost text-richBlack font-normal leading-[150%] tracking-[0.22px]">USA, New York</span>
                </div>
              </div>
              <div className="mt-[25px]">
                <p className="font-normal  paragraph xl:text-[22px] md:text-[18px] text-[15px]  text-richBlack">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
