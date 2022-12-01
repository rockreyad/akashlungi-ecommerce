import React from "react";
import { MdAddCircle } from "react-icons/md";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  shortDesc?: string;
};

const FeatureProductCard = ({
  name,
  image,
  price,
  shortDesc,
}: ProductCardProps) => {
  return (
    <div className="">
      <div className="bg-rose-600 p-2 md:p-16 flex flex-col items-center space-y-4 w-full">
        <img src={image} alt={name} className="w-10 md:w-24" />
        <p className="font-futuraCondensed text-lg text-white text-center space-y-3">
          <h6 className="text-2xl md:text-4xl">30% Off</h6>
          <h6 className="tracking-widest">
            With code <span className="font-futura">"CUPON"</span>
          </h6>
        </p>
      </div>

      <div className="bg-white px-4 w-full space-y-10 flex flex-col py-6">
        <div className="divide-y">
          <h1 className="text-lg text-gray-700 font-semibold py-2">{name}</h1>
          <p className="text-sm text-gray-500 py-2 leading-tight tracking-tighter">
            Lorem ipsum,Lorem .
          </p>
        </div>
        <button className="bg-gray-800 text-white font-futura text-xs text-center py-3 uppercase rounded-sm">
          shop now
        </button>
      </div>
    </div>
  );
};

export default FeatureProductCard;
