import React, { useState } from 'react';
import { RiAddLine } from "react-icons/ri";

function Input() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='flex items-center justify-center space-x-4'>
      <input
        type="text"
        className='w-8/12 bg-black text-white focus:bg-white focus:text-black focus:border-black border-2 border-transparent outline-none transition-colors duration-300 p-2 font-semibold text-lg rounded-md h-12'
        placeholder='Enter text'
      />
      <button
        onClick={handleButtonClick}
        className={`flex items-center justify-center h-12 w-12 rounded-full focus:outline-none border-4 transition-all duration-300
        ${isClicked ? 'bg-white border-blue-500 text-blue-500' : 'bg-blue-600 border-transparent text-white'}
        `}
      >
        <RiAddLine size={28} />
      </button>
    </div>
  );
}

export default Input;
