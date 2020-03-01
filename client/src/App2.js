import React from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import FormSalary from "./components/formSalary";
import ResultGraphLine from "./components/lineResultGraph";
import ResultGraphPie from "./components/pieResultGraph";
import ResultTable from "./components/resultTable";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App2 = () => {
  const [payrollTable, calculateSalary] = useState();
  const [lineData, makeLineData] = useState();
  const [pieData, makePieData] = useState();

  const GetGrossSalaries = e => {
    e.preventDefault();
    const netSalary = e.target.elements.netSalary.value;
    console.log(netSalary);
    axios.get(`/payroll/${netSalary}`).then(res => {
      const resultPayroll = res.data.payroll;
      calculateSalary(resultPayroll);
      const _lineData = [...resultPayroll];
      makeLineData(_lineData.map(item => item.gross));

      const _pieData = [...resultPayroll];
      const totalGrossSalary = _pieData
        .map(item => item.gross)
        .reduce((x, y) => x + y);
      const totalTax = _pieData
        .map(item => item.netSalary)
        .reduce((x, y) => x + y);
      makePieData([totalGrossSalary, totalTax]);

      console.log(resultPayroll);
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <main>
        <div className="container">
          <FormSalary onSubmitFunction={GetGrossSalaries} />
        </div>
        <div className="container">
          <ResultTable tableData={payrollTable} />
        </div>
        <div className="container">
          <ResultGraphLine lineData={lineData} />
          <ResultGraphPie pieData={pieData} />
        </div>
        <div className="container"></div>
      </main>
    </React.Fragment>
  );
};

export default App2;
