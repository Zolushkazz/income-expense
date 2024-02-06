import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoadingEnter = () => {
  return (
    <div className="w-100vw h-[100vh] flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-9">
        <div className="flex items-center gap-4 h-full">
          <Image src="/geldLogo.png" width={54} height={54} alt="" />
          <h2 className="text-6xl font-bold">Geld</h2>
        </div>
        <AiOutlineLoading3Quarters
          className="animate-spin"
          size={90}
          color="#0166FF"
        />
        <p className="text-3xl">Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
};
