import React from "react";
import { Pie } from "react-chartjs-2";

const ResultGraphPie = props => {
  const data = {
    labels: ["Net Salary", "Total Tax"],
    datasets: [
      {
        label: "Net Salary / Tax",
        //backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: props.pieData,
        borderWidth: 0,
        backgroundColor: [
          "rgba(255, 99, 131, 0.8)",
          "rgba(54, 162, 233, 0.8)"
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
      <Pie
        data={data}
        width={50}
        height={50}
        options={{
          maintainAspectRatio: false,
          title: { display: true, text: "Net Salary / Tax", fontSize: 25 },
          legend: { display: true, position: "bottom" }
        }}
      ></Pie>
    </>
  );
};

export default ResultGraphPie;
