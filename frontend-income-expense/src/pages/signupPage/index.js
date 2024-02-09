import { BalanceStep } from "@/components/stepper/BalanceStep";
import { SignUp } from "../../components/signLogin/SignUp";
import { CurrencySelect } from "@/components/stepper/CurrencySelect";
import { FinishStep } from "@/components/stepper/FinishStep";
import { useState } from "react";

const Stepper = [SignUp, CurrencySelect, BalanceStep, FinishStep];

export default function Home() {
  const [step, setStep] = useState(0);

  const Counting = () => {
    setStep(step + 1);
  };

  const Steping = Stepper[step];

  if (step < Stepper.length) {
    return <Steping button={Counting} />;
  }

  return <div className="w-[100vw] h-[100vh] "></div>;
}
