import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarMenu = () => {
  const location = useLocation();
  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;

  const menu = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Shoes', link: '/shoes' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <motion.div
      initial={
        smallScreen
          ? { opacity: 0 }
          : {
              scaleX: 0,
              scaleY: 0,
              transformOrigin: "top right",
              opacity: 1,
            }
      }
      animate={
        smallScreen ? { opacity: 1 } : { scaleX: 1, scaleY: 1, opacity: 1 }
      }
      exit={smallScreen ? { opacity: 0 } : { scaleX: 0, scaleY: 0, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed right-0 top-0 sm:right-6  md:right-14 sm:top-6 bg-black   w-full sm:w-[300px] md:w-[350px] h-screen sm:h-auto p-14 sm:p-10 md:p-12 pt-40 sm:pt-16 dark:border-[1px] dark:border-[#242424]"
    >
      <div className="flex flex-col gap-4 mb-20 sm:mb-8">
        {menu.map((m, i) => (
          <Link
            key={i}
            to={m.link}
            className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-white  w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          >
            {m.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-[#cbc9e2]  text-base leading-10 tracking-[0.25em] font-[400]">
          SAY HELLO
        </h4>
        <Link
          className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-white  w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          to="mailto:support@knowbility.com"
        >
          support@knowbility.com
        </Link>
        <Link
          className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-white  w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          to="t.me/knowbility"
        >
          t.me/knowbility
        </Link>
        <div className="text-lg sm:text-[15px] text-white  font-outfit flex gap-10 mt-20 sm:mt-8">
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://twitter.com/knowbility"
            target="_blank"
          >
            TW
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://github.com/knowbility"
            target="_blank"
          >
            GH
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href=""
            target="_blank"
          >
            LN
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://www.instagram.com/knowbility/"
            target="_blank"
          >
            IG
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;