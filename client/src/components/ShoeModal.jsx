import React, { useEffect, useRef } from 'react';
import { background, frame } from '../assets';

const ShoeModal = ({ shoe, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  // Define the background image URL
  const backgroundImageUrl = `url(${frame})`;

  return (
    <div 
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
        
    >
      <div
        ref={modalRef}
        className="bg-white p-4 rounded-lg frame"
        
      >
        <img
          src={shoe.displayImg}
          alt="shoes"
          className="w-full max-h-[80vh]"
        />
      </div>
    </div>
  );
};

export default ShoeModal;
