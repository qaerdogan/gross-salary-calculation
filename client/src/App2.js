import React from "react";
import NavBar from "./components/navbar";
import FormSalary from "./components/formSalary";
import ResultGraph from "./components/resultGraph";
import ResultTable from "./components/resultTable";
import "bootstrap/dist/css/bootstrap.css";

const App2 = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <div className="container">
          <FormSalary />
        </div>
        <div className="container">
          <ResultTable />
        </div>
        <div className="container">
          <ResultGraph />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App2;
