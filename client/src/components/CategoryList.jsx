import React from 'react';

const CategoryList = ({ categories }) => {
  return (
    <div className="px-4">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-transparent border border-black text-black hover:bg-customCarton hover:border-none hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
