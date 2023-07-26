import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

import finance from '../images/financial-express.webp';
import outlook from '../images/outlook.webp';
import toi from '../images/toi.webp';
import acn from '../images/acn.webp';
import ht from '../images/ht.webp';
import forbes from '../images/forbes.webp';

const NewsPaperCard = () => {
  // State to store the current breakpoint
  const [currentBreakpoint, setCurrentBreakpoint] = useState(getCurrentBreakpoint());

  // Function to get the current breakpoint based on window width
  function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width >= 1000) {
      return 'laptop';
    } else if (width >= 768) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }

  // Function to update the breakpoint when the window is resized
  function handleResize() {
    setCurrentBreakpoint(getCurrentBreakpoint());
  }

  // Attach the handleResize function to the window resize event
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { id: 1, src: forbes, alt: 'Image 6' },
    { id: 2, src: outlook, alt: 'Image 2' },
    { id: 3, src: finance, alt: 'Image 1' },
   
    { id: 4, src: toi, alt: 'Image 3' },
    { id: 5, src: acn, alt: 'Image 4' },
    { id: 6, src: ht, alt: 'Image 5' },
    { id: 7, src: forbes, alt: 'Image 6' },
  ];

  // Function to render the cards based on the current breakpoint
  function renderCards() {
    switch (currentBreakpoint) {
      case 'laptop':
        return (
          <div className="flex justify-between">
            {images.slice(0, 3).map((image) => (
              <div key={image.id} className="w-full px-2">
                <NewsCard image={image} />
              </div>
            ))}
          </div>
        );
      case 'tablet':
        return (
          <div className="flex justify-between">
            {images.slice(0, 2).map((image) => (
              <div key={image.id} className="w-full px-2">
                <NewsCard image={image} />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="flex">
            {images.slice(0, 1).map((image) => (
              <div key={image.id} className="w-full px-2">
                <NewsCard image={image} />
              </div>
            ))}
          </div>
        );
    }
  }

  return (
    <div className="container flex flex-col">
      <div className="mb-2">
        <h6 className="text-darkBlue font-normal">Find Us In The News !</h6>
      </div>
      <div>
        <h2 className="font-semibold text-xl">We've been in the news !</h2>
      </div>
      {renderCards()}
    </div>
  );
};

export default NewsPaperCard;
