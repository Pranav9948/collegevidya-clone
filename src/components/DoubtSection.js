import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { PiNumberCircleFiveFill, PiNumberCircleFourFill, PiNumberCircleOneBold, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from 'react-icons/pi';

const DoubtSection = () => {


    const headers = [
        {
          id: 1,
          icon: <PiNumberCircleOneBold/>,
          title: 'Do payments made by students go directly into the university account ?',
          
        },
        {
          id: 2,
          icon: <PiNumberCircleTwoFill/>,
          title: 'How is College Vidya different from others',
        },
        {
            id: 3,
            icon: <PiNumberCircleThreeFill/> ,
            title: 'what are college vidya Advantages',
          },
          {
            id: 4,
            icon: <PiNumberCircleFourFill/> ,
            title: 'can there be errors on College Vidya',
          },

          {
            id: 5,
            icon: <PiNumberCircleFiveFill/> ,
            title: 'Are there any charges for college vidya services',
          },
      ];



  return (
    <div className='container mx-auto text-center py-2 flex flex-col'>
     
     <div>
     <h2 className='m-0 py-5 text-dark md:text-xl lg:text-3xl font-poppins text-lg '>Lets Clear Some Doubts</h2>
     </div>


     <div className="flex flex-col items-center justify-between px-4  bg-white   rounded-lg">
      {headers.map((header) => (
        <div key={header.id} className="flex items-center py-3 shadow-lg  border-white justify-between my-2 border-2  bg-white border-gray-50 w-full px-3">
          <div className="mr-4 text-xl  md:text-2xl  lg:text-3xl text-blue-700">{header.icon}</div>
          <div className='text-m md:text-lg lg:text-xl'>{header.title}</div>
          <div>
          <AiOutlineDown className="ms-4" />
          </div>
        </div>
      ))}
    </div>

    
      
    </div>
  )
}

export default DoubtSection
