import React from "react";
import heroImg from "../assets/Rectangle 1.png";
import frame from '../assets/Frame 2.png'
import subtract from '../assets/Subtract.png'
import Testimonial from "../components/common/Testimonial";
import Logos from "../components/common/Logos";

function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="hero_img md:mt-[154px] mt-[50px] relative">
          <img src={heroImg} alt="" className="w-full h-full select-none" />
          <div className=" absolute sm:top-[73px] sm:left-[25px] sm:w-[60%] top-[30px] left-[10px] w-[80%]">
            <h1 className="font-DMSerif lg:text-[65px] font-normal leading-[125%] text-white sm:text-[2.5rem] text-[1.7rem]">
              Let's make your home beautiful together
            </h1>
            <span className=" font-Inter text-white font-medium sm:text-[22px]  text-[12px] md:mt-[9px] md:leading-[33px]">
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </span>
          </div>
        </div>
        
        {/* Work  */}
        <div className="md:mt-[95px] mt-[50px] grid md:grid-cols-3 grid-cols-1 gap-[42px]">
          <div className="flex flex-col gap-[52px] items-center">
            <div className="flex flex-col items-center md:items-center">
              <span className="text-black   lg:text-[25px] text-[20px]  font-DMSerif font-normal leading-[125%]">Project Plan</span>
              <p className="paragraph mt-[20px] text-richBlack font-normal lg:text-[22px] text-[15px] text-center">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
            </div>
            <div className="flex gap-[12px] items-center lg:text-[18px] text-[13px] font-Jost font-semibold leading-[125%] tracking-[0.36px]">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M1.92944 8.43529L15.6526 8.29844M10.5476 1.91125L17.0706 8.43424L10.4162 15.0886" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[52px] items-center">
            <div className="flex flex-col items-center">
              <span className="text-black   lg:text-[25px] text-[20px]  font-DMSerif font-normal leading-[125%]">Project Plan</span>
              <p className="paragraph mt-[20px] text-richBlack font-normal lg:text-[22px] text-[15px] text-center">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
            </div>
            <div className="flex gap-[12px] items-center lg:text-[18px] text-[13px]  font-Jost font-semibold leading-[125%] tracking-[0.36px]">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M1.92944 8.43529L15.6526 8.29844M10.5476 1.91125L17.0706 8.43424L10.4162 15.0886" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[52px] items-center">
            <div className="flex flex-col items-center">
              <span className="text-black  lg:text-[25px] text-[20px] font-DMSerif font-normal leading-[125%]">Project Plan</span>
              <p className="paragraph mt-[20px] text-richBlack font-normal lg:text-[22px] text-[15px] text-center">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
            </div>
            <div className="flex gap-[12px] items-center tlg:text-[18px] text-[13px]  font-Jost font-semibold leading-[125%] tracking-[0.36px]">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M1.92944 8.43529L15.6526 8.29844M10.5476 1.91125L17.0706 8.43424L10.4162 15.0886" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
        </div>

        {/* <div className="mt-[154px]">
          <div className="relative flex">
            <div className="relative">
              <img src={frame} alt="" className="w-[653px]" />
              <div className="absolute top-[142px] left-[25px] ">
              <h1 className="font-DMSerif lg:text-[55px] font-normal leading-[125%] text-white sm:text-[2rem] text-[1rem]">
              Let's make your home beautiful together
            </h1>
              </div>
            </div>
            <div className="">
              <img src={subtract} alt="" className="w-full h-full shap" />
            </div>
          </div>
        </div> */}

        <div className="mt-[194px]">
        <Testimonial />
        </div>

        <div className=" mt-[188px]">
          <Logos />
        </div>




        
      </div>
    </div>
  );
}

export default Home;