import { GoHomeFill } from "react-icons/go";
import { DropDown } from "./DropdownIcons";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

export const AddCategory = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-10" />
      <div className="flex items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-[500px] h-[276px] rounded-xl bg-white px-3 py-2 relative">
          <div className="flex items-center justify-between p-2">
            <p className="text-xl">Add Category</p>
            <p className="text-xl">X</p>
          </div>
          <hr />
          <div className="flex gap-12 flex-col mt-10">
            <div className="flex justify-between px-3">
              <button
                className="border-2 bg-white p-3 rounded-lg flex items-center gap-2 relative "
                onClick={() => {
                  setDropDown(!dropDown);
                }}
              >
                <GoHomeFill size={24} />
                <FaCaretDown size={18} />
              </button>

              <button
                type="text"
                className=" px-2 border-2 w-3/4 rounded-lg flex justify-between items-center "
              >
                <p className=" text-xl text-[#94A3B8]">Name</p>
                <FaCaretDown />
              </button>
            </div>
            <button className="rounded-[25px] w-full py-3 bg-[#16A34A] text-lg text-white">
              Add Category
            </button>
          </div>
          <div className="absolute">
            {dropDown && <DropDown setBtn={dropDown} />}
          </div>
        </div>
      </div>
    </>
  );
};
