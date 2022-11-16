import React from "react";
import { MdAddCircle } from "react-icons/md";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
};

const FeatureProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <div className="bg-gray-50 hover:bg-gray-200 p-2 shadow-sm flex flex-col justify-center w-fit rounded-2xl">
      <main>
        <img className="rounded-3xl w-44" src={image} alt={name} />
      </main>
      <footer className="flex justify-between items-center mt-2 px-3">
        <div>
          <h1 className="text-sm font-medium text-black capitalize">{name}</h1>
          <p className="text-gray-500 text-sm font-medium">
            <span>$</span>
            {price}
          </p>
        </div>

        <MdAddCircle className="text-rose-400 active:text-black text-3xl" />
      </footer>
    </div>
  );
};

export default FeatureProductCard;
