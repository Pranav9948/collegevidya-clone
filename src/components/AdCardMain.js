import React from 'react'
import smileyImage from '../images/smiley.jpg';
import mentorImage from '../images/mentor.jpg';
import googleImage from '../images/google.png';
import AdCard from './AdCard';

const AdCardMain = () => {

    const datas = [
        {
            title: '4.9/5 (248)',
            description: 'Google Rating',
            iconUrl: googleImage,
          },
        {
          title: '500 +',
          description: 'Expert Mentors',
          iconUrl: mentorImage,
        },
        {
            title: '89000 +',
            description: 'Trusted',
            iconUrl: smileyImage,
          },
       
      ];

  return (
    <div className="container  flex justify-center items-center my-5 space-x-4 ">
      {datas.map((data, index) => (
        <AdCard key={index} title={data.title} description={data.description} iconUrl={data.iconUrl} />
      ))}
    </div>
  )
}

export default AdCardMain
