import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Banner from "~/components/cards/Banner";
import Collection from "~/components/cards/Collection";
import Filter from "~/components/Filter";
import BestSelling from "~/components/ui/BestSelling";
import Intro from "~/components/ui/Intro";
import ProductList from "~/components/ui/ProductList";
import QuickLyAvilable from "~/components/ui/QuickLyAvilable";
import { getProducts, ProductsType } from "~/utils/data";

export const loader: LoaderFunction = async (): Promise<ProductsType> => {
  const response = await getProducts();
  return response;
};

export const meta = () => {
  return {
    title: "HomePage of E-commerce",
    description: "Products",
  };
};

export default function IndexRoute() {
  const products = useLoaderData<ProductsType>();
  return (
    <div>
      {/* Hero Banner */}
      <Intro />
      <QuickLyAvilable />
      <div className="grid grid-cols-2 space-x-2 px-2 mt-10">
        <Banner />
        <Collection />
      </div>
      <BestSelling products={products} />
      <Filter />
      <ProductList products={products} />
    </div>
  );
}
