import React from 'react'
import {  PiStudentBold } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import CourseCardDetails from './CourseCardDetails';

const CourseCard = () => {


    const datas = [
        {
            title: 'online MBA',
            description: 'compare 27 Now',
            iconUrl: <PiStudentBold/>,
            gap:'2 Years'
          },
       
          {
            title: 'online MBA Dual',
            description: 'compare 27 Now',
            iconUrl: <GiGraduateCap/>,
            gap:'2 Years'
          },


          {
            title: 'online M.com',
            description: 'compare 27 Now',
            iconUrl: <FaUserGraduate/>,
            gap:'2 Years'
          },


          {
            title: 'online M.com',
            description: 'compare 27 Now',
            iconUrl: <FaUserGraduate/>,
            gap:'2 Years'
          },

          
          {
            title: 'online b.com',
            description: 'compare 27 Now',
            iconUrl: <BsNewspaper/>,
            gap:'3 Years'
          },

          {
            title: 'online MBA',
            description: 'compare 27 Now',
            iconUrl: <PiStudentBold/>,
            gap:'2 Years'
          },
       
          {
            title: 'online MBA Dual',
            description: 'compare 27 Now',
            iconUrl: <GiGraduateCap/>,
            gap:'2 Years'
          },


          {
            title: 'online M.com',
            description: 'compare 27 Now',
            iconUrl: <FaUserGraduate/>,
            gap:'2 Years'
          },


          {
            title: 'online M.com',
            description: 'compare 27 Now',
            iconUrl: <FaUserGraduate/>,
            gap:'2 Years'
          },

          
          {
            title: 'online b.com',
            description: 'compare 27 Now',
            iconUrl: <BsNewspaper/>,
            gap:'3 Years'
          },


          {
            title: 'online M.com',
            description: 'compare 27 Now',
            iconUrl: <FaUserGraduate/>,
            gap:'2 Years'
          },

          
          {
            title: 'online b.com',
            description: 'compare 27 Now',
            iconUrl: <BsNewspaper/>,
            gap:'3 Years'
          },


          
       
       
      ];



  return (
    <div className='container '>
     <div className='flex flex-wrap  '>

     {datas.map((data, index) => (
        <CourseCardDetails key={index} title={data.title} description={data.description} iconUrl={data.iconUrl} gap={data.gap} />
      ))}

     </div>
    </div>
  )
}

export default CourseCard
