import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import Select from "react-dropdown-select";
import {
  PiGiftFill,
  PiWineFill,
  PiTaxiFill,
  PiTShirtFill,
} from "react-icons/pi";

export const Category = () => {
  const options = [
    { icon: <FaPlusCircle />, name: " Add Category", color: "#0166FF" },
    { icon: <GoHomeFill />, name: " Home", color: "#0166FF" },
    { icon: <PiGiftFill />, name: "Gift" },
    { icon: <PiForkKnifeFill />, name: "Food" },
    { icon: <PiWineFill />, name: "Drink" },
    { icon: <PiTaxiFill />, name: "Taxi" },
    { icon: <PiTShirtFill />, name: "Shopping" },
  ];

  return (
    // <Select
    //   className="w-full h-12 rounded border bg-white"
    //   placeholder="Find and choose category"
    //   name="select"
    //   defaultvalue={options[0]}
    //   options={options}
    //   labelField="icon"
    //   valueField="name"
    // >
    //   <p>{options.name}</p>
    // </Select>
    <select
      options={options}
      color={options.color}
      className="w-full h-12 rounded border bg-white"
      placeholder="Find and choose category"
    >
      <option className="flex items-center text-xl">
        <p>{options.icon}</p>
        <p>{options.name}</p>
      </option>
    </select>
  );
};
