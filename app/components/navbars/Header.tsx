import { ActionFunction } from "@remix-run/node";
import { Form, Link, Links, NavLink, useTransition } from "@remix-run/react";
import { BsBag, BsFillTelephoneFill } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import Logo from "../../../public/img/logo.svg";
import React from "react";
// import { CartContext } from "~/context/CartContext";
import { SidebarContext, useSidebarProvider } from "~/context/SidebarContext";
import { useCartProvider } from "~/context/CartContext";

const Header = () => {
  // const { isOpen, setIsOpen } = React.useContext(SidebarContext);
  // const { itemAmount } = React.useContext(CartContext);
  const projectName = "Project-L";
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Products",
      url: "/products",
    },
    {
      label: "About Us",
      url: "/about",
    },
    {
      label: "Contact Us",
      url: "/contact",
    },
  ];

  const [isActive, setIsActive] = React.useState(false);
  // const [cartProducts, setcartProducts] = React.useState([]);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const { toggleSidebar } = useSidebarProvider();
  const { cart } = useCartProvider();

  const [collapse, setCollapse] = React.useState(false);

  return (
    <>
      <header
        className={`${
          isActive ? "bg-white bg-opacity-90 py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 transition-all flex-col md:block`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* logo */}

          <div className="flex justify-center items-center">
            <Link
              to={"/"}
              className="flex space-x-2 items-center pr-4 md:pr-10"
            >
              <img className="w-4 md:w-9" src={Logo} alt="Lungi" />
              <h1 className="font-semibold md:font-extrabold text- md:text-xl font-futuralight">
                {projectName}
              </h1>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:block space-x-4 md:space-x-10 font-futuralight">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 decoration-orange-600  underline underline-offset-8   rounded-md text-sm font-medium"
                      : "text-black hover:underline hover:underline-offset-8   rounded-md text-sm font-medium"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="hidden sm:ml-6 mr-4 sm:block">
              <div className="inline-flex relative items-center">
                <a
                  href="tel:+8801312-085808"
                  className="inline-flex items-center text-[.6rem] lg:text-xs space-x-2 mx-2"
                >
                  <BsFillTelephoneFill className="" />
                  <p className="font-futura capitalize">
                    sales - 01312 085808 (10AM-9PM)
                  </p>
                </a>
              </div>
            </div>

            {/* Shopping Cart Indicator/Checkout Link */}
            <div
              className="cursor-pointer flex relative"
              onClick={() => toggleSidebar()}
            >
              <BsBag className="text-2xl" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {cart.length}
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              onClick={() => setCollapse(!collapse)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {
          // Mobile Menu
          collapse ? ( // if collapse is true then show the menu
            <div className="w-full md:hidden md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.url}
                    onClick={() => setCollapse(!collapse)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-600 decoration-orange-600  underline underline-offset-8   rounded-md text-sm font-medium"
                        : "text-black hover:underline hover:underline-offset-8   rounded-md text-sm font-medium"
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </ul>
            </div>
          ) : null
        }
      </header>
    </>
  );
};

export default Header;
