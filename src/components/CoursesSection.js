import React from 'react'
import CourseNavbar from './CourseNavbar'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  return (
    <div className='flex flex-col space-y-3  justify-center  min-h-screen  lg:flex-row lg:space-x-8 lg:mt-20 '>
       <CourseNavbar/>
       <CourseCard/>
    </div>
  )
}

export default CoursesSection

