import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartInfo } from "@/helpers/chartInfo";
import capitalizeFirstLetter from "@/helpers/FirstToUpperCase";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "#fff";
ChartJS.defaults.borderColor = "#fff2";

const LineChart = () => {
  const incomes = Object.keys(chartInfo).map((month) => {
    return chartInfo[month].income;
  });

  const expenses = Object.keys(chartInfo).map((month) => {
    return chartInfo[month].expenses;
  });

  const data = {
    labels: Object.keys(chartInfo).map((item) => capitalizeFirstLetter(item)),
    datasets: [
      {
        label: "Income",
        data: incomes,
        borderColor: "#4e8",
        backgroundColor: "#4e8",
        tension: 0.5,
      },
      {
        label: "Expenses",
        data: expenses,
        borderColor: "#e84",
        backgroundColor: "#e84",
        tension: 0.5,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
