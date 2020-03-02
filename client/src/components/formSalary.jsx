import React from "react";

const SalaryForm = props => {
  const ErrorMessage = props.ValidationSummary;
  var alertMsg;
  if (ErrorMessage != "") {
    console.log("alert oluştu");
    alertMsg = (
      <span className="alert alert-primary">{props.ValidationSummary}</span>
    );
  }

  return (
    <>
      <form onSubmit={props.onSubmitFunction}>
        <label>Net Salary (Monthly)</label>
        <input type="text" name="netSalary" />
        <button type="submit">Calculate</button>
        {alertMsg}
      </form>
    </>
  );
};

export default SalaryForm;
