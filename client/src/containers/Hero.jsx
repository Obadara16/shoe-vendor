import React from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import tw from '../assets/tw.png';
import bubble from '../assets/bubble.png';
import share from '../assets/share.png';
import info from '../assets/info.png';
import { background, shoeHero } from '../assets';

function Hero() {
  return (
    <div className="relative w-full flex flex-col h-full pt-36 pb-24">
      <div className='flex pb-52  w-[85%] mx-auto'>
        <div className="text-white flex mt-8 flex-col gap-4 pb-16 pl-8">
          <h1 className="text-2xl text-black font-semibold font-lobster">Chatterroeu</h1>
          <small className='text-[14px] text-gray-800'>Entrez dans le Style : <br/> Découvrez Votre Paire Parfaite Aujourd'hui</small>
          <button className="py-2 px-12 bg-white text-black rounded-full text-[14px] hover:bg-black hover:text-white transition duration-300 ease-in-out w-fit">Shop</button>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
