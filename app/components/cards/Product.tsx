import { MdAddCircle } from "react-icons/md";
import { useCartProvider } from "~/context/CartContext";
import { ProductType } from "~/utils/data";
import { config } from "~/config";
import { Link } from "@remix-run/react";

type ProductProps = {
  product: ProductType;
};

const imageURL = config.STRAPI_UPLOAD_URL_BASE;
const Product = ({ product }: ProductProps) => {
  const { addToCart } = useCartProvider();
  return (
    <div className="bg-white shadow-sm hover:bg-yellow-50 hover:shadow active:scale-95 rounded-2xl px-3 py-4 h-full">
      {/* Image and discount */}
      <div className="h-3/4 flex justify-center">
        <Link
          className=""
          to={`/products/${product.id}`}
          key={product.id}
          prefetch="intent"
        >
          <div className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white">
            <img
              className="w-28 object-contain"
              src={
                product.attributes?.images?.data?.length
                  ? imageURL +
                    product.attributes?.images?.data[0]?.attributes?.url
                  : ""
              }
              alt={product.attributes.name}
            />
            {product.attributes.discount && (
              <>
                <span className="sr-only">Discount</span>
                <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-8 h-6 text-xs font-bold text-white bg-rose-500 rounded-xl">
                  {product.attributes.discount}%
                </div>
              </>
            )}
          </div>
        </Link>
      </div>
      {/* Product name and price details section */}
      <main className="flex justify-between items-center space-x-6 pt-2">
        <article className="text-sm font-semibold uppercase">
          <Link
            className=""
            to={`/products/${product.id}`}
            key={product.id}
            prefetch="intent"
          >
            <h1 className="">{product.attributes.name}</h1>
          </Link>
          {/* if discount is true  then show the discount price  and the original price  with a line through it  else show the original price  only  and hide the discount price and the line through it  */}
          {product.attributes.discount ? (
            <>
              <p className="text-green-400 font-medium text-sm">
                <span className="mx-1 line-through text-gray-400 text-xs">
                  ${product.attributes.price}
                </span>
                <span>$</span>
                {/* {discountPrice}aa */}aa
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-sm text-gray-600">
                <span>$</span>
                {product.attributes.price}
              </p>
            </>
          )}
        </article>
        <MdAddCircle
          className="text-rose-400 active:text-black text-3xl cursor-pointer"
          onClick={() => addToCart(product)}
        />
      </main>
    </div>
  );
};

export default Product;
