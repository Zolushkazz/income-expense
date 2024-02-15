import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";
import { useState } from "react";

export const Date = () => {
  const data = [
    { time: "Last 30 days" },
    { time: "Last 3 months" },
    { time: "Last week" },
    { time: "Yesterday" },
  ];

  const [slide, setSlide] = useState(0);

  const nextClick = () => {
    setSlide(slide + 1);
  };
  const previousClick = () => {
    setSlide(slide - 1);
  };

  return (
    <div>
      <div>
        <button disabled={slide === 0} onClick={previousClick}>
          <CiSquareChevLeft />
        </button>
        <p className="text-xl">{data.time}</p>
        <button disabled={slide === data.length - 1} onClick={nextClick}>
          <CiSquareChevRight />
        </button>
      </div>
    </div>
  );
};
