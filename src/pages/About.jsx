import React from "react";
import aboutFrame from "../assets/About/Rectangle 11.png";
import rectangleImg1 from "../assets/About/Rectangle 18 (1).png";
import CTABtn from "../components/common/Button";
import rectangleImg2 from "../assets/About/Rectangle 19 (1).png";
import Testimonial from "../components/common/Testimonial";
import Footer from "../components/common/Footer";
import Frame from "../components/Frame";

export default function About() {
  return (
    <div className="md:mt-[66px] mt-[33px]">
      <div>
        <Frame frameImg={aboutFrame} frameTitle={"About Us"} />
      </div>

      <div className="wrapper">
        <div className="container">
          <div className="md:mt-[133px] mt-[60px] flex-col flex justify-center items-center sm:gap-[34px] gap-[20px] text-center relative">
            <blockquote className="text-center heading tracking-[0.7px] lg:text-[35px] md:text-[25px] text-[18px]  max-w-[751px]">
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it
            </blockquote>
            <span className="paragraph md:text-[25px] text-[15px] tracking-[0.25px] font-normal text-richBlack text-center">
              BUNNY WILLIAMS
            </span>
            <div className="absolute top-0 right-[-4px] w-[4px] bg-black h-full"></div>
            <div className="absolute top-0 left-[-3px] w-[4px] bg-black h-full"></div>
          </div>

          <div className="flex md:mt-[133px] mt-[50px] items-center md:flex-row flex-col justify-between">
            <div className="xl:max-w-[500px] md:w-[45%]">
              <h2 className="heading text-black xl:text-[50px] md:text-[40px] text-[30px]">
                What We Do
              </h2>
              <p className="paragraph md:mt-[23px] mt-[11px] xl:text-[22px] md:text-[18px] text-[15px] tracking-[0.22px] font-normal text-richBlack">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <div className="md:mt-[41px] mt-[20px]">
                <CTABtn
                  linkto={"/services/"}
                  children={"Our Concept"}
                  active={false}
                  style={
                    "xl:py-[26px] xl:px-[41px] md:py-[15px] md:px-[20px] py-[7px] px-[10px] md:gap-[11px] gap-[5px]"
                  }
                />
              </div>
            </div>
            <div className="md:w-1/2 md:mt-0 mt-[50px]">
              <img
                src={rectangleImg1}
                alt="rectangleImg1"
                loading="lazy"
                className="object-cover w[718px] w-full h-full h[500px] rounded-[130px_0px_0px_0px]"
              />
            </div>
          </div>

          <div className="flex md:mt-[180px] mt-[80px] items-center md:flex-row  flex-col-reverse justify-between">
            <div className="md:w-1/2 md:mt-0 mt-[50px]">
              <img
                src={rectangleImg2}
                alt="rectangleImg1"
                loading="lazy"
                className="object-cover w[718px] w-full h-full h[500px] rounded-[0px_130px_0px_0px]"
              />
            </div>
            <div className="xl:max-w-[500px] md:w-[45%]">
              <h2 className="heading text-black xl:text-[50px] md:text-[40px] text-[30px] tracking-[1px]">
                The End Result
              </h2>
              <p className="paragraph md:mt-[23px] mt-[11px] xl:text-[22px] md:text-[18px] text-[15px] tracking-[0.22px] font-normal text-richBlack">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <div className="md:mt-[41px] mt-[20px]">
                <CTABtn
                  linkto={"/our-projects/"}
                  children={"Our Portfolio"}
                  active={false}
                  style={
                    "xl:py-[26px] xl:px-[40px] md:py-[15px] md:px-[21px] py-[7px] px-[10px] md:gap-[11px] gap-[5px]"
                  }
                />
              </div>
            </div>
          </div>

          <div className="md:mt-[206px] mt-[103px]">
            <Testimonial />
          </div>

          <div className="md:mt-[296px] mt-[140px]">
            <div>
              <h2 className="heading text-black xl:text-[50px] md:text-[40px] text-[30px] tracking-[1px] text-center">
                Creative project? Let's have a productive talk.
              </h2>
            </div>
            <div className="mt-[98px]">
              <div className="flex md:gap-[265px] justify-between sm:flex-row flex-col">
                <div className=" flex flex-col  md:w-[472px] sm:w-[200px] w-full relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full  outline-none paragraph xl:text-[30px] md:text-[20px] text-[15px] text-richBlack select-none h-[43px]"
                  />
                  <div className="absolute lg:bottom-[-11px] sm:bottom-[-4px] bottom-2 left-0 w-full h-[1px] bg-black"></div>
                </div>
                <div className=" flex flex-col  md:w-[472px] sm:w-[200px] w-full relative sm:mt-0 mt-[20px]">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full  outline-none paragraph xl:text-[30px] md:text-[20px] text-[15px] text-richBlack select-none h-[43px]"
                  />
                  <div className="absolute lg:bottom-[-11px] sm:bottom-[-4px] bottom-2 left-0 w-full h-[1px] bg-black"></div>
                </div>
              </div>
              <div className=" flex flex-col w-full relative lg:mt-[235px] sm:mt-[100px] mt-[20px]">
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full  outline-none paragraph xl:text-[30px] md:text-[20px] text-[15px] text-richBlack select-none h-[43px]"
                />
                <div className="absolute lg:bottom-[-11px] sm:bottom-[-4px] bottom-2 left-0 w-full h-[1px] bg-black"></div>
              </div>
            </div>
            <div className="mt-[51px] flex justify-center items-center">
              <CTABtn
                active={false}
                children={"Send Now"}
                style={
                  "xl:py-[26px] xl:px-[56px] md:py-[15px] md:px-[25px] py-[7px] px-[14px] md:gap-[11px] gap-[5px]"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:mt-[380px] md:mt-[200px] mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}
