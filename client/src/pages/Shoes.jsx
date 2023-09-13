import React from 'react';
import { Footer, Nav } from '../containers';
import { CategoryList, ShoeCard } from '../components';
import { shoes } from '../constants';

export default function Shoes() {
  const nikeShoeCategories = [
    "Running", 
    "Basketball", 
    "Training", 
    "Casual", 
    "Soccer",
    "Golf",
    "Skateboarding",
    "Tennis",
    "Hiking",
  ]; 

  return (
    <section className="w-full bg-customLightCarton h-full relative">
      <Nav />
      <div className='w-[85%] mx-auto flex flex-col gap-8 min-h-screen justify-center items-center py-56'>
        <h1 className="text-3xl font-lobster">Chatterroeu</h1>
        <CategoryList categories={nikeShoeCategories} /> 
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2'>
          {shoes.map((shoe, index) => (
            <ShoeCard key={index} shoe={shoe} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}
