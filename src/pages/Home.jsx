import React from "react";
import heroImg from "../assets/Rectangle 1.png";
import frame from "../assets/Frame 2.png";
import subtract from "../assets/Subtract.png";
import Testimonial from "../components/common/Testimonial";
import Logos from "../components/common/Logos";
import bedroomImg1 from "../assets/Rectangle 4.png";
import bedroomImg2 from "../assets/Rectangle 5.png";
import bedroomImg3 from "../assets/Rectangle 6.png";
import bedroomImg4 from "../assets/Rectangle 7.png";
import { Articles, Works } from "../components/common/constent";
import SubFooter from "../components/common/SubFooter";
import Footer from "../components/common/Footer";
import Exprience from "../components/common/Exprience";
import CTABtn from "../components/common/Button";

function Home() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="hero_img md:mt-[154px] mt-[50px] relative">
            <img src={heroImg} alt="" className="w-full h-full select-none" />
            <div className=" absolute sm:top-[73px] sm:left-[25px] left-[10px] top-[30px] md:max-w-[470px]">
              <h1 className="font-DMSerif lg:text-[65px] sm:text-[2.8rem]  text-[1.5rem]  font-normal leading-[125%] text-white ">
                Let's make your home beautiful together
              </h1>
              <span className=" font-Inter text-white font-medium sm:text-[22px]  text-[12px] md:mt-[9px] md:leading-[33px] tracking-[0.22px]">
                There are many variations of the passages of lorem Ipsum
                fromavailable, majority.
              </span>
              <div className="md:mt-[28px] mt-[5px]">
                <CTABtn
                  active={true}
                  linkto={"/contact-us/"}
                  children={"Get Started"}
                  style={
                    "xl:py-[26px] xl:px-[48px] md:py-[15px] md:px-[17px] py-[7px] px-[8px] md:gap-[11px] gap-[5px]"
                  }
                />
              </div>
            </div>
          </div>

          {/* Work  */}
          <div className="md:mt-[95px] mt-[50px] grid md:grid-cols-3 grid-cols-1 gap-[42px]">
            {Works.map((work) => (
              <div className="flex flex-col gap-[52px] items-center md:max-w-[358px]">
                <div className="flex flex-col items-center md:items-center">
                  <span className="text-black   md:text-[25px] text-[20px]  font-DMSerif font-normal leading-[125%]">
                    {work.name}
                  </span>
                  <p className="paragraph mt-[20px] text-richBlack font-normal lg:text-[22px] text-[15px] text-center">
                    {work.desc}
                  </p>
                </div>
                <div className="flex gap-[12px] items-center md:text-[18px] text-[13px] font-Jost font-semibold leading-[125%] tracking-[0.36px] text-richBlack">
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
            ))}
          </div>

          <section className="md:mt-[194px] mt-[97px]">
            <Testimonial />
          </section>

          <section className=" mt-[188px] lg:block hidden">
            <Logos />
          </section>

          {/* Our projects  */}

          <section className="md:mt-[202px] mt-[101px]">
            <div>
              <div className="flex flex-col gap-[9px] justify-center items-center">
                <h2 className=" heading xl:text-[60px] md:text-[50px] text-[30px] font-normal tracking-[1.2px] text-black text-center">
                  Follow Our Projects
                </h2>
                <p className=" tracking-[0.28px] paragraph text-black xl:text-[28px] md:text-[22px] text-[15px] text-center font-normal max-w-[737px]">
                  It is a long established fact that a reader will be distracted
                  by the of readable content of page lookings at its layouts
                  points.
                </p>
              </div>
              <div className="grid items-center md:grid-cols-2 gap-y-[36px] md:gap-x-[116px] md:mt-[114px] mt-[57px] grid-cols-1">
                <div className="flex flex-col gap-[10px]">
                  <img
                    src={bedroomImg1}
                    alt="bedroom image"
                    loading="lazy"
                    className="w-full h-full select-none"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="heading tracking-[0.5px] lg:text-[25px] text-[20px]">
                        Modern bedroom
                      </span>
                      <p className="font-normal paragraph lg:text-[22px] text-[18px] tracking-[0.22px] mt-[4px] text-richBlack">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 70 70"
                        fill="none"
                      >
                        <circle cx="35" cy="35" r="35" fill="#D8A876" />
                        <path d="M32 44L40 35L32 26" fill="#D8A876" />
                        <path
                          d="M32 44L40 35L32 26"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <img
                    src={bedroomImg2}
                    alt="bedroom image"
                    loading="lazy"
                    className="w-full h-full select-none"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="heading tracking-[0.5px] lg:text-[25px] text-[20px]">
                        Modern bedroom
                      </span>
                      <p className="font-normal paragraph lg:text-[22px] text-[18px] tracking-[0.22px] mt-[4px] text-richBlack">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 70 70"
                        fill="none"
                      >
                        <circle cx="35" cy="35" r="35" fill="#D8A876" />
                        <path d="M32 44L40 35L32 26" fill="#D8A876" />
                        <path
                          d="M32 44L40 35L32 26"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <img
                    src={bedroomImg3}
                    alt="bedroom image"
                    loading="lazy"
                    className="w-full h-full select-none"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="heading tracking-[0.5px] lg:text-[25px] text-[20px]">
                        Modern bedroom
                      </span>
                      <p className="font-normal paragraph lg:text-[22px] text-[18px]  tracking-[0.22px] mt-[4px] text-richBlack">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 70 70"
                        fill="none"
                      >
                        <circle cx="35" cy="35" r="35" fill="#D8A876" />
                        <path d="M32 44L40 35L32 26" fill="#D8A876" />
                        <path
                          d="M32 44L40 35L32 26"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <img
                    src={bedroomImg4}
                    alt="bedroom image"
                    loading="lazy"
                    className="w-full h-full select-none"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="heading tracking-[0.5px] lg:text-[25px] text-[20px]">
                        Modern bedroom
                      </span>
                      <p className="font-normal paragraph lg:text-[22px] text-[18px]  tracking-[0.22px] mt-[4px] text-richBlack">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 70 70"
                        fill="none"
                      >
                        <circle cx="35" cy="35" r="35" fill="#D8A876" />
                        <path d="M32 44L40 35L32 26" fill="#D8A876" />
                        <path
                          d="M32 44L40 35L32 26"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Counter  */}
          <div className="lg:mt-[324px] md:mt-[162px] mt-[81px]">
            <Exprience />
          </div>

          <section className="lg:mt-[373px] md:mt-[186.5px] mt-[93px]">
            <div>
              <div className="flex flex-col gap-[12px] justify-center items-center">
                <h2 className=" heading xl:text-[60px] md:text-[50px] text-[30px] font-normal tracking-[1.2px] text-black text-center">
                  Articles & News
                </h2>
                <p className=" tracking-[0.28px] paragraph text-black xl:text-[28px] md:text-[22px] text-[15px] text-center font-normal max-w-[811px]">
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using.
                </p>
              </div>
              <div className="grid items-center md:grid-cols-3 grid-cols-1 gap-[27px] mt-[119px]">
                {Articles.map((article) => (
                  <div key={article.id} className="blog_Card flex-col flex gap-[21px] cursor-pointer">
                    <div className="relative ">
                      <img
                        src={article.img}
                        alt="article image"
                        loading="lazy"
                        className="object-cover w-full h-full select-none"
                      />
                      <div className="absolute bottom-[20.27px] left-[20px] ">
                        <span className="font-normal paragraph text-[16px] tracking-[0.16px] blog_tag text-white">
                          {article.tag}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 className="heading text-black xl:text-[25px] md:text-[18px] tracking-[0.5px]">
                        {article.heading}
                      </h2>
                      <div className="mt-[30px] flex justify-between items-center">
                        <p className=" paragraph md:text-[16px] text-[15px] text-richBlack tracking-[0.16px]">
                          {article.date}
                        </p>
                        <div className="xl:w-[52px] xl:h-[53px] w-[32px] h-[33px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 53"
                            fill="none"
                          >
                            <circle
                              cx="26"
                              cy="26.2671"
                              r="26"
                              fill="#D8A876"
                            />
                            <path
                              d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812"
                              fill="#D8A876"
                            />
                            <path
                              d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="md:mt-[119px] mt-[59.50px]">
        <SubFooter />
      </section>
      <div className="mt-[41px]">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
