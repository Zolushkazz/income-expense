// import { GoHomeFill } from "react-icons/go";
// import { PiForkKnifeFill } from "react-icons/pi";
// import { FaPlusCircle } from "react-icons/fa";
// import {
//   PiGiftFill,
//   PiWineFill,
//   PiTaxiFill,
//   PiTShirtFill,
// } from "react-icons/pi";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { CategoryDrop } from "./CategoryDrop";

export const Category = () => {
  // const options = [
  //   { icon: <FaPlusCircle />, name: " Add Category", color: "#0166FF" },
  //   { icon: <GoHomeFill />, name: " Home", color: "#0166FF" },
  //   { icon: <PiGiftFill />, name: "Gift" },
  //   { icon: <PiForkKnifeFill />, name: "Food" },
  //   { icon: <PiWineFill />, name: "Drink" },
  //   { icon: <PiTaxiFill />, name: "Taxi" },
  //   { icon: <PiTShirtFill />, name: "Shopping" },
  // ];
  const [categories, setCategories] = useState(false);

  return (
    <div className="absolute w-full">
      <button
        onClick={() => {
          setCategories(!categories);
        }}
        className="w-full h-12 rounded border bg-white flex items-center justify-between px-3 "
      >
        <p className="text-[#94A3B8]">Find and choose category</p>
        <FaCaretDown />
      </button>
      {categories && <CategoryDrop catBtn={categories} />}
    </div>
  );
};
