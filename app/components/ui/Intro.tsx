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

        <div className="absolute bottom-10 md:bottom-32 w-full flex justify-start md:items-center mx-auto px-6 md:px-10 lg:px-40">
          <div className="flex flex-col items-start  space-y-4">
            <div className="space-y-4 text-white   font-futura ">
              <h1 className="text-4xl">Wear In winter Wonderland? Check.</h1>
              <p className="text-sm font-medium tracking-widest leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptate.
              </p>
            </div>

            <div className="space-x-5   font-futuraCondensed">
              <button className="bg-gray-100 px-6 py-3 font-bold text-xs text-gray-900 tracking-[0.15rem] hover:bg-rose-400 hover:text-gray-100">
                SHOP LUNGI
              </button>
              <button className="bg-gray-100 px-6 py-3 font-bold text-xs text-gray-900 tracking-[0.15rem] hover:bg-rose-400 hover:text-gray-100">
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
