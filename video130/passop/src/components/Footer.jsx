import React from 'react';

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center bottom-0 w-full'>
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          
          <span>Pass</span><span className="text-green-500">OP/ &gt;</span>
          
          </div>
        
        <div className='flex'>
            Created with <img className='h-7' src="/public/logo/heart.svg" alt="" /> By NaturelDeveloper
        </div>
      
    </div>
  );
}

export default Footer;
