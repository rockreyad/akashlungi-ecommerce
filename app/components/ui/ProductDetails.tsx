import { MdAddCircle } from "react-icons/md";

import React from "react";

type ProductDetailsProps = {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductDetails = ({
  name,
  price,
  image,
  description,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (action: string) => {
    switch (action) {
      case "increment":
        if (quantity < 200) {
          setQuantity(quantity + 1);
        }
        break;
      case "decrement":
        if (quantity > 1) setQuantity(quantity - 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="space-y-5 md:w-1/2 lg:w-1/3 my-4">
      {/* image and back close button */}
      <header className="w-full h-1/2">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </header>

      {/* product details: name,description,price */}
      <main className="flex flex-col  px-6 space-y-10">
        <div className="flex  items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-black text-2xl font-extrabold uppercase tracking-tighter">
              {name}
            </h1>
            <p className="text-gray-600 text-sm font-medium">{description}</p>
          </div>
          <h2 className="text-black text-4xl font-extrabold uppercase tracking-tighter">
            <span>$</span>
            {price}
          </h2>
        </div>

        {/* size and Quantity */}
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <label
              className="text-black text-lg font-bold uppercase tracking-tighter "
              htmlFor="SIZE"
            >
              SIZE
            </label>
            <div className="">
              <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white">
                XS
              </button>
              <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white">
                S
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-black text-lg font-bold uppercase tracking-tighter "
              htmlFor="SIZE"
            >
              Quantity
            </label>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-95 hover:bg-rose-500 hover:text-white"
              >
                -
              </button>
              <p className=" text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full py-2 px-4 mx-2">
                {quantity}
              </p>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-95 hover:bg-rose-500 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* add to cart,buy now button */}
      <footer className="flex w-full justify-between items-center px-6">
        <button className="bg-black text-white text-base font-medium uppercase tracking-[-0.09em] py-3 px-4 rounded-sm w-10/12 active:scale-95">
          <span>
            <span>$</span>
            {price}
          </span>
          <span className="px-2">|</span>
          Buy now
        </button>
        <MdAddCircle className="text-rose-400 active:text-black text-5xl active:scale-95" />
      </footer>
    </div>
  );
};

export default ProductDetails;
