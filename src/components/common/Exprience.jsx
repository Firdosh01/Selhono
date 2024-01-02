import React from "react";

export default function Exprience() {
  return (
    <section>
      <div className="grid md:grid-cols-4 md:gap-[76px] gap-[20px] grid-cols-2">
        <div className="relative ">
          <div className="flex flex-col md:gap-[16px] gap-[5px] justify-center items-center">
            <h2 className="heading md:text-[85px]  text-[35px]    text-burlywood-50">
              12
            </h2>
            <p className="text-center paragraph xl:text-[22px] lg:text-[18px] text-[15px]  tracking-[0.22px] font-normal">
              Years Of Experiance
            </p>
          </div>
          <div className="absolute top-3 right-[-20px] bg-burlywood-50 w-[1px] h-[130px]"></div>
        </div>
        <div className="relative ">
          <div className="flex flex-col md:gap-[16px] gap-[5px] justify-center items-center">
            <h2 className="heading md:text-[85px]  text-[35px]  text-burlywood-50">
              1074
            </h2>
            <p className="text-center paragraph xl:text-[22px] lg:text-[18px] text-[15px]  tracking-[0.22px] font-normal">
              Success Project
            </p>
          </div>
          <div className="absolute top-3 xl:right-[-40px] right-[-20px] bg-burlywood-50 w-[1px] h-[130px] md:block hidden "></div>
        </div>
        <div className="relative">
          <div className="flex flex-col md:gap-[16px] gap-[5px] justify-center items-center">
            <h2 className="heading md:text-[85px]  text-[35px]  text-burlywood-50">
              98
            </h2>
            <p className="text-center paragraph xl:text-[22px] lg:text-[18px] text-[15px] tracking-[0.22px] font-normal">
              Active Project
            </p>
          </div>
          <div className="absolute top-3 right-[-20px] bg-burlywood-50 w-[1px] h-[130px] md:block hidden"></div>
        </div>
        <div>
          <div className="flex flex-col md:gap-[16px] gap-[5px] justify-center items-center">
            <h2 className="heading md:text-[85px]  text-[35px]  text-burlywood-50">
              583
            </h2>
            <p className="text-center paragraph xl:text-[22px] lg:text-[18px] text-[15px]  tracking-[0.22px] font-normal">
              Happy CUstomers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
