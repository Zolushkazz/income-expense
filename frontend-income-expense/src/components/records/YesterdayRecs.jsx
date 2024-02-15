import { PiForkKnifeFill } from "react-icons/pi";

export const YesterdayRecs = () => {
  const data = [
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
    { text: "Food & Drinks", time: "14:00", amount: "- 1,000₮" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Yesterday</h2>
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
