import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={icon} alt='' className='w-12 h-12 mb-9' />
      <h3 className='text-black-12 text-center text-xl mb-2'>{title}</h3>
      <p className='text-black-30 text-center'>{description}</p>
    </div>
  );
};

export default Feature;
