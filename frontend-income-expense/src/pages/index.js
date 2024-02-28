import Image from "next/image";

import { Login } from "@/components/signLogin/Login";
import { CardDash } from "@/components/dashboard/cardDash";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Login />
      <CardDash />
    </div>
  );
}
