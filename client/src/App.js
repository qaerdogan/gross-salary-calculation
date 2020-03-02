import React from "react";
import axios from "axios";
import Intro from "./components/introduce";
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
  const [errorMsg, setErrorMsg] = useState("");

  //table tousand seperator.
  const roundHelper = numParam => {
    // return numParam;
    var formattedOutput = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2
    });

    var currency_symbol = "₺";
    return formattedOutput.format(numParam).replace(currency_symbol, "");
    //return Math.round((numParam + Number.EPSILON) * 100) / 100;
  };

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

    axios.get(`/payroll/${netSalary}`).then(res => {
      const resultPayroll = res.data.payroll;
      //Make ready data for graps(line,pie) and table component.
      const _lineData = [];
      const _pieData = [];
      resultPayroll.map(p => {
        _lineData.push(Object.assign({}, p));
        _pieData.push(Object.assign({}, p));
      });

      resultPayroll.map(item => {
        item.gross = roundHelper(item.gross);
        item.sgkIsci = roundHelper(item.sgkIsci);
        item.issizlik = roundHelper(item.issizlik);
        item.damgaVerg = roundHelper(item.damgaVerg);
        item.netSalary = roundHelper(item.netSalary);
        item.kgvm = roundHelper(item.kgvm);
        item.gvm = roundHelper(item.gvm);
        item.gv = roundHelper(item.gv);
      });
      calculateSalary(resultPayroll);

      makeLineData(_lineData.map(item => item.gross));

      const totalTax = _pieData.map(item => item.gv).reduce((x, y) => x + y);
      const totalNetSalary = _pieData
        .map(item => item.netSalary)
        .reduce((x, y) => x + y);

      makePieData([totalNetSalary, totalTax]);

      //console.log(resultPayroll);
    });
  };

  return (
    <React.Fragment>
      <NavBar />

      <main className="container">
        <div>
          <Intro />
        </div>

        <div className="form-salary">
          <FormSalary
            ValidationSummary={errorMsg}
            onSubmitFunction={GetGrossSalaries}
          />
        </div>

        <ResultTable tableData={payrollTable} />

        <div className="row">
          <div className="col-6 graph">
            <ResultGraphLine lineData={lineData} />
          </div>
          <div className="col-6">
            <ResultGraphPie pieData={pieData} />
          </div>
        </div>

        <div className="graph"></div>
      </main>
      <footer class="footer">
        <div class="container">
          <span class="text-muted">Gross to net salary. 2020</span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App2;
