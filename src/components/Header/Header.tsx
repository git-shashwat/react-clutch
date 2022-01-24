import React from "react";
import LogoWhite from "../../assets/logo/white.svg";

const Header: React.FC = () => {
  return (
    <header className='bg-primary-blue px-8 pb-40 gap-2 flex md:justify-between md:px-40 pt-8 md:pb-64'>
      <img src={LogoWhite} alt='logo' className='logo' />
      <div className='flex gap-8'>
        <button className='text-black-100'>Sign In</button>
        <button className='bg-black-100 text-primary-blue px-6 py-3 rounded'>
          Dukaan for PC
        </button>
      </div>
    </header>
  );
};

export default Header;
