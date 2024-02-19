import { GoHomeFill } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import { DropDown } from "./DropdownIcons";
import { useState } from "react";

export const AddCategory = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-96 h-[266px] border-2 rounded-xl bg-gray-200 px-3 py-2">
        <div className="flex items-center justify-between">
          <p>Add Category</p>
          <p>X</p>
        </div>
        <hr />

        <button
          className="border-2 bg-white p-3 rounded-lg flex items-center gap-2 relative"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <GoHomeFill />
          <MdArrowDropDown />
        </button>
        <div className="absolute">
          {dropDown && <DropDown setBtn={dropDown} />}
        </div>
      </div>
    </div>
  );
};
