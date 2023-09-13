import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';
import { close, logo, menu } from '../assets';
import { NavbarMenu } from '../components';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { text: 'Home', url: '/' },
  { text: 'About Us', url: '/about' },
  { text: 'Shoes', url: '/shoes' },
  { text: 'Contact', url: '/contact' },
];

const Nav = ({navColor}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const activeIndex = links.findIndex(link => link.url === location.pathname);
    setActiveLink(activeIndex);
  }, [location]);




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <section
      className={`px-4 lg:px-24 py-6 fixed w-full z-50  ${navColor ? 'text-white' : 'text-black'} ${hasScrolled  ? 'bg-black text-white' : ''}`}
    >
      <div className="absolute w-[50%] inset-0 " />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}>
        <div className='w-1/3 flex justify-start items-center'>
          <Link to='/'>
            <h3 className='text-[13px]'>**********</h3>
          </Link>
        </div>
        
        <div className='w-1/3 hidden lg:flex justify-end items-center'>
        <div className='hidden lg:flex items-center justify-center'>
          <div className="flex w-full text-center">
            <ul className='flex'>
              {links.map((link, index) => (
                <li key={index} className={`px-4 py-2 whitespace-nowrap z-50 text-[13px] `}>
                  <Link
                    to={link.url}
                    className={`${index === activeLink ? 'border-b-2 border-black' : ''}`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>   
        </div>


        </div>
        <div className="w-1/3 flex lg:hidden justify-end items-center">
          <img
              src={isMenuOpen ? close : menu}
              alt={isMenuOpen ? "close" : "menu"}
              className="w-[24px] h-[24px] cursor-pointer z-50 mb-4"
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <div className="absolute  right-0  bg-white shadow-lg ">
                <NavbarMenu/>
              </div>
            )}
          </div>
        </div>
    </section>
  );
};

export default Nav;
