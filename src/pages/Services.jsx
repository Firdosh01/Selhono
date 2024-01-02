import React from "react";
import Frame from "../components/Frame";
import serviceFrame from "../assets/Service/Rectangle 20.png";
import { services } from "../components/common/constent";

export default function Services() {
  return (
    <div>
      <div>
        <Frame frameImg={serviceFrame} frameTitle={"Services"} />
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-[42px] md:gap-y-[88px]  md:mt-[222px] mt-[111px] justify-center items-center">
            {services.map((service) => {
              return (
                <>
                  <div className="flex flex-col gap-[52px] items-center md:max-w-[358px] rounded-[30px] hover:bg-[#F9F9F9] md:py-[83px] py-[50px] px-[20px] duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center md:items-center">
                      <span className="text-black   md:text-[25px] text-[20px]  font-DMSerif font-normal leading-[125%] group-hover:text-burlywood-150">
                        {service.name}
                      </span>
                      <p className="paragraph mt-[20px] text-richBlack font-normal lg:text-[22px] text-[15px] text-center group-hover:text-burlywood-150">
                        {service.desc}
                      </p>
                    </div>
                    <div className="flex gap-[12px] items-center md:text-[18px] text-[13px] font-Jost font-semibold leading-[125%] tracking-[0.36px] text-richBlack group-hover:text-burlywood-150">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                      >
                        <path
                          d="M1.92944 8.43529L15.6526 8.29844M10.5476 1.91125L17.0706 8.43424L10.4162 15.0886"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="square"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
