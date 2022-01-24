import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const Product: React.FC<FeatureProps> = ({ title, description, image }) => {
  return (
    <div className='flex-col mb-4 text-left md:mb-0'>
      <img src={image} alt='' className='mb-4' />
      <h3 className='text-black-12 text-xl mb-2'>{title}</h3>
      <p className='text-black-30'>{description}</p>
    </div>
  );
};

export default Product;
