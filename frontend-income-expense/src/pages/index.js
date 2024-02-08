import Image from "next/image";

import { Login } from "@/components/Login";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Login />
    </div>
  );
}
