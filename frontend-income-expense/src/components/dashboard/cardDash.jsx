import Image from "next/image";
import { Navbar } from "./DashNavbar";
import { Dot } from "@/images/dot";
import { Arrow } from "@/images/arrow";
import { BlueDot } from "@/images/blueDot";
import { DownArrow } from "@/images/downArrow";
import { BarChart } from "./BarChart";
import { DoughnutChart } from "./PieChart";
import { RecordCard } from "./RecordCard";

export const CardDash = () => {
  return (
    <div className="bg-gray-50 w-full h-full gap-4 flex flex-col items-center mt-12">
      <Navbar />
      <div className="flex gap-6 mt-6">
        <div className="relative">
          <div>
            <Image src="/Large.png" width={430} height={230} />
          </div>
          <div className="absolute top-6 left-6">
            <Image src="/geldWhite.png" width={70} height={70} />
          </div>
          <div className="absolute bottom-8 left-8 ">
            <p className="text-xl text-gray-300">Cash</p>
            <p className="text-2xl text-white">10,000,00</p>
          </div>
        </div>
        <div className="bg-white w-[430px] h-[230px] rounded-2xl">
          <div className="flex justify-start items-center gap-4 px-8 py-3 ">
            <Dot />
            <p className="text-xl font-bold">Your income</p>
          </div>
          <hr />
          <div className="flex flex-col justify-center gap-4 px-10 py-6">
            <div>
              <p className="text-4xl">1,200,000₮</p>
              <p className="text-xl text-[#64748B]">Your income amount</p>
            </div>
            <div className="flex items-center gap-2">
              <Arrow />
              <p>32% from the last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white w-[430px] h-[230px] rounded-2xl">
          <div className="flex justify-start items-center gap-4 px-8 py-3 ">
            <BlueDot />
            <p className="text-xl font-bold">Total expenses</p>
          </div>
          <hr />
          <div className="flex flex-col justify-center gap-4 px-10 py-6">
            <div>
              <p className="text-4xl">- 1,200,000₮</p>
              <p className="text-xl text-[#64748B]">Your income amount</p>
            </div>
            <div className="flex items-center gap-2">
              <DownArrow />
              <p>32% from the last month</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BarChart />
        <DoughnutChart />
      </div>
      <RecordCard />
    </div>
  );
};
