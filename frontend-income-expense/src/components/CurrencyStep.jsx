import Image from "next/image";

// import { CurrencySelect } from "./CurrencySelect";
import { useState } from "react";

export const CurrencyStep = () => {
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("");
  const [button, setButton] = useState("");

  console.log(currency);
  return (
    <div className="w-[100vw] flex flex-col items-center gap-24 mt-24">
      <Image src="/geld.png" width={120} height={50} alt="" />
      <ul className="steps steps-vertical lg:steps-horizontal w-[20%] flex flex-col items-center step-secondary-container">
        <li className={`step step-primary`}>Currency</li>
        <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Balance</li>
        <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Finish</li>
      </ul>
    </div>
  );
};
