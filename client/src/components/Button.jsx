import React from 'react';

const Button = ({ text, bgColor, hoverBgColor, borderColor,  hoverBorderColor, textColor }) => {
  return (
    <button className={`relative  ${borderColor} ${bgColor} ${textColor ? textColor : "text-white"} px-8 py-2 overflow-hidden group rounded-md whitespace-nowrap`}>
      <span className={`absolute left-0 top-0 h-full ${hoverBgColor} ${hoverBorderColor} w-0 transition-all duration-500 group-hover:w-full`}></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
