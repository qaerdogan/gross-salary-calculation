import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const ResultGraphLine = props => {
  console.log("lineData", props.lineData);
  const data = {
    labels: months,
    datasets: [
      {
        label: "Salary",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: props.lineData,
        borderWidth: 0,
        backgroundColor: [
          "rgba(255, 99, 131, 0.8)"
          // "rgba(54, 162, 233, 0.8)",
          // "rgba(255, 205, 86, 0.2)",
          // "rgba(73, 192, 192, 0.2)",
          // "rgba(153, 101, 255, 0.2)",
          // "rgba(255, 159, 62, 0.2)"
        ]
      }
    ]
  };
  return (
    <>
      <Line
        data={data}
        width="300"
        height="100"
        options={{
          maintainAspectRatio: false,
          title: { display: true, text: "Month - Gross Salary", fontSize: 25 },
          legend: { display: true, position: "right" }
        }}
      ></Line>
    </>
  );
};

export default ResultGraphLine;
