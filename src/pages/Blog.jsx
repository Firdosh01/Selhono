import React from "react";
import Frame from "../components/Frame";
import blogFrame from "../assets/Blog/BlogFrame.jpg";
import latestImg from "../assets/Blog/Rectangle 34.png";
import articlesImg1 from "../assets/Blog/Rectangle 35.png";
import articlesImg2 from "../assets/Blog/Rectangle 36.png";
import articlesImg3 from "../assets/Blog/Rectangle 37.png";
import Footer from "../components/common/Footer";

export default function Blog() {
  const blogArticles = [
    {
      id: 1,
      img: articlesImg1,
      heading: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
    {
      id: 2,
      img: articlesImg2,
      heading: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
    {
      id: 3,
      img: articlesImg3,
      heading: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
  ];
  return (
    <section>
      <div>
        <Frame frameImg={blogFrame} frameTitle={"Articles& News"} />
      </div>
      <div className="wrapper">
        <div className="container mt-[53px]">
          <div className="flex items-center justify-center">
            <div class="relative md:flex  flex-wrap items-center  max-w-[850px] justify-center">
              <input
                type="text"
                className="relative m-0 -mr-0.5    border-none outline-none 
               md:px-[33px] md:py-[34px] py-[10px] px-[10px] text-base font-normal select-none bg-[#F4F0EC] lg:w-[850px] md:w-[600px] w-[230px]  md:rounded-[20px] text-burlywood-100 md:text-[22px] text-[15px] leading-[150%] tracking-[0.22px] rounded-lg"
                placeholder="Search"
              />
              <div className="absolute top-[40%] md:right-5 right-1 md:w-[27px] md:h-[27px] w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M26.5881 24.2898L20.4826 18.1691C21.9525 16.2073 22.746 13.8195 22.7434 11.3659C22.7434 5.09879 17.6573 0 11.4059 0C5.1544 0 0.0683594 5.09879 0.0683594 11.3659C0.0683594 17.633 5.1544 22.7318 11.4059 22.7318C13.8533 22.7345 16.2352 21.939 18.192 20.4654L24.2975 26.5862C24.6065 26.8631 25.0096 27.011 25.424 26.9994C25.8384 26.9877 26.2326 26.8175 26.5257 26.5237C26.8188 26.2298 26.9886 25.8346 27.0002 25.4192C27.0118 25.0038 26.8643 24.5997 26.5881 24.2898ZM3.30765 11.3659C3.30765 9.76023 3.7826 8.1906 4.67244 6.85552C5.56229 5.52043 6.82705 4.47986 8.30681 3.86539C9.78657 3.25092 11.4148 3.09015 12.9857 3.4034C14.5566 3.71666 15.9996 4.48987 17.1322 5.62526C18.2647 6.76066 19.036 8.20724 19.3485 9.78208C19.6609 11.3569 19.5006 12.9893 18.8876 14.4727C18.2747 15.9562 17.2367 17.2241 15.905 18.1162C14.5732 19.0083 13.0075 19.4844 11.4059 19.4844C9.25887 19.4818 7.20056 18.6257 5.6824 17.1037C4.16425 15.5818 3.31022 13.5183 3.30765 11.3659Z"
                    fill="#CDA274"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-[54px]">
            <div>
              <h2 className=" heading xl:text-[50px] md:text-[40px] text-[30px] font-normal tracking-[1.2px] text-black">
                Latest Post
              </h2>
            </div>
            <div className="flex lg:gap-[72px] gap-[20px] md:flex-row flex-col items-start mt-[34px] justify-between">
              <div className="md:max-w-[649px] md:max-h-[400px]">
                <img
                  src={latestImg}
                  alt="blog image"
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:max-w-[489px] flex flex-col">
                <h4 className="text-black  lg:text-[25px] text-[20px] font-DMSerif font-normal leading-[125%] tracking-[0.5px]">
                  Low Cost Latest Invented Interior Designing Ideas
                </h4>
                <p className="font-normal paragraph lg:text-[22px] text-[18px]  tracking-[0.22px] lg:mt-[22px] mt-[5px] text-richBlack">
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpis dignissim maximus.posuere in.Contrary to popular
                  belief.
                  <br />
                  <br />
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classica.
                </p>
                <div className="lg:mt-[41px] mt-[5px] flex justify-between items-center">
                  <div>
                    <span className="font-normal paragraph lg:text-[16px] text-[12px]  tracking-[0.16px] lg:mt-[22px] mt-[10px] text-richBlack">
                      26 December,2022{" "}
                    </span>
                  </div>
                  <div className="lg:w-[52px] lg:h-[52px] md:w-[40px] md:h-[40px] w-[35px] h-[35px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <circle cx="26" cy="26" r="26" fill="#F4F0EC" />
                      <path
                        d="M23.772 32.6855L29.7148 25.9998L23.772 19.3141"
                        stroke="#292F36"
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

          <div className="mt-[141px]">
            <h2 className=" heading lg:text-[50px] md:text-[40px] text-[30px] font-normal tracking-[1px] text-black">
              Articles & News
            </h2>
            <div className="grid items-center md:grid-cols-3 grid-cols-1 gap-[71px] mt-[83px]">
              {blogArticles.map((blogArticle) => (
                <div key={blogArticle.id} className="flex flex-col cursor-pointer ">
                  <div className="relative ">
                    <img
                      src={blogArticle.img}
                      alt="article image"
                      loading="lazy"
                      className="object-cover w-full h-full select-none"
                    />
                  </div>
                  <div>
                    <h2 className="heading text-black xl:text-[25px] md:text-[18px] tracking-[0.5px]">
                      {blogArticle.heading}
                    </h2>
                    <div className="mt-[20px] flex justify-between items-center">
                      <p className=" paragraph md:text-[16px] text-[15px] text-richBlack tracking-[0.16px]">
                        {blogArticle.date}
                      </p>
                      <div className="xl:w-[52px] xl:h-[53px] w-[32px] h-[33px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 52 52"
                          fill="none"
                        >
                          <circle cx="26" cy="26" r="26" fill="#F4F0EC" />
                          <path
                            d="M23.772 32.6855L29.7148 25.9998L23.772 19.3141"
                            stroke="#292F36"
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
        </div>
      </div>
      <div  className="md:mt-[190px] mt-[100px]">
        <Footer />
      </div>
    </section>
  );
}
