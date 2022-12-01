import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductList from "~/components/ui/ProductList";
import { getProducts, products } from "~/utils/data";

type res = {
  data: products[];
};
export const loader: LoaderFunction = async () => {
  const response: res = await getProducts();
  console.log("products list");
  console.log(response.data);
  return response.data;
};
const ProductsIndexRoute = () => {
  const productsData = useLoaderData();
  return <ProductList products={productsData} />;
};

export default ProductsIndexRoute;
