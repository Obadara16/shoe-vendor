import React, { useState } from 'react';
import ShoeModal from './ShoeModal'; // Import the ShoeModal component

const ShoeCard = ({ shoe }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-black bg-white">
      <div className='z-10 h-full w-full p-zz2 flex flex-col py-2  md:py-4 text-center gap-4 px-4'>
        <p className='text-left text-[12px] text-[#a66e36]'>
          {shoe.manufacturer}
        </p>
        <div className="w-full h-full">
          <img src={shoe.displayImg} alt='shoes' className='w-full h-[250px] cursor-pointer' onClick={openModal}/>
        </div>
        <div className='flex justify-center'>
          <p className='text-[12px] text-center'>{shoe.name} <span className='mx-4 text-[18px] text-[#a66e36]'>*      *</span> ${shoe.price}</p>
        </div>
      </div>

      {isModalOpen && (
        <ShoeModal shoe={shoe} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ShoeCard;
