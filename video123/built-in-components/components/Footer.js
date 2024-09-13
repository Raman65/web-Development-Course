import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-around px-2 bg-slate-800 text-white py-4 text-xs">
    <div className="text-center">Mor App</div>
    <ul className="flex gap-6">
        <a href="/"><li className="text-xs">Home</li></a>
        <a href="/about"><li className="text-xs">About</li></a>
        <a href="/contact"><li className="text-xs">Contact</li></a>
    </ul>
</footer>
  );
}

export default Footer;