import { TiStarFullOutline } from "react-icons/ti";

const Filter = () => {
  return (
    <div className="py-10">
      <div className="flex justify-around">
        <div className="flex items-center justify-center">
          <TiStarFullOutline className="text-8xl text-cyan-500 absolute items-center" />
          <div className="flex flex-col relative -space-y-3 text-gray-200 top-1 items-center">
            <p className="text-sm font-bold">
              <span>$</span>250
            </p>
            <span>-</span>
            <p className="text-sm font-bold">
              <span>$</span>350
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <TiStarFullOutline className="text-8xl text-cyan-500 absolute items-center" />
          <div className="flex flex-col relative -space-y-3 text-gray-200 top-1 items-center">
            <p className="text-sm font-bold">
              <span>$</span>350
            </p>
            <span>-</span>
            <p className="text-sm font-bold">
              <span>$</span>750
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <TiStarFullOutline className="text-8xl text-cyan-500 absolute items-center" />
          <div className="flex flex-col relative -space-y-3 text-gray-200 top-1 items-center">
            <p className="text-sm font-bold">
              <span>$</span>750
            </p>
            <span>-</span>
            <p className="text-sm font-bold">
              <span>$</span>1110
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
