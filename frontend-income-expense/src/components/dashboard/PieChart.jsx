import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#F2901C", "#16BDCA", "#FDBA8C", "#E74694", "#1C64F2"],
    },
  ],
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
};
export const DoughnutChart = () => {
  return (
    <div className="bg-[#fff] w-[570px] h-[284px] p-5 rounded-2xl">
      <div className="flex justify-between w-[530px] py-3">
        <h3 className="text-xl font-bold">Income-Expense</h3>
        <p>Jun 1 - Nov 30</p>
      </div>
      <hr />
      <div>
        <Doughnut className="py-4 h-[284px]" data={data} />
      </div>
    </div>
  );
};
