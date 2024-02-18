import { GoHomeFill } from "react-icons/go";

export const AddCategory = () => {
  const icons = [
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
    { icon: <GoHomeFill /> },
  ];
  return (
    <div>
      <div>
        <p>Add Category</p>
        <p>X</p>
      </div>
      <select name="" id="" className="flex w-96">
        {icons.map(({ icon }, index) => {
          <option value="" key={index}>
            {icon}
          </option>;
        })}
      </select>
      <select name="" id=""></select>
    </div>
  );
};
