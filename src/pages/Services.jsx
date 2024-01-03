import React from "react";
import Frame from "../components/Frame";
import serviceFrame from "../assets/Service/Rectangle 20.png";
import { services } from "../components/common/constent";
import conceptImg from "../assets/Service/Rectangle 21.png";
import ideaImg from "../assets/Service/Rectangle 22.png";
import designImg from "../assets/Service/Rectangle 23.png";
import perfectionImg from "../assets/Service/Rectangle 24.png";
import SubFooter from "../components/common/SubFooter";
import Footer from "../components/common/Footer";

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
          <div className="md:mt-[210px] mt-[100px]">
            <div>
              <div className="flex flex-col gap-[9px] justify-center items-center">
                <h2 className=" heading xl:text-[50px] md:text-[40px] text-[30px]  text-black text-center">
                  How We Work
                </h2>
                <p className=" tracking-[0.22px] paragraph text-richBlack xl:text-[22px] md:text-[18px] text-[15px] text-center font-normal max-w-[802px]">
                  It is a long established fact will be distracted.Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="mt-[120px]">
                <div className="flex gap-[93px] justify-between md:flex-row flex-col  md:itemscenter relative">
                  <div className="md:w-1/2">
                    <img
                      src={conceptImg}
                      alt="conceptImg"
                      loading="lazy"
                      className="2xl:w-[625px] 2xl:h-[485px] object-cover select-none"
                    />
                  </div>
                  <div className="absolute top-[-36px] right-0">
                    <h4 className=" lg:text-[90px] md:text-[60px] text-[40px] text-burlywood-150 font-normal font-DMSerif leading-[150%] tracking-[0.9px]">
                      01
                    </h4>
                  </div>
                  <div className="md:w-1/2 relative 2xl:top-[250px] xl:top-[200px] lg:top-[150px] md:top-[130px] top-[40px] ">
                    <div>
                      <h2 className=" heading  lg:text-[35px] md:text-[25px] text-[18px] ">
                        Concept & Details
                      </h2>
                      <p className=" tracking-[0.22px] paragraph text-richBlack xl:text-[22px] md:text-[18px] text-[15px]  font-normal max-w-[456px] mt-[11px]">
                        It is a long established fact will be distracted.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-[93px] justify-between md:flex-row  flex-col-reverse relative mt-[121px]">
                  <div className="absolute top-[0] left-0">
                    <h4 className=" lg:text-[90px] md:text-[60px] text-[40px] text-burlywood-150 font-normal font-DMSerif leading-[150%] tracking-[0.9px]">
                      02
                    </h4>
                  </div>
                  <div className=" relative 2xl:top-[292px] md:w-1/2 xl:top-[200px] lg:top-[150px] md:top-[130px] top-[40px] ">
                    <div>
                      <h2 className=" heading  lg:text-[35px] md:text-[25px] text-[18px] ">
                        Idea for Work
                      </h2>
                      <p className=" tracking-[0.22px] paragraph text-richBlack xl:text-[22px] md:text-[18px] text-[15px]  font-normal max-w-[456px] mt-[9px]">
                        It is a long established fact will be distracted.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <img
                      src={ideaImg}
                      alt="ideaImg"
                      loading="lazy"
                      className="2xl:w-[625px] 2xl:h-[485px] object-cover w-full h-full select-none"
                    />
                  </div>
                </div>

                <div className="flex gap-[93px] justify-between md:flex-row flex-col  relative mt-[121px]">
                  <div className="md:w-1/2">
                    <img
                      src={designImg}
                      alt="designImg"
                      loading="lazy"
                      className="2xl:w-[625px] 2xl:h-[485px] object-cover w-full h-full select-none"
                    />
                  </div>
                  <div className="absolute top-[-36px] right-0">
                    <h4 className="lg:text-[90px] md:text-[60px] text-[40px] text-burlywood-150 font-normal font-DMSerif leading-[150%] tracking-[0.9px]">
                      03
                    </h4>
                  </div>
                  <div className=" relative 2xl:top-[250px] xl:top-[200px] lg:top-[150px] md:top-[130px] top-[40px] md:w-1/2">
                    <div>
                      <h2 className=" heading  lg:text-[35px] md:text-[25px] text-[18px] ">
                        Design
                      </h2>
                      <p className=" tracking-[0.22px] paragraph text-richBlack xl:text-[22px] md:text-[18px] text-[15px]  font-normal max-w-[456px] mt-[11px]">
                        It is a long established fact will be distracted.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-[93px] justify-between md:flex-row  flex-col-reverse relative mt-[121px]">
                  <div className="absolute top-[0] left-0">
                    <h4 className=" lg:text-[90px] md:text-[60px] text-[40px] text-burlywood-150 font-normal font-DMSerif leading-[150%] tracking-[0.9px]">
                      04
                    </h4>
                  </div>
                  <div className=" relative 2xl:top-[292px] md:w-1/2 xl:top-[200px] lg:top-[150px] md:top-[130px] top-[40px] ">
                    <div>
                      <h2 className=" heading  lg:text-[35px] md:text-[25px] text-[18px] ">
                        Perfection
                      </h2>
                      <p className=" tracking-[0.22px] paragraph text-richBlack xl:text-[22px] md:text-[18px] text-[15px]  font-normal max-w-[456px] mt-[9px]">
                        It is a long established fact will be distracted.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <img
                      src={perfectionImg}
                      alt="perfectionImg"
                      loading="lazy"
                      className="2xl:w-[625px] 2xl:h-[485px] object-cover w-full h-full select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-[378px] mt-[150px]">
        <SubFooter />
      </div>
      <div className="mt-[41px]">
        <Footer />
      </div>
    </div>
  );
}
