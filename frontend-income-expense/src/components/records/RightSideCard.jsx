import { Date } from "./RecordDate";
import { TodayRec } from "./TodayRec";
import { YesterdayRecs } from "./YesterdayRecs";

export const RightSideCard = () => {
  return (
    <div className="w-4/5 flex flex-col gap-5">
      <Date />
      <TodayRec />
      <YesterdayRecs />
    </div>
  );       
};
