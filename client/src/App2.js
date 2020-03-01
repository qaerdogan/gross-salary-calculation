import React from "react";
import NavBar from "./components/navbar";
import FormSalary from "./components/formSalary";
import ResultGraph from "./components/resultGraph";
import ResultTable from "./components/resultTable";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App2 = () => {
  const [salaryTableData, calculateSalary] = useState();
  const GetGrossSalaries = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then(posts => {
        console.log(posts);
      });
    calculateSalary("Merhaba Hacı");
  };
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <div className="container">
          <FormSalary onClickFunction={GetGrossSalaries} />
        </div>
        <div className="container">
          <ResultTable tableData={salaryTableData} />
        </div>
        <div className="container">
          <ResultGraph />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App2;
