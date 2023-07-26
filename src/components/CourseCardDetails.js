import React from 'react'

const CourseCardDetails = ({iconUrl,title,description,gap}) => {
  return (
    <div className="flex relative flex-col justify-center   text-center items-center w-1/4 shadow-lg  bg-cardBackgrndColor my-0 mx-3 my-4 rounded py-2  mb-3 border-0 md:w-1/6 ">
    <div className="  mx-auto rounded-full my-1">
       {iconUrl }
    </div>
    <div className='flex flex-col justify-center items-center mb-5'>
    <h3 className="text-xs mx-auto  my-1 font-bold">{title}</h3>
   
    </div>

<div className=' bg-blue-700 w-full   absolute left-0 right-0 py-1 bottom-0 rounded-b-lg'>
<p className="text-white  text-xs font-sans">{description}</p>
</div>
    
  </div>



  )
}

export default CourseCardDetails
