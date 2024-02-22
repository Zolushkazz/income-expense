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

import { AddCategory } from "./AddCategory";
import { AddModal } from "./AddModal";

export const CategoryDrop = ({ catBtn, handleShowRecordModal }) => {
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

  const [dropIcons, setDropIcons] = useState(false);
  // const [isCategoryClicked, setIsCategoryClicked] = useState(false);

  // const handleDropIcons = () => {
  //   setDropIcons(!dropIcons);
  // };

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
        return (
          <div key={index} className="flex items-center gap-10 p-3 ">
            <div>{icon}</div>
            <p className="text-xl">{name}</p>
          </div>
        );
      })}
    </div>
  );
};
