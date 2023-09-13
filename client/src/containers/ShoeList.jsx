import React, { useState } from 'react';
import { ShoeCard } from '../components';
import { shoes } from '../constants';

const ShoeList = () => {
  const [shoesData, setShoesData] = useState(shoes.slice(0, 4)); 

  return (
    <section className="w-full bg-black pb-36 box-border shadow-md">
      <div className="w-[85%] mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
          {shoesData.map((shoe, index) => (
            <ShoeCard key={index} shoe={shoe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoeList;
