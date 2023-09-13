import React from 'react';
import { background, cardBg, cardBg1, cardBg2, cardBg3 } from '../assets';
import { AiOutlineBulb } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';

const aboutItems = [
  {
    icon: <BsPeopleFill className='text-[#782fbb]'/>,
    text: 'Quality Nike Products',
  },
  {
    icon: <AiOutlineBulb className='text-[#782fbb]'/>,
    text: 'Expert Shoe Advice',
  },
  {
    icon: <RiCustomerService2Fill className='text-[#782fbb]'/>,
    text: 'Exceptional Customer Support',
  },
  // {
  //   icon: <BsPeopleFill className='text-[#782fbb]'/>,
  //   text: 'Wide Range of Styles',
  // },
];

const About = () => {
  return (
    <section className='w-full py-36 bg-customLightCarton'>
      <div className="w-[85%] mx-auto flex flex-col xl:flex-row xl:items-center xl:gap-12">
          <div className="flex items-center w-full h-full">
            <img className="w-full rounded-md  object-cover:" src={background} alt='Nike Shoes' />
          </div>

        <div className='w-full py-4 mt-12 xl:mt-0'>
          <div className="w-full">
            <div className="text-start flex flex-col gap-2">
              <h5 className='text-md uppercase font-light'>About Us</h5>
              <h3 className="text-4xl font-semibold w-full md:w-[100%] capitalize">
                <span className="bg-clip-text  py-2">
                  Welcome to Nike Shoes.
                </span>
              </h3>


              <p className="text-gray-600 mt-2 leading-[2.0rem] text-lg">
                We are your ultimate destination for premium Nike shoes. Our team is committed to providing you with quality Nike products, expert shoe advice, exceptional customer support, and a wide range of styles to choose from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
