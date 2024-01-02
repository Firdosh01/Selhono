import React from 'react'
import Logo1 from '../../assets/Vector (1).png'
import Logo2 from '../../assets/Frame.png'
import Logo3 from '../../assets/Frame (1).png'
import Logo4 from '../../assets/Frame (2).png'
function Logos() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='w-[300px] h-[100px] '>
          <img src={Logo1} alt="" className='w-full h-full py-[25px] px-[49px] select-none' />
        </div>
        <div className='w-[364px] h-[100px]'>
          <img src={Logo2} alt="" className='w-full h-full py-[25px] px-[71px] select-none' />
        </div>
        <div className='w-[362px] h-[100px] '>
          <img src={Logo3} alt="" className='w-full h-full py-[20px] px-[87px] select-none' />
        </div>
        <div className='w-[90px] h-[90px]'>
          <img src={Logo4} alt=""  className='w-full h-full select-none' />
        </div>
      </div>
    </div>
  )
}
export default Logos 