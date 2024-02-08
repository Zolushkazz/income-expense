import Image from "next/image";
import { CurrencyStep } from "./CurrencyStep";
import { StepperButton } from "./StepperButton";

export const FinishStep = (props) => {
  const text = "Go to Dashboard";
  return (
    <div className="flex flex-col h-full w-full items-center gap-16 mt-24">
      <div className="flex flex-col justify-center items-center gap-32">
        <div>
          <CurrencyStep count={3} />
        </div>
        <div className="flex flex-col justify-center w-[50%] h-full items-center gap-8">
          <Image src="/check.png" width={48} height={48} alt="" />
          <h3 className="text-3xl">Good Job!</h3>
          <p className="text-2xl w-[50%]  text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
        </div>
      </div>
      <StepperButton text={text} />
    </div>
  );
};
