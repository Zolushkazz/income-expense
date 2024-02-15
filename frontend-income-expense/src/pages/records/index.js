import { Navbar } from "@/components/dashboard/DashNavbar";
import Dashboard from "../dashboard";
import { RecordCol } from "@/components/records/RecordColumn";
import { RightSideCard } from "@/components/records/RightSideCard";

export default function Records() {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="max-w-[1440px] mx-auto w-full">
        <Navbar />
        <div className="w-full h-[100vh] mt-12 flex gap-6">
          <RecordCol />
          <RightSideCard />
        </div>
      </div>
    </div>
  );
}
