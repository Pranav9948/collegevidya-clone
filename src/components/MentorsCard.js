import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import amit from '../images/amit.webp';
import rishabh from '../images/rishabh.webp';
import pooja from '../images/pooja.jpeg';
import abdul from '../images/abdul.webp';

const MentorsCard = () => {
  const cards = [
    {
      name: 'Amit',
      experience: 'Career Expert: MBA',
      qualification: '4 Years Experience',
      imageUrl: amit,
    },
    {
      name: 'Rohit',
      experience: 'Sr Mentor: MCA',
      qualification: '6 Years Experience',
      imageUrl: abdul,
    },
    {
      name: 'Jenny',
      experience: 'Sr Mentor: MBA',
      qualification: 'MBA in Marketing',
      imageUrl: rishabh,
    },
    {
      name: 'Pooja',
      experience: 'Sr Mentor: BTECH',
      qualification: 'B.Tech in Computer Science',
      imageUrl: pooja,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-mentormg flex flex-col container my-5">
      <div className="container text-white mx-auto flex flex-col justify-center items-center py-10">
        <div className="">
          <h2 className="text-center font-xl">Right Guidance From Experts</h2>
          <div className="border-b-4 border-blue-700 pb-3 mx-12"></div>
        </div>
        <div className="container text-center mx-auto mt-4">
          <p className="text-xl px-10 mx-auto md:max-w-2xl md:px-10">
            College vidya has a team of 25000+ experts who are there to assist you and give you the right guidance for
            your successful career ahead
          </p>
        </div>
      </div>

      



     
    </div>
  );
};

export default MentorsCard;
