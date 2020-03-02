import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
//import "react-table/react-table.css";
const columns = [
  {
    Header: "Month",
    accessor: "ay",
    style: {},
    sortable: true,
    filterable: true
  },
  {
    Header: "Gross Salary",
    accessor: "gross",
    sortable: true
  },
  { Header: "SSI Ee", accessor: "sgkIsci", sortable: false },
  { Header: "Unemployment", accessor: "issizlik", sortable: false },
  { Header: "Stamp Tax", accessor: "damgaVerg", sortable: false },
  { Header: "Net Salary", accessor: "netSalary", sortable: false },
  { Header: "ITB", accessor: "gvm", sortable: false },
  { Header: "Income Tax", accessor: "gv", sortable: false },
  { Header: "CITB", accessor: "kgvm", sortable: false }
];

const ResultTable = props => {
  return (
    <>
      <p>{props.payrollTable}</p>
      <ReactTable
        columns={columns}
        data={props.tableData}
        showPagination={false}
        pageSize={12}
      ></ReactTable>
      <div>
        <strong>CITB:Cumulative Income Tax Base </strong>
        <br />
        <strong>ITB:Income Tax Base </strong>
      </div>
    </>
  );
};

export default ResultTable;
