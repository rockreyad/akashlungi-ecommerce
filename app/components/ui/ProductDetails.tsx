import { MdAddCircle } from "react-icons/md";

import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts";

type ProductDetailsProps = {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ShareButtonComponents = () => {
  return (
    <div className="flex flex-row space-x-2">
      <AiFillFacebook className="text-4xl text-blue-600" />
      <AiFillTwitterSquare className="text-4xl text-blue-400" />
      <FaWhatsappSquare className="text-4xl text-green-600" />
    </div>
  );
};
const ProductDetails = ({
  name,
  price,
  image,
  description,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (action: string) => {
    switch (action) {
      case "increment":
        if (quantity < 200) {
          setQuantity(quantity + 1);
        }
        break;
      case "decrement":
        if (quantity > 1) setQuantity(quantity - 1);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="lg:flex my-20 lg:space-x-4 justify-center items-center lg:px-40 lg:py-20 xl:px-60">
        <div className="lg:flex space-y-4">
          <header className="">
            <img
              className="w-full lg:w-[80%] xl:w-[50%] object-cover p-4 rounded-md "
              src={image}
              alt={name}
            />
          </header>
          <div>
            <article className="flex flex-col p-4 space-y-4">
              <h1 className="text-2xl text-gray-700 font-bold">
                100% Cotton Bangla Lungi ( 202 )
              </h1>
              <hr className="border-b-0 border-gray-400" />
              <div className="flex flex-col">
                <h6 className="text-gray-700 text-lg w-1/6">Price</h6>
                <p className="text-3xl font-semibold">
                  <span className="text-2xl font-extrabold text-indigo-600">
                    ৳
                  </span>
                  895.00
                  <span className="text-base font-light text-gray-700">
                    /Per Than
                  </span>
                </p>
              </div>
              <hr className="border-b-0 border-gray-400" />
              <div className="flex flex-col">
                <h6 className="text-gray-700 text-lg w-1/6">Quantity</h6>
                <div className="flex flex-row items-center">
                  <button
                    className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white"
                    onClick={() => handleQuantityChange("decrement")}
                  >
                    -
                  </button>
                  <p className="text-2xl font-semibold">{quantity}</p>
                  <button
                    className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 ml-2 active:scale-90 hover:bg-rose-500 hover:text-white"
                    onClick={() => handleQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>
              </div>
              <hr className="border-b-0 border-gray-400" />
              <div className="flex flex-col">
                <h6 className="text-gray-700 text-lg w-1/6">Total</h6>
                <p className="text-3xl font-semibold">
                  <span className="text-2xl font-extrabold text-indigo-600">
                    ৳
                  </span>
                  {price * quantity}
                </p>
              </div>
              <hr className="border-b-0 border-gray-400" />
              <div className="flex flex-col">
                <button className="bg-rose-500 text-white text-lg font-bold uppercase tracking-wider rounded-full py-3 px-4 active:scale-90 hover:bg-rose-500 hover:text-white">
                  Add to Cart
                </button>
              </div>

              <div className="py-10 space-y-4">
                <div className="flex flex-col lg:flex">
                  <h6 className="text-gray-300 text-lg">
                    price update:
                    <p className="text-black text-base">
                      Wholesale product price may vary. Please request for
                      latest price before placing order.
                    </p>
                  </h6>
                </div>
                <h6 className="text-gray-300 text-lg">
                  Delivery Charge:
                  <p className="text-black text-base">
                    Delivery charge will be based on location. We'll call you to
                    confirm order and delivery charge.
                  </p>
                </h6>

                <h6 className="text-gray-300 text-lg">
                  Share:
                  <ShareButtonComponents />
                </h6>
              </div>
            </article>
            <main className="rounded-md bg-white px-4 drop-shadow-md border border-gray-50">
              {/* //description */}
              <div className="py-3 border-b-2 border-indigo-500">
                <h3 className="text-black text-lg font-semibold">
                  Description
                </h3>
              </div>
              <div className="flex flex-col py-4 capitalize">
                <p className="text-black text-base font-bold">
                  product details:{" "}
                </p>
                <span>Product Type: Bangla Lungi</span>
                <span>Per Than =4 Piece</span> <span> Fabric: 100% Cotton</span>
                <span> Size: 6 Hat Lungi</span> <span> Made In Bangladesh</span>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-slate-50 px-4">
        <RelatedProducts />
      </div>
    </>
  );
};

// <div className="space-y-5 md:w-1/2 lg:w-1/3 my-20">
//       {/* image and back close button */}
//       <header className="h-1/2 rounded-md p-4 m-4  bg-red-300">
//         <img className="h-full w-full object-cover" src={image} alt={name} />
//       </header>

//       {/* product details: name,description,price */}
//       <main className="flex flex-col  px-6 space-y-10">
//         <div className="flex  items-center justify-between">
//           <div className="space-y-2">
//             <h1 className="text-black text-2xl font-extrabold uppercase tracking-tighter">
//               {name}
//             </h1>
//             <p className="text-gray-600 text-sm font-medium">{description}</p>
//           </div>
//           <h2 className="text-black text-4xl font-extrabold uppercase tracking-tighter">
//             <span>$</span>
//             {price}
//           </h2>
//         </div>

//         {/* size and Quantity */}
//         <div className="flex flex-col space-y-4">
//           <div className="space-y-2">
//             <label
//               className="text-black text-lg font-bold uppercase tracking-tighter "
//               htmlFor="SIZE"
//             >
//               SIZE
//             </label>
//             <div className="">
//               <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white">
//                 XS
//               </button>
//               <button className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-90 hover:bg-rose-500 hover:text-white">
//                 S
//               </button>
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label
//               className="text-black text-lg font-bold uppercase tracking-tighter "
//               htmlFor="SIZE"
//             >
//               Quantity
//             </label>
//             <div className="flex items-center">
//               <button
//                 onClick={() => handleQuantityChange("decrement")}
//                 className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-95 hover:bg-rose-500 hover:text-white"
//               >
//                 -
//               </button>
//               <p className=" text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full py-2 px-4 mx-2">
//                 {quantity}
//               </p>
//               <button
//                 onClick={() => handleQuantityChange("increment")}
//                 className="bg-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full py-2 px-4 mr-2 active:scale-95 hover:bg-rose-500 hover:text-white"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* add to cart,buy now button */}
//       <footer className="flex w-full justify-between items-center px-6">
//         <button className="bg-black text-white text-base font-medium uppercase tracking-[-0.09em] py-3 px-4 rounded-sm w-10/12 active:scale-95">
//           <span>
//             <span>$</span>
//             {price}
//           </span>
//           <span className="px-2">|</span>
//           Buy now
//         </button>
//         <MdAddCircle className="text-rose-400 active:text-black text-5xl active:scale-95" />
//       </footer>
//     </div>

export default ProductDetails;
