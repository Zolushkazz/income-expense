import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "start",
    },
    title: {
      display: true,
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

  datasets: [
    {
      label: "Income",
      backgroundColor: "#84CC16",
      barThickness: 15,
      borderRadius: 20,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [3000000, 2200000, 2440000, 1040000, 1500000, 1850000, 2800000],
    },
    {
      label: "Expense",
      backgroundColor: "#F97316",
      barThickness: 15,
      borderRadius: 20,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [2300000, 2100000, 2140000, 940000, 1000000, 1150000, 1800000],
    },
  ],
};

export const BarChart = () => {
  return (
    <div className="bg-[#fff] w-[570px] h-[284px] px-8 py-5 rounded-2xl">
      <h3 className="text-xl font-bold">Income-Expense</h3>
      <hr />
      <Bar className="py-4 h-[284px]" options={options} data={data} />
    </div>
  );
};
