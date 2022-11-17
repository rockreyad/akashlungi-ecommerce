import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Banner from "~/components/cards/Banner";
import Collection from "~/components/cards/Collection";
import FeatureProductCard from "~/components/cards/FeatureProductCard";
import Product from "~/components/cards/Product";
import Filter from "~/components/Filter";
import Intro from "~/components/ui/Intro";
import ProductCart from "~/components/ui/ProductCart";
import ProductDetails from "~/components/ui/ProductDetails";
import ProductList from "~/components/ui/ProductList";
import { productData, products } from "~/utils/data";

export const loader: LoaderFunction = async () => {
  return productData;
};

export const meta = () => {
  return {
    title: "Products",
    description: "Products",
  };
};
export default function Index() {
  const products: products[] = useLoaderData();
  return (
    <>
      <Intro />
      <div className="space-y-10 mx-2 py-5">
        <Banner />
        <div className="grid grid-cols-2 gap-2">
          {/* <ProductCart /> */}
          {products &&
            products
              .filter((item) => item.hot === true)
              .map((product) => (
                <FeatureProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
        </div>
        <Collection />
        <Filter />
        <ProductList products={products} />
      </div>
    </>
  );
}
