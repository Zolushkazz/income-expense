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

export const CategoryDrop = ({ catBtn }) => {
  const options = [
    {
      icon: <FaPlusCircle size={24} />,
      name: " Add Category",
      color: "#0166FF",
    },
    { icon: <GoHomeFill size={24} />, name: " Home", color: "#0166FF" },
    { icon: <PiGiftFill size={24} />, name: "Gift" },
    { icon: <PiForkKnifeFill size={24} />, name: "Food" },
    { icon: <PiWineFill size={24} />, name: "Drink" },
    { icon: <PiTaxiFill size={24} />, name: "Taxi" },
    { icon: <PiTShirtFill size={24} />, name: "Shopping" },
    { icon: <HiComputerDesktop size={24} />, name: "Communication" },
    { icon: <GoHomeFill size={24} />, name: " Home", color: "#0166FF" },
    { icon: <GoHomeFill size={24} />, name: " Home", color: "#0166FF" },
    { icon: <GoHomeFill size={24} />, name: " Home", color: "#0166FF" },
    { icon: <GoHomeFill size={24} />, name: " Home", color: "#0166FF" },
    { icon: <GoHomeFill size={24} />, name: " Home", color: "#0166FF" },
  ];

  return (
    <div className="border-2 w-[348px] h-[382px] px-4 overflow-auto bg-white">
      {options.map(({ icon, name, color }, index) => {
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
