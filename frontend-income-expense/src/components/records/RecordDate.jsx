import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";

export const Date = () => {
  const data = ["Last 30 days", "Last 3 months", "Last week", "Yesterday"];

  const [slide, setSlide] = useState(0);

  const nextClick = () => {
    setSlide(slide + 1);
  };
  const previousClick = () => {
    setSlide(slide - 1);
  };

  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex justify-between  mt-6">
        <div className="flex items-center gap-4">
          <button
            className="w-[32px] h-[32px] bg-[#E5E7EB] rounded-lg flex items-center justify-center"
            disabled={slide === 0}
            onClick={previousClick}
          >
            <FaAngleLeft className="w-[20px] h-[20px]" color="#000" />
          </button>
          <p className="text-lg">{data[slide]}</p>
          <button
            className="w-[32px] h-[32px] bg-[#E5E7EB] rounded-lg flex items-center justify-center"
            disabled={slide === data.length - 1}
            onClick={nextClick}
          >
            <FaAngleRight className="w-[20px] h-[20px]" color="#000" />
          </button>
        </div>
        <select name="" id="" className="py-4 px-6 rounded-lg border-2">
          <option value="">Newest first</option>
          <option value="">All</option>
          <option value="">Oldest first</option>
        </select>
      </div>
      <div className="flex justify-between border rounded-lg bg-[#FFF] py-2 px-4">
        <div className="flex gap-3">
          <input
            type="checkbox"
            className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
          />
          <div className="text-black text-base font-normal">Select all</div>
        </div>
        <p className="text-[#94A3B8]"> - 35,000₮</p>
      </div>
    </div>
  );
};
