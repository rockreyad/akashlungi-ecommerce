import { Link } from "@remix-run/react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/Io";
import { config } from "~/config";
import { useCartProvider } from "~/context/CartContext";
import { ProductType } from "~/utils/data";

const imageURL = config.STRAPI_UPLOAD_URL_BASE;
const CartItem = ({ product }: { product: ProductType }) => {
  const { increaseAmount, decreaseAmount, removeFromCart } = useCartProvider();
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${product.id}`}>
          <img
            className="max-w-[80px]"
            src={
              product.attributes?.images?.data?.length
                ? imageURL +
                  product.attributes?.images?.data[0]?.attributes?.url
                : ""
            }
            alt=""
          />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${product.id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {product.attributes.name}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(product.id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div
                onClick={() =>
                  product.quantity > 1 ? decreaseAmount(product.id) : null
                }
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {product.quantity}
              </div>
              {/* plus icon */}
              <div
                // onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  product.quantity < 100 ? increaseAmount(product.id) : null
                }
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {product.attributes.price}
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${
              product.quantity
                ? product.attributes.price * product.quantity
                : product.attributes.price
            }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
