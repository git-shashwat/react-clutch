import React from "react";

interface SloganProps {
  slogan: string;
}

const Slogan: React.FC<SloganProps> = ({ slogan }) => {
  return (
    <div className='px-4 py-5 bg-black-95'>
      <p className='text-black-12'>{slogan}</p>
    </div>
  );
};

export default Slogan;
