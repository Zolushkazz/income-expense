import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import {
  PiGiftFill,
  PiWineFill,
  PiTaxiFill,
  PiTShirtFill,
} from "react-icons/pi";
import { HiComputerDesktop } from "react-icons/hi2";
import { useState } from "react";
import { Category } from "./Category";

export const CategoryDrop = ({
  catBtn,
  handleShowRecordModal,
  setCategory,
  setGetRecordValue,
  setCategories,
  setGetInputValue,
}) => {
  // const handleCategory = (icon, name) => {
  //   setGetInputValue({ ...getInputValue, icon: icon, name: name });
  // };
  const options = [
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <PiGiftFill size={24} color="#FF4545" />, name: "Gift" },
    { icon: <PiForkKnifeFill size={24} color="#FB8A22" />, name: "Food" },
    { icon: <PiWineFill size={24} color="#A804AB" />, name: "Drink" },
    { icon: <PiTaxiFill size={24} color="#EAB308" />, name: "Taxi" },
    { icon: <PiTShirtFill size={24} color="#EAB308" />, name: "Shopping" },
    {
      icon: <HiComputerDesktop size={24} color="#D1D5DB" />,
      name: "Communication",
    },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
  ];

  // const [isCategoryClicked, setIsCategoryClicked] = useState(false);

  return (
    <div className="border-2 w-[348px] h-[382px] px-4 overflow-auto bg-white relative">
      <button
        onClick={handleShowRecordModal}
        className="flex items-center gap-10 p-3 text-xl"
      >
        <FaPlusCircle size={24} color="#0166FF" /> Add category
      </button>
      <hr />
      {options.map(({ icon, name }, index) => {
        const handleCategory = (el) => {
          setCategory(name);
          setGetRecordValue(name);
          setCategories(false);
          setGetInputValue((prev) => ({ ...prev, category: name }));
        };

        return (
          <div
            key={index}
            className="flex items-center gap-10 p-3 cursor-pointer"
            onClick={handleCategory}
          >
            <div>{icon}</div>
            <p className="text-xl">{name}</p>
          </div>
        );
      })}
    </div>
  );
};
