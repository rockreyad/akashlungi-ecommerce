import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductList from "~/components/ui/ProductList";
import { productData } from "~/utils/data";

export const loader: LoaderFunction = async () => {
  return productData;
};
const products = () => {
  const products = useLoaderData();
  return <ProductList products={products} />;
};

export default products;
