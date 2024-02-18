import Image from "next/image";

import { Login } from "@/components/signLogin/Login";
import { AddCategory } from "@/components/modal/AddCategory";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] ">
      {/* <Login /> */}
      <AddCategory />
    </div>
  );
}
