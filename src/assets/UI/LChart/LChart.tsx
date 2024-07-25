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
    labels: ["Packed", "Read"],
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
      <h2 style={{ textAlign: "center" }}>Packed/Read</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              min: 0,
              max: props.max,
              ticks: {
                // forces step size to be 50 units
                stepSize: 1,
              },
              /* pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 15,
                },
              }, */
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
