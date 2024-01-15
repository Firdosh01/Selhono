import React from 'react'
import Frame from '../components/Frame'
import teamFrame from '../assets/Team/Rectangle 20 (1).png'
import { teamMembers } from '../components/common/constent'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <section>
      <div>
      <Frame frameImg={teamFrame} frameTitle={"Team"} />
      </div>
      <div className='wrapper'>
        <div className='container'>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-[22px] gap-y-[50px] mt-[89px]'>
            {teamMembers.map((teamMember) => {
              return (
               <Link to={`/our-team/${teamMember.id}`}>
                <div key={teamMember.id} className='flex flex-col gap-[17px]'>
                  <div className='cursor-pointer '>
                    <img src={teamMember.img} alt="team image" className='object-cover w-full h-full select-none' loading='lazy' />
                  </div>
                  <div className='flex flex-col gap-[16px] justify-center items-center'>
                    <div>
                      <h2 className='lg:text-[25px] text-[20px] font-DMSerif font-normal leading-[150%] tracking-[0.25px] text-black'>{teamMember.name}</h2>
                      <p className='font-Jost lg:text-[18px] text-[15px] text-center font-normal leading-[150%] tracking-[0.18px] text-richBlack'>{teamMember.role}</p>
                    </div>
                    <div className='flex gap-[37px] md:text-[18px] text-[15px] cursor-pointer'>
                      <FaFacebookF />
                      <FaTwitter />
                    </div>
                  </div>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className='lg:mt-[300px] mt-[150px]'>
      <Footer />
      </div>
    </section>
  )
}
