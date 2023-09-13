import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import { background } from '../assets';

function HeroNav() {

  
  const backgroundImgUrl = background;

  const divStyle = {
    background: `url(${backgroundImgUrl})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div
      className="w-full h-full relative "
      style={divStyle}
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

      <Nav />
      <Hero />
    </div>
  );
}

export default HeroNav;
