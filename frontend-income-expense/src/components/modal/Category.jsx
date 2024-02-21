import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { CategoryDrop } from "./CategoryDrop";

export const Category = ({ handleShowRecordModal }) => {
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
      {categories && (
        <CategoryDrop
          catBtn={categories}
          handleShowRecordModal={handleShowRecordModal}
        />
      )}
    </div>
  );
};
