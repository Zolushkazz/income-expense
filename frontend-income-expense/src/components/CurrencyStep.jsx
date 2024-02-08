import Image from "next/image";

// import { CurrencySelect } from "./CurrencySelect";
import { useState } from "react";

export const CurrencyStep = (props) => {
  const { count } = props;

  return (
    <div className="w-[100vw] flex flex-col items-center gap-24 mt-24">
      <Image src="/geld.png" width={120} height={50} alt="" />
      <ul className="steps steps-vertical lg:steps-horizontal w-[20%] flex flex-col items-center step-secondary-container">
        <li className={`step step-primary`}>Currency</li>
        <li className={`step ${count >= 2 ? "step-primary" : ""}`}>Balance</li>
        <li className={`step ${count >= 3 ? "step-primary" : ""}`}>Finish</li>
      </ul>
    </div>
  );
};
