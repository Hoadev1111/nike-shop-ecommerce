import React from 'react';

const SocialLinks = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="flex items-center cursor-pointer 
        sm:w-5 sm:h-5 md:w-6 md:h-6 w-8 h-8 transition-all 
        duration-200 hover:scale-110"
      />
    </>
  );
};

export default SocialLinks;
