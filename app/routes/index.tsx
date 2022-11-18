import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Banner from "~/components/cards/Banner";
import Collection from "~/components/cards/Collection";
import FeatureProductCard from "~/components/cards/FeatureProductCard";
import Product from "~/components/cards/Product";
import Filter from "~/components/Filter";
import BestSelling from "~/components/ui/BestSelling";
import Intro from "~/components/ui/Intro";
import ProductCart from "~/components/ui/ProductCart";
import ProductDetails from "~/components/ui/ProductDetails";
import ProductList from "~/components/ui/ProductList";
import QuickLyAvilable from "~/components/ui/QuickLyAvilable";
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
  return (
    <>
      <Intro />
      <div className="space-y-10 mx-2 py-5 bg-slate-50">
        {/* <Banner /> */}
        <BestSelling />
        <QuickLyAvilable />
        <Collection />
        <Filter />
        {/* <ProductList products={products} /> */}
      </div>
    </>
  );
}
