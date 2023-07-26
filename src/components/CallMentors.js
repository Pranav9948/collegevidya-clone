import React from 'react'
import { AiOutlineArrowRight, AiTwotoneMail } from 'react-icons/ai'
import { BsFillGearFill, BsTelephoneFill } from 'react-icons/bs'
import { IconName, LuUtilityPole } from "react-icons/lu";
import mentor from '../images/mentorrs.png'

const CallMentors = () => {
  return (
   
    <div className='flex flex-col md:flex-row md:justify-center md:items-center lg:flex-row lg:items-center lg:justify-center mb-32'>

      <div className='container my-5'>
 
    <div>
        <h2 className='m-0 text-dark md:text-xl mb-2 lg:text-2xl'>Talk to our Experts</h2>
    </div>

     <div className='bg-blue-100 rounded py-4 px-3 mb-3 mt-4 relative inline-block'>

       <span className='text-xs shadow-sm rounded bg-darkBlue text-white  font-bold py-1 px-3 ms-3  absolute left-5 -top-2 '>Support</span>
 
      <p className='mb-3 mt-3 font-poppins'> <span className='md:flex'> <span className='flex items-center'><BsTelephoneFill className='me-2'/> News Student :</span> <a href="" className='text-darkBlue font-bold block md:inline ms-1'>1800-420-5757</a></span></p>

      <p className='mb-3 font-poppins'> <span className='md:flex'><span className='flex items-center'><BsFillGearFill className='me-2'/> Existing Student :</span> <a href="" className='text-darkBlue font-bold block md:inline ms-1'>1800-320-5757</a></span></p>

      <p className='mb-3 font-poppins'><span className='md:flex'><span className='flex items-center'> <AiTwotoneMail className='me-2'/> Email  :</span> <a href="" className='text-darkBlue font-bold block md:inline ms-1'>cvcare@collegevidya.com</a></span></p>

      <p className='mb-3 font-poppins'><span className='md:flex'><span className='flex items-center'><LuUtilityPole className='me-2'/> Visit Us : </span><a href="" className='text-darkBlue font-bold block md:inline ms-1'>(10 AM to 7PM)</a></span></p>


     </div>

     <div>
        <p className='font-poppins mt-0 mb-2 lg:my-3 lg:text-xl'>Need answers ? Call Us !</p>
        <p className='font-poppins text-xs mt-0 mb-2 lg:my-3 lg:text-sm'> Our team of experts are available for you round the clock</p>
        <p className=' inline-block items-center rounded py-3  cursor-pointer text-sm bg-bookbtn text-btnClr border-1 border-bookbtn px-4 lg:px-8 lg:font-bold lg:mt-3'>Book Your 30 Mins Expert Career Advice </p>
     </div>

      </div>

  <div className='lg:me-10'>

  <img src={mentor} alt="mentors" />

  </div>



      </div>
  )
}

export default CallMentors
