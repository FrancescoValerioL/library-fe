import { useEffect, useState } from "react";
import { Bar, Pie, PolarArea } from "react-chartjs-2";
import { Chart, ArcElement, RadialLinearScale, LinearScale, CategoryScale, BarElement } from "chart.js";
import "./LChart.scss";
Chart.register(ArcElement);
Chart.register(RadialLinearScale);
Chart.register(LinearScale);
Chart.register(CategoryScale);
Chart.register(BarElement);

const LChart = (props: any) => {
  const [chartData, setChartData] = useState({
    labels: ["Packed: " + props.packed, "Read: " + props.read],
    datasets: [
      {
        label: "Users Gained ",
        data: [props.packed, props.read],
        backgroundColor: ["rgba(228, 90, 40,0.5)", "rgba(172, 198, 219,0.5)"],
      },
    ],
  });

  return (
    <div className="chart-container">
      <h3 style={{ textAlign: "center" }}>Total: {props.max}</h3>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              min: 0,
              max: props.max,
              ticks: {
                stepSize: 1,
              },
            },
          },
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};
export default LChart;
