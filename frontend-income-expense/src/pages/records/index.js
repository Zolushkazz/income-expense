import { Navbar } from "@/components/dashboard/DashNavbar";
import Dashboard from "../dashboard";
import { RecordCol } from "@/components/records/RecordColumn";
import { RightSideCard } from "@/components/records/RightSideCard";

export default function Records() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100%] bg-gray-200 flex gap-6">
        <RecordCol />
        <RightSideCard />
      </div>
    </>
  );
}
