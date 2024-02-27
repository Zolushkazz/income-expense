import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { CategoryDrop } from "./CategoryDrop";

export const Category = ({
  handleShowRecordModal,
  setCategory,
  getRecordValue,
  setGetRecordValue,
  setGetInputValue,
}) => {
  const [categories, setCategories] = useState(false);

  if (setCategories === "Add Category") {
    setCategories("");
    handleShowRecordModal;
  }

  return (
    <div className="absolute">
      <input
        value={getRecordValue}
        type="text"
        onClick={() => {
          setCategories(!categories);
        }}
        placeholder="Find and choose category"
        className="w-[380px] h-12 rounded border bg-white flex items-center justify-between px-3 "
      />

      {categories && (
        <CategoryDrop
          setGetInputValue={setGetInputValue}
          setCategories={setCategories}
          setGetRecordValue={setGetRecordValue}
          handleShowRecordModal={handleShowRecordModal}
          setCategory={setCategory}
          catBtn={categories}
        />
      )}
    </div>
  );
};
