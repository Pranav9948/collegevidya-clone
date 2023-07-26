import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { BsHandThumbsUpFill } from "react-icons/bs";
import {  RiShakeHandsFill } from "react-icons/ri";
import { FaUserGraduate } from 'react-icons/fa';

const WhatMakesUsApart = () => {


  const cardData = [
    {
      iconUrl: <IoIosPeople/>,
      title: '5 Million +',
      description: 'Students Trust College Vidya for Unbiased Counselling.',
    },
    {
      iconUrl: <BsHandThumbsUpFill/>,
      title: '100 + approved',
      description: 'Online & Distance Education Colleges & Universities Listed on College Vidya',
    },
    {
      iconUrl: <RiShakeHandsFill/>,
      title: 'Unbiased Experts',
      description: 'Guidance by Our Certified Counsellors',
    },
    {
      iconUrl: <FaUserGraduate/>,
      title: 'Complete Assistance',
      description: 'Till You Complete Your Degree',
    },
  ];


  return (
    <div className='flex flex-col  me-auto max-w-full container mb-1 md:mb-3 lg:flex  lg:flex-row lg:justify-between lg:items-center lg:mt-20'>
      
  <div className=' text-left ps-5 mt-14 lg:w-4/6 ' >
   <h2 className='text-2xl font-semibold text-left lg:text-4xl '> What Makes <div> us stand <span className='text-blue-700'>Apart</span> </div></h2>
  </div>

  
  <div className=" p-2 me-1 mt-10 grid grid-cols-2 gap-4 ">
  {cardData.map((data, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg p-4 pb-10 flex flex-col items-left   border-l-4 border-blue-600 relative border-t-0 border-r-0 mb-5">
      <div className="flex-shrink-0 ms-4 absolute -top-4 text-4xl text-orange-400">
        {data.iconUrl}
      </div>
      <div className='mt-3'>
        <h3 className="text-m mb-2">{data.title}</h3>
        <div className="text-gray-600 text-xs max-w-full">{data.description}</div>
      </div>
    </div>
  ))}
</div>



    </div>
  )
}

export default WhatMakesUsApart



