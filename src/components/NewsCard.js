// NewsCard.js

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const NewsCard = ({ image }) => {
  const imagesArray = Array.isArray(image) ? image : [image];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imagesArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imagesArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full">
      <div className="h-[400px] w-full my-5 shadow-lg rounded-lg relative group">
        <div>
          <img
            src={imagesArray[currentIndex].src}
            alt="image"
            className="h-[400px] shadow-lg rounded-lg"
          />
        </div>

        {/* Left Arrow (Conditionally rendered for the first card) */}
        {currentIndex === 0 && (
          <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-4 rounded-full p-2 bg-slate-300 text-slate-600 text-5xl cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={20} />
          </div>
        )}

        {/* Right Arrow (Conditionally rendered for the last card) */}
        {currentIndex === imagesArray.length - 1 && (
          <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-4  rounded-full p-2 bg-slate-300 text-slate-600 text-5xl cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={20} />
          </div>
        )}

        <div className="flex top-4 mr-5 py-2">
          {imagesArray.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
