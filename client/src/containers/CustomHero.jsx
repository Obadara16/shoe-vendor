import React from 'react'
import { shoeHero } from '../assets';
import { MainWrapper } from '../wrapper';
import { Button } from '../components';
import { Link } from 'react-router-dom';

const CustomHero = () => {
  return (
    <div className="relative w-full flex flex-col-reverse h-full py-32 ">
      <div className="flex-grow hidden lg:flex justify-center items-center relative">
        <img src={shoeHero} alt="Shoe Image" className="w-3/4 h-[50vh]  lg:mt-0" />

        {/* Shadow for the shoe image
        <div className="absolute w-[70vw] h-[10px] bg-gray-600 opacity-50 bottom-0 left-0 transform rotate-3"></div> */}
      </div>
      
      <div className="z-10 py-48 lg:py-0 text-white lg:absolute top-32 text-center md:text-start left-[20%] lg:left-[15%] p-8 flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-xl text-black font-semibold font-lobster">Chatterroeu</h1>
          <small className='text-[14px] text-gray-800'>Entrez dans le Style : <br/> Découvrez Votre Paire Parfaite Aujourd'hui</small>
          
          <Link to="/shoes"> <Button text="Shop" bgColor="bg-black" borderColor="border-transparent" hoverBgColor="bg-customCarton" hoverBorderColor="border-transparent" textColor="text-white" /></Link>
      </div>
    </div>
  )
}

export default CustomHero;
