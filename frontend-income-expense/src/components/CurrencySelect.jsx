import { PiMoneyFill } from "react-icons/pi";
import { StepperButton } from "./StepperButton";

const options = [
  { value: "mnt", option: "MNT-Mongolian Tugrik" },
  { value: "usd", option: "USD-American Dollar" },
  { value: "won", option: "WON-Korean Won" },
  { value: "yn", option: "YN-Chinese Yuan" },
  { value: "jpw", option: "JPW-Japanese Yen" },
  { value: "euro", option: "EUR-Europian Euro" },
];

export const CurrencySelect = ({ setCurrency, currency }) => {
  const handleSelect = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="flex flex-col gap-16 w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center w-full h-full items-center gap-10 mt-24">
        <div className="bg-[#0166FF] w-[60px] h-[60px] rounded-full flex items-center justify-center">
          <PiMoneyFill
            color="white"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <p className="text-2xl font-bold">Select base currency</p>
      </div>
      <div className="flex flex-col items-center gap-4 w-full h-[70px] rounded-lg p-4 mb-16">
        <select
          name=""
          id=""
          value={currency}
          onChange={handleSelect}
          className="border-2 bg-slate-100 w-[25%] h-[70px] rounded-lg p-4 text-2xl"
        >
          {options.map(({ option, value }, index) => (
            <option value={value} key={index}>
              {option}
            </option>
          ))}
        </select>
        <p className="w-[25%] text-lg text-[#475569]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
      </div>
      <StepperButton />
    </div>
  );
};