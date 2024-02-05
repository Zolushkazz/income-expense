import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export const LoadingEnter = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image src="/geldLogo.png" width={44} height={44} alt="" />
        <h2 className="text-3xl font-bold">Geld</h2>
      </div>
    </div>
  );
};
