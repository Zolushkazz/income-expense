import Image from "next/image";
import { CurrencyStep } from "./CurrencyStep";
import { StepperButton } from "./StepperButton";

export const FinishStep = (props) => {
  const text = "Go to Dashboard";
  return (
    <div className="flex flex-col h-full w-full  ">
      <div className="flex flex-col justify-center items-center">
        <div>
          <CurrencyStep />
        </div>
        <div className="flex flex-col justify-center w-[50%] h-full items-center">
          <Image src="/check.png" width={48} height={48} alt="" />
          <h3 className="text-2xl">Good Job!</h3>
          <p>
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
        </div>
        <StepperButton text={text} />
      </div>
    </div>
  );
};
