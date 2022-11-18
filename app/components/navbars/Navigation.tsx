import { NavLink } from "@remix-run/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";

const Navigation = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="block lg:hidden h-8 w-auto font-extrabold text-2xl font-futura">
                Project-L
              </h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 font-futuralight">
                <NavLink
                  to={""}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 decoration-orange-600  underline underline-offset-8  px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:underline hover:underline-offset-8  px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 decoration-orange-600  underline underline-offset-8  px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:underline hover:underline-offset-8  px-3 py-2 rounded-md text-sm font-medium capitalize"
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to={"about"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 decoration-orange-600  underline underline-offset-8  px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:underline hover:underline-offset-8  px-3 py-2 rounded-md text-sm font-medium capitalize"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 decoration-orange-600  underline underline-offset-8  px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:underline hover:underline-offset-8  px-3 py-2 rounded-md text-sm font-medium capitalize"
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>

          {/* Desktop Cart Button */}
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
              <RiShoppingCartLine className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white text-3xl" />
              <div className="inline-flex absolute -top-2 -right-3 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-gray-500 bg-opacity-80 rounded-xl">
                2
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state. */}
          <div className="block sm:hidden">
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
