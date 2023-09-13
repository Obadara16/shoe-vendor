import { ShoeForm } from '../components';
import React from 'react';
import { MainWrapper } from '../wrapper';

const AddShoe = () => {
  return (
    <div className='w-full'>
        <ShoeForm/>
    </div>
  );
};

export default MainWrapper(AddShoe, "addshoe", "h-screen");
