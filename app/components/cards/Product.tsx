import { MdAddCircle } from "react-icons/md";

type ProductProps = {
  name: string;
  price: number;
  image: string;
  discount?: number;
  discountPrice?: number;
};

const Product = ({
  name,
  image,
  price,
  discount,
  discountPrice,
}: ProductProps) => {
  return (
    <div className="bg-white shadow-sm hover:bg-yellow-50 hover:shadow active:scale-95 rounded-2xl px-3 py-4 h-full">
      {/* Image and discount */}
      <div className="h-3/4 flex justify-center">
        <div className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white">
          <img className="w-28 object-contain" src={image} alt={name} />
          {discount && discountPrice && (
            <>
              <span className="sr-only">Discount</span>
              <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-8 h-6 text-xs font-bold text-white bg-rose-500 rounded-xl">
                {discount}%
              </div>
            </>
          )}
        </div>
      </div>
      {/* Product name and price details section */}
      <main className="flex justify-between items-center space-x-6 pt-2">
        <article className="text-sm font-semibold uppercase">
          <h1 className="">{name}</h1>

          {/* if discount is true  then show the discount price  and the original price  with a line through it  else show the original price  only  and hide the discount price and the line through it  */}
          {discount && discountPrice ? (
            <>
              <p className="text-green-400 font-medium text-sm">
                <span className="mx-1 line-through text-gray-400 text-xs">
                  ${price}
                </span>
                <span>$</span>
                {discountPrice}
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-sm text-gray-600">
                <span>$</span>
                {price}
              </p>
            </>
          )}
        </article>
        <MdAddCircle className="text-rose-400 active:text-black text-3xl" />
      </main>
    </div>
  );
};

export default Product;
