export const StepperButton = (props) => {
  const { onClick, text } = props;
  return (
    <button
      onClick={onClick}
      className="w-[25%] h-[70px] bg-[#0166FF] rounded-[30px] text-white text-2xl"
    >
      {text}
    </button>
  );
};
