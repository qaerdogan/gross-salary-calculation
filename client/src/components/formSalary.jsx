import React from "react";

const SalaryForm = props => {
  return (
    <div className="m-2">
      <form onSubmit={props.onSubmitFunction}>
        <input type="text" name="netSalary" />
        <button type="submit">Hesapla</button>
      </form>
    </div>
  );
};

export default SalaryForm;
