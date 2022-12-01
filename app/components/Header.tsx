import React from "react";
import Navigation from "./navbars/Navigation";
import TopHeader from "./navbars/TopHeader";

const Header = () => {
  return (
    <>
      <header className="">
        <h6 className="text-sm bg-gray-500 text-white text-center font-futuralight tracking-widest">
          Welcome to My Store, Enjoy the products
        </h6>
      </header>
      <TopHeader />
      {/* <Navigation /> */}
    </>
  );
};

export default Header;
