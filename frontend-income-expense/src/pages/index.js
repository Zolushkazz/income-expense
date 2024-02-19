import Image from "next/image";

import { Login } from "@/components/signLogin/Login";
import { CategoryDrop } from "@/components/modal/CategoryDrop";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] ">
      {/* <Login /> */}
      <CategoryDrop />
    </div>
  );
}
