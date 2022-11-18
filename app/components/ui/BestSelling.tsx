import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { productData, products } from "~/utils/data";
import FeatureProductCard from "../cards/FeatureProductCard";

export const loader: LoaderFunction = async () => {
  return productData;
};

const BestSelling = () => {
  const products: products[] = useLoaderData();
  return (
    <div className="space-y-10">
      <h1 className="text-2xl text-center font-bold font-futura">
        Our Best Selling Products
      </h1>
      <div className="flex justify-center">
        <section className="flex flex-nowrap snap-mandatory snap-x snap-always overflow-x-auto gap-5 hide-scrollbar">
          {/* <ProductCart /> */}
          {products &&
            products
              .filter((item) => item.hot === true)
              .map((product) => (
                <div className="flex-none snap-center">
                  <FeatureProductCard
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    shortDesc={product.shortDesc}
                  />
                </div>
              ))}
        </section>
      </div>
    </div>
  );
};

export default BestSelling;
