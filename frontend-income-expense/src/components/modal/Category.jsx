import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { CategoryDrop } from "./CategoryDrop";

export const Category = ({ handleShowRecordModal, setCategory }) => {
  const [categories, setCategories] = useState(false);
  if (setCategories === "Add Category") {
    setCategories("");
    handleShowRecordModal;
  }

  return (
    <div className="absolute">
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
          handleShowRecordModal={handleShowRecordModal}
          setCategory={setCategory}
          catBtn={categories}
        />
      )}
    </div>
  );
};
