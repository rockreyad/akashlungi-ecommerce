import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductList from "~/components/ui/ProductList";
import { getProducts, ProductsType } from "~/utils/data";

export const loader: LoaderFunction = async () => {
  const response = await getProducts();
  console.log("products list");
  console.log(response);
  return response;
};
const ProductsIndexRoute = () => {
  const productsData = useLoaderData<ProductsType>();
  console.log("products list", productsData);
  return <ProductList products={productsData} />;
};

export default ProductsIndexRoute;
