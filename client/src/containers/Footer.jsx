import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { socials } from '../constants';
import { Button } from '../components';

const Footer = ({ footerColor }) => (
  <section
    className={`relative px-4 md:px-16 mx-auto py-12 ${
      footerColor ? 'bg-black text-white' : 'bg-white text-black'
    }`}
  >
    <div className="flex  justify-between text-sm uppercase">
      <div className='flex flex-col md:flex-row gap-6'>
        <p to='/'>Copyright Reserved</p>
        <Link to='/'><p>Chatterroeu</p></Link>
      </div>
      <div className='flex flex-col md:flex-row gap-6 '>
        <Link className='' to='/'>Home</Link>
        <Link className=' text-[#a66e36]' to='/'>Shoes</Link>
        <Link className='' to='/'>About</Link>
        <Link className='' to='/'>Contact</Link>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        <Link to='/'>
        <Button text="Connect" bgColor="bg-customLightCarton" borderColor="border-transparent" hoverBgColor="bg-customCarton" hoverBorderColor="border-transparent" textColor="text-black" />
        </Link>
      </div>
    </div>
  </section>
);

export default Footer;
