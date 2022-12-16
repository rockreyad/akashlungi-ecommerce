import { Link } from "@remix-run/react";
import { config } from "~/config";
import { ProductsType } from "~/utils/data";
import Product from "../cards/Product";

type ProductListProps = {
  products: ProductsType;
};
const imageURL = config.STRAPI_UPLOAD_URL_BASE;
const ProductList = ({ products }: ProductListProps) => {
  console.log("products list", products.data?.length);
  return (
    <>
      {products.data?.length ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {products.data?.map((item) => (
              <Product product={item} key={item.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="bg-rose-500 px-3 py-2 rounded-md text-white font-semibold text-center">
            No prodcuts found!
          </p>
        </>
      )}
    </>
  );
};

export default ProductList;
