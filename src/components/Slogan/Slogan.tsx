import React from "react";
import ReactTooltip from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";

interface SloganProps {
  slogan: string;
}

const notify = () => toast.success("Copied to clipboard!");

const Slogan: React.FC<SloganProps> = ({ slogan }) => {
  return (
    <>
      <div
        className='px-4 py-5 bg-black-95 cursor-pointer'
        data-tip={slogan}
        onClick={() => {
          navigator.clipboard.writeText(slogan);
          notify();
        }}
      >
        <p className='text-black-12'>{slogan}</p>
      </div>
      <ReactTooltip place='left' delayHide={1000} effect='solid'>
        Click to copy
      </ReactTooltip>
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
};

export default Slogan;
