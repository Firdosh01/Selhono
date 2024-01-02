import React from "react";
import Img404 from "../assets/404.png";
import CTABtn from "../components/common/Button";

export default function Error() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="md:mt-[202px] mt-[101px]">
          <div className="relative ">
            <img src={Img404} alt="Img404" loading="lazy" className="object-cover w-[738px] h-full select-none"  />
            <div className=" absolute lg:top-[497px] lg:left-[641px]  -bottom-[300px]">
              <h2 className="heading xl:text-[250px] lg:text-[150px] text-[90px]  text-burlywood-50">
                404
              </h2>
              <blockquote className=" font-DMSerif xl:text-[35px] text-[20px] font-normal leading-[150%] tracking-[0.35px] mt-[15px]">
                We are sorry, but the page you requested was not found
              </blockquote>
              <div className="mt-[23px]">
                <CTABtn
                  linkto={"/"}
                  children={"Back To Home"}
                  active={false}
                  style={
                    "xl:py-[26px] xl:px-[54px] md:py-[20px] md:px-[48px] py-[12px] px-[20px] md:gap-[11px] gap-[5px]"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
