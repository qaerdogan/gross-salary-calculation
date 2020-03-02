import React from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import FormSalary from "./components/formSalary";
import ResultGraphLine from "./components/lineResultGraph";
import ResultGraphPie from "./components/pieResultGraph";
import ResultTable from "./components/resultTable";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App2.css";

const App2 = () => {
  const [payrollTable, calculateSalary] = useState();
  const [lineData, makeLineData] = useState();
  const [pieData, makePieData] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const GetGrossSalaries = e => {
    e.preventDefault();
    const netSalary = e.target.elements.netSalary.value;
    //var pointNum = parseFloat(netSalary);

    if (isNaN(netSalary)) {
      console.log("Value Must be Numeric");
      setErrorMsg("Value Must be Numeric");
      return;
    } else {
      setErrorMsg("");
    }

    console.log(netSalary);
    axios.get(`/payroll/${netSalary}`).then(res => {
      const resultPayroll = res.data.payroll;
      resultPayroll.map(item => {
        item.gross = Math.round((item.gross + Number.EPSILON) * 100) / 100;
        item.sgkIsci = Math.round((item.sgkIsci + Number.EPSILON) * 100) / 100;
        item.issizlik =
          Math.round((item.issizlik + Number.EPSILON) * 100) / 100;
        item.damgaVerg =
          Math.round((item.damgaVerg + Number.EPSILON) * 100) / 100;
        item.netSalary =
          Math.round((item.netSalary + Number.EPSILON) * 100) / 100;
        item.kgvm = Math.round((item.kgvm + Number.EPSILON) * 100) / 100;
        item.gvm = Math.round((item.gvm + Number.EPSILON) * 100) / 100;
        item.gv = Math.round((item.gv + Number.EPSILON) * 100) / 100;
      });
      calculateSalary(resultPayroll);
      //Make ready data for table componenet
      const _lineData = [...resultPayroll];
      makeLineData(_lineData.map(item => item.gross));

      //Make ready data for graps(line,pie) component.
      const _pieData = [...resultPayroll];
      const totalTax = _pieData.map(item => item.gv).reduce((x, y) => x + y);

      const totalNetSalary = _pieData
        .map(item => item.netSalary)
        .reduce((x, y) => x + y);

      makePieData([totalNetSalary, totalTax]);

      console.log(resultPayroll);
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <main>
        <div className="form-salary">
          <FormSalary
            ValidationSummary={errorMsg}
            onSubmitFunction={GetGrossSalaries}
          />
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
