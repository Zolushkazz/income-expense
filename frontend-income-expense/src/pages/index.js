import Image from "next/image";
import { CurrencyStep } from "@/components/CurrencyStep";

export default function Home() {
  return (
    <div className="w-[100vw]  h-[100vh]">
      <CurrencyStep />
    </div>
  );
}
