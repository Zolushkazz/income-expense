import Image from "next/image";
import { CurrencyStep } from "@/components/CurrencyStep";
import { BalanceStep } from "@/components/BalanceStep";
import { CurrencySelect } from "@/components/CurrencySelect";
import { FinishStep } from "@/components/FinishStep";

export default function Home() {
  return (
    <div className="w-[100vw]  h-[100vh]">
      {/* <CurrencySelect /> */}
      {/* <BalanceStep /> */}
      <FinishStep />
    </div>
  );
}
