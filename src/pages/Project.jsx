import React from 'react'
import Frame from '../components/Frame'
import projectFrame from '../assets/Projects/Rectangle 20 (1).png'
import { projects } from '../components/common/constent'
import Footer from '../components/common/Footer'

function Project() {
  const projectsCategory = [
    {id:1, name: "Bathroom"},
    {id:2, name: "Bed Room"},
    {id:3, name: "Kitchan"},
    {id:4, name: "Living Area"},
  ]
  return (
    <section>
      <Frame   frameImg={projectFrame} frameTitle={"Our Project"} />
      <div className='wrapper'>
        <div className='container'>
          <div className='mt-[37px] flex justify-center items-center lg:gap-[96px] gap-[10px] border border-[#CDA274] rounded-[18px]'>
            {projectsCategory.map((projectCategory) => (
              <div>
                <div>
                  <h5 className='text-black  font-Jost md:text-[18px] text-[15px] font-semibold leading-[125%] tracking-[0.36px] py-[26px]'>{projectCategory.name}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-[50px] gap-y-[38px] mt-[38px]'>
            {projects.map((project) => (
              <div>
                <div>
                  <img src={project.img} alt="" className='object-cover w-full h-full select-none' />
                  <div className="flex items-center justify-between mt-[38px]">
                    <div>
                      <span className="heading tracking-[0.5px] lg:text-[25px] text-[20px]">
                        {project.title}
                      </span>
                      <p className="font-normal paragraph lg:text-[22px] text-[18px]  tracking-[0.22px] mt-[4px] text-richBlack">
                       {project.tag}
                      </p>
                    </div>
                    <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" fill="none">
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                      <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-[80px]'>
      <Footer />
      </div>
    </section>
  )
}

export default Project
