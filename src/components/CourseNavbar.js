import React from 'react'

const CourseNavbar = () => {
  return (
    <div className=''>
      <nav className=" text-black p-4">
      {/* Laptop Navbar */}
      <div className="hidden lg:block lg:py-6 lg:shadow-xl">
        <ul className="space-y-4 font-bold text-xs text-center">
          <li className=' text-xs max-w-5xl py-1 pb-3 bg-blue-700 rounded-full pt-3  text-white px-2 mx-2 border-b-4 border-blue-700 ' >UG Courses</li>
          <li className=' text-xs max-w-5xl py-1 px-2' >Education</li>
          <li className=' text-xs max-w-5xl py-1 px-2' >Job Guarantee</li>
          <li className=' text-xs max-w-5xl py-1 px-2' >Doctorate/ph.D.</li>
          <li className=' text-xs max-w-5xl py-1 px-2' > Certificate</li>
          <li className=' text-xs max-w-5xl py-1 px-2' > Diploma</li>
          <li className=' text-xs max-w-5xl py-1 px-2' >Study Abroad</li>
        </ul>
      </div>

      {/* Tablet & Mobile Navbar */}
      <div className="lg:hidden md:block group">
        <ul className="flex space-x-4 just ">
          <li  className='max-w-5xl  text-blue-600 text-xs font-semibold'>UG Courses</li>
          <li className='max-w-5xl text-xs font-semibold   border-b-3 pb-1 border-blue-600 border-opacity-20 group-hover:border-opacity-70'>Executive Education</li>
          <li className='max-w-5xl text-xs font-semibold   border-b-3 pb-1 border-blue-600 border-opacity-20 group-hover:border-opacity-70'>Job Guarantee</li>
          <li className='max-w-5xl text-xs font-semibold   border-b-3 pb-1 border-blue-600 border-opacity-20 group-hover:border-opacity-70'>Doctorate/ph.D.</li>

          <li className='hidden md:block max-w-2xl  text-xs font-semibold'>Advanced Diploma</li>
          <li className='hidden md:block max-w-2xl text-xs font-semibold'>Study Abroad</li> 
          <li  className='hidden md:block max-w-2xl text-xs font-semibold'>Skills</li>
        </ul> 
        
      </div>
    </nav>
    </div>
  )
}

export default CourseNavbar
