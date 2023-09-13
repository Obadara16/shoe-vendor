import React from 'react';
import { Footer, Nav } from '../containers';
import { CategoryList, ShoeCard } from '../components';
import { shoes } from '../constants';
import { Link } from 'react-router-dom';

export default function AdminShoeList() {
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
      <div className='w-[85%] mx-auto h-full py-48'>
        <div className="w-full flex justify-end">
            <Link to='add'><button className='bg-transparent border border-customCarton text-black hover:bg-customCarton hover:text-white px-6 py-2 rounded'>Add Shoe</button></Link>
        </div>
        <div className='flex flex-col gap-8 min-h-screen justify-center items-center'>
            <h1 className="text-3xl font-lobster">Chatterroeu</h1>
            <CategoryList categories={nikeShoeCategories} /> 
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2'>
            {shoes.map((shoe, index) => (
                <ShoeCard key={index} shoe={shoe} />
            ))}
            </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
