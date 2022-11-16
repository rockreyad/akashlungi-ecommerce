import { MdAddCircle } from "react-icons/md";

type ProductDetailsProps = {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductDetails = ({
  name,
  price,
  image,
  description,
}: ProductDetailsProps) => {
  return (
    <div className="h-screen space-y-5">
      {/* image and back close button */}
      <header className="w-full h-1/2">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </header>

      {/* product details: name,description,price */}
      <main className="flex flex-col  px-6 space-y-10">
        <div className="flex  items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-black text-2xl font-extrabold uppercase tracking-tighter">
              {name}
            </h1>
            <p className="text-gray-600 text-sm font-medium">{description}</p>
          </div>
          <h2 className="text-black text-4xl font-extrabold uppercase tracking-tighter">
            <span>$</span>
            {price}
          </h2>
        </div>

        {/* size and Quantity */}
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <label
              className="text-black text-lg font-bold uppercase tracking-tighter "
              htmlFor="SIZE"
            >
              SIZE
            </label>
            <div className="">
              <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white">
                XS
              </button>
              <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white">
                S
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-black text-lg font-bold uppercase tracking-tighter "
              htmlFor="SIZE"
            >
              Quantity
            </label>
            <div className="flex items-center">
              <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-95 hover:bg-rose-500 hover:text-white">
                -
              </button>
              <input
                type="number"
                min={1}
                max={200}
                className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2"
              />
              <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-95 hover:bg-rose-500 hover:text-white">
                +
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* add to cart,buy now button */}
      <footer className="flex w-full justify-between items-center px-6">
        <button className="bg-black text-white text-base font-medium uppercase tracking-[-0.09em] py-3 px-4 rounded-sm w-10/12 active:scale-95">
          <span>
            <span>$</span>
            {price}
          </span>
          <span className="px-2">|</span>
          Buy now
        </button>
        <MdAddCircle className="text-rose-400 active:text-black text-5xl active:scale-95" />
      </footer>
    </div>
  );
};

export default ProductDetails;
