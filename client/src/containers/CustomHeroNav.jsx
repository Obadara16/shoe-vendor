import React from 'react';
import Nav from './Nav';
import CustomHero from './CustomHero';
import { MainWrapper } from '../wrapper';

function CustomHeroNav() {

  return (
    <div
      className="w-full h-full relative"
    >
      <Nav />
      <CustomHero />
    </div>
  );
}

export default MainWrapper(CustomHeroNav, 'customheronav', 'h-full');
