import React from 'react';
import { socials } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const isContactRoute = location.pathname === '/contact';

  return (
    <div className="w-full bg-black text-white">
      <div className="w-[85%] flex flex-col gap-8 py-24 mx-auto">
        <div
          className={`flex flex-col text-center md:text-start md:flex-row justify-between items-center gap-4 ${
            isContactRoute ? 'h-[40vh] w-[85%] mx-auto' : ''
          }`}
        >
          <div className="w-full flex flex-col gap-4 mx-auto">
            <h3 className="font-medium text-lg text-customCarton capitalize ">
              Discover Our
            </h3>
            <h1 className="text-4xl font-semibold uppercase">Contact Us</h1>
            <p className="">
              Have a question or need assistance? Feel free to reach out to us.
            </p>
          </div>
          {!isContactRoute && (
            <Link to="/contact">
              <button className="border border-customCarton rounded-md h-fit py-3 px-8 whitespace-nowrap">
                Get In Touch
              </button>
            </Link>
          )}
        </div>
      </div>
      {isContactRoute && (
        <div className="w-full bg-white text-black py-24">
          <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 mt-10">
            <div className="rounded-lg">
              <h2 className="text-2xl font-semibold mb-8">Contact Details</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <h5 className="mb-2 font-semibold">Let's Talk</h5>
                  <p className="mb-2">info@yourshoestore.com</p>
                  <p className="mb-2">+1 (123) 456-7890</p>
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-2 font-semibold">Find Us</h5>
                  <p className="mb-2 capitalize">
                    123 Shoe Street, Shoe City, Shoe State
                  </p>
                </div>
                <div className="flex mt-4 gap-4">
                  {socials.map((social, index) => (
                    <Link
                      key={index}
                      to={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg">
              <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
              <form className="bg-transparent ">
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent py-2 px-2 border border-customCarton focus:border-none focus:ring-0 placeholder:text-gray-500 rounded-sm"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-2 px-2 border border-customCarton focus:border-none bg-transparent focus:ring-0 placeholder:text-gray-500 rounded-sm"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full py-2 px-2 border border-customCarton focus:border-none bg-transparent focus:ring-0 placeholder:text-gray-500 rounded-sm"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center flex flex-start">
                  <button
                    type="submit"
                    className="transition-transform transform hover:translate-x-2 bg-customCarton text-white px-12 py-2 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
