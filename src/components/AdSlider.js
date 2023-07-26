import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import laptopImage1 from '../images/laptop_image1.webp';
import laptopImage2 from '../images/laptop_image2.webp';
import laptopImage3 from '../images/laptop_image3.webp';
// Import other laptop images

import tabletImage1 from '../images/tablet_image1.webp';
import tabletImage2 from '../images/tablet_image2.webp';
import tabletImage3 from '../images/tablet_image3.webp';
// Import other tablet images

import mobileImage1 from '../images/mobile_image1.webp';
import mobileImage2 from '../images/mobile_image2.webp';
import mobileImage3 from '../images/mobile_image3.webp';
// Import other mobile images

function AdSlider() {
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState({
    laptopUrl: laptopImage1,
    tabletUrl: tabletImage1,
    mobileUrl: mobileImage1,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setImageUrls({
          laptopUrl: mobileImage1,
          tabletUrl: mobileImage2,
          mobileUrl: mobileImage3,
        });
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setImageUrls({
          laptopUrl: tabletImage1,
          tabletUrl: tabletImage2,
          mobileUrl: tabletImage3,
        });
      } else {
        setImageUrls({
          laptopUrl: laptopImage1,
          tabletUrl: laptopImage2,
          mobileUrl: laptopImage3,
        });
      }
    };

    // Initial setup on component mount
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      laptopUrl: laptopImage1,
      tabletUrl: tabletImage1,
      mobileUrl: mobileImage1,
    },
    {
      laptopUrl: laptopImage2,
      tabletUrl: tabletImage2,
      mobileUrl: mobileImage2,
    },
    {
      laptopUrl: laptopImage3,
      tabletUrl: tabletImage3,
      mobileUrl: mobileImage3,
    },
  ];

  return (

    <div className='-mt-24 lg:-mt-0'>

    <div className='max-w-[1400px] h-[480px] w-full m-auto  py-4 px-4 relative group  '>
      <div
        style={{
          backgroundImage: `url(${imageUrls.laptopUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className='w-full h-full rounded-2xl duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AdSlider;
