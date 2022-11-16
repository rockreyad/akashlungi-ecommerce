import { Link } from "@remix-run/react";
import { products } from "~/utils/data";
import Product from "../cards/Product";

type ProductListProps = {
  products: products[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products && products.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {products.map((item) => (
              <Link
                className=""
                to={`products/${item.id}`}
                key={item.id}
                prefetch="intent"
              >
                <Product
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  discountPrice={item.discountPrice}
                />
              </Link>
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
