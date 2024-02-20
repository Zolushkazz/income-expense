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
      label: [],
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#F2901C", "#16BDCA", "#FDBA8C", "#E74694", "#1C64F2"],
    },
  ],
};
export const DoughnutChart = () => {
  return (
    <div className="bg-[#fff] w-[47%] h-[350px] p-5 rounded-2xl">
      <div className="flex justify-between  py-3">
        <h3 className="text-xl font-bold">Income-Expense</h3>
        <p>Jun 1 - Nov 30</p>
      </div>
      <hr />
      <div className="w-[250px] h-[250px]">
        <Doughnut className="py-4 " data={data} />
      </div>
    </div>
  );
};
