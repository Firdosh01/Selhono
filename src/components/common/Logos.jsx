import React from 'react'
import Logo1 from '../../assets/Vector (1).png'
import Logo2 from '../../assets/Frame.png'
import Logo3 from '../../assets/Frame (1).png'
import Logo4 from '../../assets/Frame (2).png'
function Logos() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className=' py-[25px] px-[48px]'>
          <img src={Logo1} alt=""  />
        </div>
        <div>
          <img src={Logo2} alt="" />
        </div>
        <div className='py-[20px] px-[87px]'>
          <img src={Logo3} alt="" />
        </div>
        <div>
          <img src={Logo4} alt=""  />
        </div>
      </div>
    </div>
  )
}

export default Logos
