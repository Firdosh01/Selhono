import React from "react";
import subFooterImg from "../../assets/Rectangle 10.png";
import CTABtn from "../Button";
export default function SubFooter() {
  return (
    <div className="relative">
      <div className="relative">
        <img
          src={subFooterImg}
          alt=""
          className="object-cover w-full lg:h-[430px] md:h-[215px] h-[170px] select-none"
        />
        <div className="subFooter_text">
          <div className="flex flex-col items-center justify-center">
            <h4 className="heading xl:text-[50px] lg:text-[40px] md:text-[30px] text-[17px] text-white xl:mt-[80px] lg:mt-[40px] md:mt-[20px] mt-[5px] text-center">
              Wanna join the interno?
            </h4>
            <p className="xl:mt-[11px] mt-[5px] paragraph tracking-[0.22px] font-medium text-white text-center md:text-[22px] text-[15px]">
              It is a long established fact will be distracted.
            </p>
            <div className="xl:mt-[32px] mt-[15px]">
              <CTABtn
                active={true}
                linkto={"/contact"}
                children={"Contact With Us"}
                style={
                  "xl:py-[26px] xl:px-[37px] md:py-[15px] md:px-[17px] py-[5px] px-[8px] md:gap-[11px] gap-[5px]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
