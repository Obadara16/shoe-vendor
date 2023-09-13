import React from "react";

const MainWrapper = (Component, idName, className) =>
  function HOC() {
    return (
      <main id={idName} className={`w-full relative h-full ${className} `}>
        <div
        className="relative overflow-hidden w-full h-full bg-gradient-to-tr from-customLightCarton to-customCarton justify-around items-center"
      >
          <div className="w-full h-full">
            <Component />
          </div>
          
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
      </main>

    );
  };

export default MainWrapper;
