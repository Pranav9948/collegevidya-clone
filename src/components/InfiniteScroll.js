import React from 'react'
import  '../App.css'
import { BsArrowRight } from 'react-icons/bs';
import Prashant from '../images/22_Prashant_BCA_Manipal.webp'
import pintu from '../images/25_Pintu Nath_BA_LPU (1).webp'
import peeyush from '../images/26_Peeyush_BBA_MANIPAL.webp'
import sharma from '../images/20_Prince Sharma_MCA_LPU.webp'
import rahul from '../images/19_Rahul Kumar_MCA_LPU-ONLINE.webp'
import sandeep from '../images/9_Sandeep_MBA_LPU.webp'
import saheb from '../images/10_Saheb Pal_B.webp'
import sachin from '../images/11_Sachin_BA_AMITY.webp'
import bala from '../images/12_Rushikesh Balasaheb Bagal_MTech_SVU.webp'
import rudra from '../images/13_Rudransh Singh Chauhan_BCA_Manipal.webp'
import sandiya from '../images/8_SANDHIYA_MCA_CU.webp'
import shubham from '../images/4_SHUBHAM_MCA_CU.webp'


const InfiniteScroll = () => {


// Dummy array of photos
const photos = [
  Prashant,pintu,peeyush,sharma,rahul,sandeep,saheb,sachin,bala,rudra,sandiya,shubham,
  Prashant,pintu,peeyush,sharma,rahul,sandeep,saheb,sachin,bala,rudra,sandiya,shubham,
  Prashant,pintu,peeyush,sharma,rahul,sandeep,saheb,sachin,bala,rudra,sandiya,shubham,
  Prashant,pintu,peeyush,sharma,rahul,sandeep,saheb,sachin,bala,rudra,sandiya,shubham,

]

  return (
   
    <div className="bg-black text-white py-8 px-4 md:px-16 lg:px-32 xl:px-48">
      <h2 className="text-5xl text-blue-600 font-bold text-center">89,000+</h2>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-700 text-white font-bold text-black px-6 py-3 rounded-lg flex items-center">
          Students ne Chuna <BsArrowRight className="ml-2" />
        </button>
      </div>
      <p className="text-center mt-4">
        sahi courses, sahi university aur career path
      </p>

      <div className="flex overflow-x-auto mt-8 photo-gallery-container">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Student ${index + 1}`}
            className="w-40 h-40 md:h-40 rounded-lg mr-4"
          />
        ))}
      </div>

    </div>
      
    
  )
}

export default InfiniteScroll
