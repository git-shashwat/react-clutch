import React from "react";
import NextIcon from "../../assets/icons/arrow.svg";

const Pagination = () => {
  return (
    <>
      <button className='text-primary-blue px-6 py-3 rounded'></button>
      <div className='flex gap-2'>
        <button className='text-black-100 bg-primary-blue text-sm w-6 h-6 rounded-full'>
          1
        </button>
        <button className='text-black-100 bg-primary-blue text-sm w-6 h-6 rounded-full'>
          2
        </button>
        <button className='text-black-100 bg-primary-blue text-sm w-6 h-6 rounded-full'>
          3
        </button>
        <p className='text-primary-blue text-sm'>...</p>
        <button className='text-black-100 bg-primary-blue text-sm w-6 h-6 rounded-full'>
          21
        </button>
      </div>
      <button className='flex justify-center items-center gap-1 text-primary-blue'>
        Next
        <img src={NextIcon} alt='' />
      </button>
    </>
  );
};

export default Pagination;
