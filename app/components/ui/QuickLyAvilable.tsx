import { Link } from "@remix-run/react";

const QuickLyAvilable = () => {
  return (
    <div
      className="px-12 py-20 md:py-32 text-center text-gray-200 bg-gray-800"
      style={{}}
    >
      <h1 className="text-2xl md:text-5xl text-gray-100 font-futura">
        Quickly Avilable Products
      </h1>
      <Link
        to={"/products"}
        className="inline-block mt-8  border-y-2 py-1 px-6 text-center font-futuralight uppercase w-fit active:bg-sky-500 transition duration-300 hover:scale-110"
      >
        To the products
      </Link>
    </div>
  );
};

export default QuickLyAvilable;
