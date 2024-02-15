import { GoHomeFill } from "react-icons/go";

export const RecordCard = () => {
  const data = [
    { title: "Lending & Renting", amount: "- 1,000₮", time: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", time: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", time: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", time: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", time: "3 hours ago" },
  ];
  return (
    <div className="bg-[#fff] w-[1200px] rounded-xl flex flex-col p-8">
      <h3 className="text-md font-bold text-[#0F172A] pb-3">Last Records</h3>
      <hr />
      <div className=" flex flex-col divide-y-2">
        {data.map(({ title, amount, time }, i) => {
          return (
            <div key={i} className="flex gap-5 justify-between py-5">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0166FF] flex items-center pl-2">
                  <GoHomeFill color="white" size={24} />
                </div>
                <div>
                  <p className="text[#000000] text-md font-bold">{title}</p>
                  <p className="text-sm text-[#6B7280]">{time}</p>
                </div>
              </div>
              <p className="text-[#84CC16]">{amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
