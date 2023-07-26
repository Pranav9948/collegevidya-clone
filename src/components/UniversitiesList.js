import React from 'react'
import mainpal from '../images/manipal.png'
import jain from '../images/jain.jpeg'
import dy from '../images/dy.jpeg'
import lovely from '../images/lovely.jpeg'

import  amits from '../images/amity.jpeg'
import sastra from '../images/sastra.jpeg'
import  chandigarh from '../images/chandigarh.jpeg'
import loyola from '../images/loyola.webp'
import iit from '../images/iit.webp'
import ce from '../images/duke-ce-logo.webp'
import mica from '../images/mica.webp'

const UniversitiesList = () => {


  const images = [
    mainpal,
    jain,
    dy,
    lovely,
    mica,
    amits,
    sastra,
    loyola,
    iit,
    chandigarh,
    ce,
    lovely,

  ];


  return (
    <div className='flex flex-col '>

       <div className='text-center font-medium text-2xl mx-5'>
          <h1 className=''>Approved Online & Distance Education Universities</h1>
       </div>



    <div className="min-h-screen  p-4 mt-10">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="border-2 border-gray-300 rounded-lg p-3">
            <img src={imageUrl} alt="sas" className="w-full h-full object-cover  " />
          </div>
        ))}
      </div>
    </div>
  
      
    </div>
  )
}

export default UniversitiesList
