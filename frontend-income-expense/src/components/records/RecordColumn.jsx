import { LuCircle } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { ColCategory } from "./ColCategory";

export const RecordCol = () => {
  return (
    <div className="w-[30%] h-full bg-[#fff] mx-auto flex flex-col justify-center px-4 py-6 rounded-xl mt-6 gap-6">
      <h2 className="text-lg font-semibold">Records</h2>
      <div className="flex flex-col gap-4">
        <button className="bg-[#0166FF] rounded-[20px] text-white py-1">
          + Add
        </button>
        <input
          type="text"
          placeholder="Search"
          outline="none"
          className="border-2 px-2 py-1 rounded-md"
        />
      </div>
      <div>
        <h2 className="text-md font-semibold">Types</h2>
        <div className="pl-2">
          <div className="flex items-center gap-3  ">
            <LuCircle color="lightgray" />
            <p className="text-md">All</p>
          </div>
          <div className="flex items-center gap-3">
            <LuCircle color="lightgray" />
            <p className="text-md">Income</p>
          </div>
          <div className="flex items-center gap-3">
            <LuCircle color="lightgray" />
            <p className="text-md">Expense</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold">Category</h3>
          <p className="text-slate-300">Clear</p>
        </div>
        <div className="pl-2">
          <ColCategory />
          <p className="flex items-center text-md gap-2">
            <AiOutlinePlus color="#0166FF" /> Add Category
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-md font-semibold pb-3">Amount Range</h3>
        <div className="flex gap-4 ">
          <input
            type="number"
            placeholder="0"
            className="border-2 w-[50%] bg-[#F3F4F6] py-2 rounded-lg px-2"
          />
          <input
            type="number"
            placeholder="1000"
            className="border-2 w-[50%] bg-[#F3F4F6] py-2 rounded-lg px-2"
          />
        </div>
      </div>
    </div>
  );
};