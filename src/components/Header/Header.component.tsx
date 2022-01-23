import React from "react";
import LogoWhite from "../../assets/logo/white.svg";

const Header = () => {
  return (
    <header className='bg-primary-blue flex justify-between px-40 pt-8 pb-64'>
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
