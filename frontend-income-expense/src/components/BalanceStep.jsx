import { PiCoinsFill } from "react-icons/pi";
import { StepperButton } from "./StepperButton";
import { CurrencyStep } from "./CurrencyStep";

export const BalanceStep = (props) => {
  const text = "Confirm";
  const { button } = props;

  return (
    <div className="flex flex-col gap-16 w-full h-full items-center  mt-24">
      <CurrencyStep count={2} />
      <div className="w-[25%] flex flex-col items-center gap-4">
        <div className="bg-[#0166FF] w-[60px] h-[60px] rounded-full flex items-center justify-center">
          <PiCoinsFill
            color="white"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          />
        </div>

        <p className="text-3xl font-bold">Set up your cash Balance</p>
      </div>
      <div className="flex flex-col w-[25%] gap-4">
        <input
          type="text"
          placeholder="Email"
          className="border-2 bg-slate-100 w-full h-[70px] rounded-lg p-4 text-2xl   required,"
        />
        <p className="text-xl text-[#475569]">
          How much cash do you have in your wallet?
        </p>
      </div>
      <StepperButton onClick={button} text={text} />
    </div>
  );
};
