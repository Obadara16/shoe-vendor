import React, { useState } from 'react';
import { IoPersonOutline, IoLockClosedOutline, IoImageOutline, IoInformationCircleOutline, IoCashOutline } from 'react-icons/io5';

const ShoeForm = () => {
  const [shoeData, setShoeData] = useState({
    name: '',
    manufacturer: '',
    description: '',
    displayImages: [],
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShoeData({
      ...shoeData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setShoeData({
      ...shoeData,
      displayImages: [...shoeData.displayImages, ...files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Shoe Data:', shoeData);
  };

  return (
    <div className="h-screen w-[85%] mx-auto">
      <div className="w-full flex flex-col justify-center px-8 items-center h-full">
        <h1 className="text-black font-bold text-4xl text-center font-lobster mb-8">Chatterroeu</h1>
        <div className=" p-6 w-full md:w-1/3 lg:w-1/2 mx-auto bg-white mx-auto">
          <h2 className="text-xl font-medium mb-4">Add New Shoe</h2>
          <form onSubmit={handleSubmit} className=''>
            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoPersonOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={shoeData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="pl-2 outline-none border-none w-full"
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoLockClosedOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="manufacturer"
                  name="manufacturer"
                  value={shoeData.manufacturer}
                  onChange={handleInputChange}
                  placeholder="Manufacturer"
                  className="pl-2 outline-none border-none w-full"
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoInformationCircleOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={shoeData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="pl-2 outline-none border-none w-full"
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoImageOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="file"
                  id="displayImages"
                  name="displayImages"
                  multiple
                  onChange={handleImageUpload}
                  className="pl-2 outline-none border-none w-full"
                  accept="image/*"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoCashOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={shoeData.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                  className="pl-2 outline-none border-none w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full bg-customLightCarton hover:bg-customCarton text-black hover:text-white py-2 px-6 rounded-md focus:outline-none"
            >
              Add Shoe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoeForm;
