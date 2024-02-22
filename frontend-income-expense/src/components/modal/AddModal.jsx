import { useState } from "react";
import { Category } from "./Category";

export const AddModal = ({ setXbtn, handleShowRecordModal }) => {
  const [color, setColor] = useState(false);

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-opacity-50 bg-black">
      <div className="bg-white w-fit h-fit rounded-xl ">
        <div className="flex items-center justify-between py-5 px-6">
          <h3 className="text-xl font-semibold">Add Record</h3>
          <button
            onClick={() => {
              setXbtn(false);
            }}
            className="text-3xl"
          >
            x
          </button>
        </div>
        <hr />
        <div className="flex gap-8 py-3 px-6">
          <div className="w-96 flex flex-col gap-5">
            <div className="w-96 bg-[#F3F4F6] border rounded-[25px] flex">
              <button
                onClick={() => {
                  setColor(true);
                }}
                className={`w-1/2 py-2 rounded-[25px] ${
                  color
                    ? "text-[#F9FAFB] bg-[#0166FF]"
                    : "text-[#00000] bg-[#F3F4F6]"
                }`}
              >
                Expense
              </button>
              <button
                onClick={() => {
                  setColor(false);
                }}
                className={`w-1/2 py-2 rounded-[25px] ${
                  color
                    ? "text-[#00000] bg-[#F3F4F6]"
                    : "text-[#F9FAFB] bg-[#16A34A]"
                }`}
              >
                Income
              </button>
            </div>
            <div className="relative bg-[#F3F4F6] border rounded-lg pl-2">
              <input
                className="w-full h-20 bg-[#F3F4F6] border rounded-lg pl-2"
                placeholder="₮ 000.00"
                type="number"
              />
              <p className="absolute top-0 left-2 text-md">Amount</p>
            </div>
            <div className="relative w-full mb-10">
              <h3>Category</h3>

              <Category handleShowRecordModal={handleShowRecordModal} />
            </div>
            <div className="flex gap-8 items-center w-96">
              <div className="">
                <p>Date</p>
                <input
                  type="date"
                  className="w-44 border-2 rounded-lg py-2 px-2"
                />
              </div>
              <div className="">
                <p>Date</p>
                <input
                  type="time"
                  className="w-44 border-2 rounded-lg py-2 px-2"
                />
              </div>
            </div>
            <button
              className={`w-full rounded-[25px] p-2 bg-[#0166FF]  ${
                color
                  ? "text-[#ffffff] bg-[#0166FF]"
                  : "text-[#ffffff]  bg-[#16A34A]"
              }`}
            >
              Add Record
            </button>
          </div>
          <div className="w-80 flex flex-col gap-6 ">
            <div className="flex flex-col gap-3 ">
              <p>Payee</p>
              <input
                placeholder="Write here"
                className="h-12 w-full p-3 rounded-lg bg-[#F3F4F6]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Note</p>
              <textarea
                placeholder="Write here"
                className="h-60 w-full p-3 rounded-lg bg-[#F3F4F6]"
              />
            </div>
          </div>
        </div>
      </div>
      {}
    </div>
  );
};
