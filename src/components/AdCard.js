import React from 'react';

const AdCard = ({ title, description, iconUrl }) => {
  return (
    <div className="flex flex-col justify-center text-center items-center w-1/4 shadow-lg bg-cardBackgrndColor my-0 mx-1 rounded py-2 px-2  ">
      <div className="  mx-auto rounded-full my-1">
        <img src={iconUrl} alt="Icon" className="w-8 h-8" />
      </div>
      <div className='flex flex-col justify-center items-center '>
      <h3 className="text-xs mx-auto font-semibold my-1 font-bold">{title}</h3>
      <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default AdCard;
