import React from "react";

const Intro = () => {
  return (
    <>
      <div className="w-full h-96 md:h-screen relative ">
        <img
          src="https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=1480&t=st=1668696611~exp=1668697211~hmac=71f3a97458525b7b4929e7f56969dfcaf9b6629b3f586db1939c86111c62b6cf"
          alt="hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-10 md:bottom-32 lg:bottom-40 w-full flex justify-start md:items-center mx-auto px-6 md:px-10 lg:px-10 xl:px-56">
          <div className="flex flex-col items-start  space-y-4 lg:space-y-6 text-white">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-futura leading-5">
              Make It A Naturally Gifted Holiday
            </h1>
            <p className="font-futuralight sm:font-futura text-xs sm:text-base tracking-widest leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptate.
            </p>

            <div className="space-x-5 font-futuraCondensed">
              <button className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-4 font-bold text-xs lg:text-base text-gray-900 tracking-[0.15rem] hover:bg-rose-400 hover:text-gray-100 rounded">
                SHOP LUNGI
              </button>
              <button className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-4 font-bold text-xs lg:text-base text-gray-900 tracking-[0.15rem] hover:bg-rose-400 hover:text-gray-100 rounded">
                SHOP SHAREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
