import { ActionFunction, LinksFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { ProductsType, getProducts } from "~/utils/data";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    },
  ];
};

const title = "100% Cotton Bangla Lungi ( 202 )";
const RelatedProducts = () => {
  return (
    <div className="">
      <div className="py-3">
        <h3 className="text-lg text-black font-semibold">Realted Products</h3>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex flex-row space-x-2">
          <li className="drop-shadow-md border border-gray-100 p-3">
            <img
              className="w-full object-cover p-4 rounded-md"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="name"
            />
            <h1 className="text-base text-purple-800 font-bold">৳1,980.00</h1>
            <h1 className="text-base text-gray-600 font-semibold">
              {title.length > 20 ? title.substring(0, 20) + "..." : title}
            </h1>
          </li>
          <li className="drop-shadow-md border border-gray-100 p-3">
            <img
              className="w-full object-cover p-4 rounded-md"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="name"
            />
            <h1 className="text-base text-purple-800 font-bold">৳1,980.00</h1>
            <h1 className="text-base text-gray-600 font-semibold">
              {title.length > 20 ? title.substring(0, 20) + "..." : title}
            </h1>
          </li>
        </ul>
        <div className="flex justify-between absolute w-full">
          <div className="p-3 rounded-full drop-shadow-xl shadow-2xl shadow-neutral-600 border border-gray-200 bg-white cursor-pointer hover:drop-shadow-2xl">
            <AiOutlineLeft className="text-sm lg:text-6xl text-black" />
          </div>
          <div className="p-3 rounded-full drop-shadow-xl shadow-2xl shadow-neutral-600 border border-gray-200 bg-white cursor-pointer hover:drop-shadow-2xl">
            <AiOutlineRight className="text-sm lg:text-6xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
