import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          
          <span>Pass</span><span className="text-green-500">OP/ &gt;</span>
          
          </div>
        
        <button className="text-white bg-green-700 my-5 rounded-full flex gap-3 justify-center items-center p-1 ring-white ring-1">
          <img className="bg-black rounded-full " src="/public/logo/github.svg" alt="github logo" />
          <span className="font-bold ">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
