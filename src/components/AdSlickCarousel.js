import React from 'react';
import fees from '../images/fees.jpeg'
import fake from '../images/fake.jpeg'
import compare from '../images/compare.webp'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const AdSlickCarousel = () => {

    const data = [
    {
      id: 1,
      img: fake,
    },
    {
      id: 2,
      img: compare    },
    {
      id: 3,
      img: fees  },
      {
      id: 1,
      img: fake,
    },
    {
      id: 2,
      img: compare    },
    {
      id: 3,
      img: fees  },
    
  ];
  
  



    const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
     
      <div className='relative flex items-center mt-20 md:mt-0 '>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default AdSlickCarousel

