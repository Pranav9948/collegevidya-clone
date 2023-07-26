import React from 'react'

import { RiMenuFoldFill, RiShakeHandsFill } from 'react-icons/ri';
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineArrowUp } from "react-icons/ai";
import { PiCertificateBold } from 'react-icons/pi';
import {  } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { IoMdGitCompare } from 'react-icons/io';
import phoneGif from '../images/phoneGif.gif'

const CollegeVidyaCard = () => {

    const cardData = [
    {
      iconUrl: <AiOutlineArrowUp/>,
      title: 'Select Your Desired Course',
      description: 'Students Trust College Vidya for Unbiased Counselling.',
    },
    {
      iconUrl: <PiCertificateBold/>,
      title: 'Fill in the Basic Details',
      description: 'Online & Distance Education Colleges & Universities Listed on College Vidya',
    },
    {
      iconUrl: <RiMenuFoldFill/>,
      title: 'Explore Your Options',
      description: 'Guidance by Our Certified Counsellors',
    },
    {
      iconUrl: <IoMdGitCompare/>,
      title: 'Compare & Get the Best',
      description: 'Till You Complete Your Degree',
    },

    {
      iconUrl: <FcOnlineSupport/>,
      title: 'With You, For You',
      description: 'Till You Complete Your Degree',
    },
  ];



  return (
    <div>
      
     <div className=' w-full pb-2 items-start flex flex-col mt-10 px-3 py-5 lg:py-10 lg:px-5 bg-cardBackgrndColor '>

      <div className='flex flex-col md:flex-row md:items-center'>
      <h2 className='text-xl text-black m-0 lg:text-3xl'>College Vidya</h2>
      <h2 className='text-darkBlue ms-1 m-0 lg:text-4xl font-normal md:font-medium md:text-2xl '>Your One Stop Solution</h2>
    </div>

    <div className='mt-2 pb-4 lg:mt-5'>
        <p className='font-poppins text-sm lg:text-lg'>Answer simple questions and choose the best online university for you anywhere,anytime</p>
    </div>

     </div>
 

   {/* college vidya card starts */}

   <div className='flex flex-col bg:white md:flex-row md:items-center'>

   <div className="min-h-screen mt-0  p-2 pe-1 flex flex-wrap justify-between md:flex-col md:w-7/12 ">
  {cardData.map((data, index) => (
    <div key={index} className="w-full md:w-full p-2 ">
      <div className="bg-white rounded-lg shadow-lg p-6 flex  items-center mb-4">
        <div className="flex-shrink-0 mr-4 text-3xl text-blue-500 border-orange-200 border-2 p-3">
          {data.iconUrl}
        </div>
 
   <div>
   <h3 className="text-m max-w-full font-bold mb-2 lg:text-2xl">{data.title}</h3>
   <p className="text-gray-600 text-xs lg:text-lg">{data.description}</p>
   </div>


        
      </div>
    </div>
  ))}
</div>

  <div className='md:w-5/12  bg-white mt-20'>
      <div className='py-10  text-black  relative'>
      <div className=' absolute top-[150px] left-[50px] text-5xl md:text-3xl md:left-[20px]'>
      <AiFillLeftCircle  />
      </div>
      <div className='md:hidden'  >
      <img src={phoneGif} className=''  alt="phoneGifs" />
      </div>

      <div className='hidden md:block'  >
      <img src='https://img.freepik.com/premium-vector/smartphone-with-blank-white-screen_88272-1209.jpg'   alt="phoneGifs" />
      </div>


      <div className=' absolute top-[150px] right-[50px] text-5xl md:text-3xl md:right-[20px]'>
      <AiFillRightCircle  />
      </div>
      </div>
      

   </div>

   </div>


  
   
    </div>
  )
}

export default CollegeVidyaCard
