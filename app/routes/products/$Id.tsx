import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductDetails from "~/components/ui/ProductDetails";

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.name || "Product Name",
    description: data.description || "Product Details page",
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.Id}`
  );

  const data = await response.json();
  let product = {
    id: data.id,
    name: data.title,
    price: data.price,
    description: data.description,
    image: data.image,
  };
  return product;
};

const ProductDetailsPage = () => {
  const product = useLoaderData();
  return (
    <div>
      <ProductDetails
        id={product.id}
        name={product.title}
        image={product.image}
        description={product.description}
        price={product.price}
      />
    </div>
  );
};

export default ProductDetailsPage;
