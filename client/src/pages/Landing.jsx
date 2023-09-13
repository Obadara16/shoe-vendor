import React from 'react';
import {  CustomHeroNav, Footer, ShoeList } from '../containers';



const Landing = () => {
  

  return (
    <section className="w-full h-full relative">
      <CustomHeroNav/>
      <ShoeList />
      <Footer />
    </section>
  );
};

export default Landing;
