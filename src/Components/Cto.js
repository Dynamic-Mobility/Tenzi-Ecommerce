import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineLock } from 'react-icons/ai'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { BsArrowReturnLeft } from 'react-icons/bs'

const Cto = () => {
  return (
    <section className='bg-bgGreen p-4 text-white grid items-center md:grid-cols-4 grid-cols-1 gap-4 md:h-32 h-auto md:space-y-0 space-y-8'>
        <div className='place-self-center flex items-center gap-4'>
            <BiSupport className='text-4xl text-yellow'/>
            <p className=''>Online Support 24/7. <br /> Friendly and dedicated Team</p>
        </div>
        <div className='place-self-center flex items-center gap-4'>
            <AiOutlineLock className='text-4xl text-yellow'/>
            <p className=''>100% Payment Secure <br /> 30 Days Money Back Guarantee</p>
        </div>
        <div className='place-self-center flex items-center gap-4'>
            <MdOutlineLocalShipping className='text-4xl text-yellow'/>
            <p className=''>Free shipping available</p>
        </div>
        <div className='place-self-center flex items-center gap-4'>
            <BsArrowReturnLeft className='text-4xl text-yellow'/>
            <p className=''>Easy Return Policy <br /> 10 Days Fastly And Easy Return</p>
        </div>
    </section>
  )
}

export default Cto