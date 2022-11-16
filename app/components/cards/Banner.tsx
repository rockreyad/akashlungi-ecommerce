import { IoBagSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="bg-rose-400 px-6 py-2 rounded-[2rem] flex space-x-5 items-center m-2 shadow-md shadow-gray-300">
        <IoBagSharp className="text-9xl text-yellow-100" />
        <main className="space-y-2">
          <h1 className="text-white text-2xl font-semibold">Big Sale</h1>
          <p className="text-gray-200 text-sm">
            Get the trandy fashion at a discount of up to 50% off
          </p>
        </main>
      </div>
    </>
  );
};

export default Banner;
