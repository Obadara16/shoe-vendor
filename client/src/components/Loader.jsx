import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-b-8 border-customCarton"></div>
    </div>
  );
};

export default Loader;
