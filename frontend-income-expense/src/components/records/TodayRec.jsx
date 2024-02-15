import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill } from "react-icons/pi";

export const TodayRec = () => {
  const data = [
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Today</h2>
      <div className="flex gap-5 justify-between items-center border rounded-lg bg-[#FFF] py-2 px-4">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
          />
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0166FF] flex items-center pl-2">
              <GoHomeFill color="white" size={24} />
            </div>
            <div>
              <p className="text-lg">Lending & Renting</p>
              <p className="text-sm text-[#6B7280]">14:00</p>
            </div>
          </div>
        </div>
        <p className="text-[#23E01F]">- 1,000₮</p>
      </div>
      <div className="flex gap-5 justify-between items-center border rounded-lg bg-[#FFF] py-2 px-4">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
          />
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF4545] flex items-center pl-2">
              <PiForkKnifeFill color="white" size={24} />
            </div>
            <div>
              <p className="text-lg">Foods & Drinks</p>
              <p className="text-sm text-[#6B7280]">14:00</p>
            </div>
          </div>
        </div>
        <p className="text-[#F54949]">- 1,000₮</p>
      </div>

      {data.map(({ text, time, amount }, index) => {
        return (
          <div
            key={index}
            className="flex gap-5 justify-between items-center border rounded-lg bg-[#FFF] py-2 px-4"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
              />
              <div className="w-10 h-10 rounded-full bg-[#FF4545] flex items-center pl-2">
                <PiForkKnifeFill color="white" size={24} />
              </div>
              <div>
                <p className="text-lg">{text}</p>
                <p className="text-sm text-[#6B7280]">{time}</p>
              </div>
            </div>
            <p className="text-[#EAB308]">{amount}</p>
          </div>
        );
      })}
    </div>
  );
};
