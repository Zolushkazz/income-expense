export const StepperButton = (props) => {
  const { text } = props;
  return (
    <button className="w-[25%] h-[70px] bg-[#0166FF] rounded-[30px] text-white text-2xl">
      {text}
    </button>
  );
};
