import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
//import "react-table/react-table.css";
const columns = [
  { Header: "Ay", accessor: "ay" },
  { Header: "SalaryGross", accessor: "gross" },
  { Header: "sgkIsci", accessor: "sgkIsci" },
  { Header: "issizlik", accessor: "issizlik" },
  { Header: "damgaVerg", accessor: "damgaVerg" },
  { Header: "netSalary", accessor: "netSalary" },
  { Header: "gvm", accessor: "gvm" },
  { Header: "kgvm", accessor: "kgvm" }
];

const ResultTable = props => {
  return (
    <>
      <p>Burada table olacak</p>
      <p>{props.payrollTable}</p>
      <ReactTable columns={columns} data={props.tableData}></ReactTable>
    </>
  );
};

export default ResultTable;
const testResult = [
  {
    ay: "January",
    gross: 6993.889201212667,
    sgkIsci: 979.1444881697735,
    issizlik: 69.93889201212667,
    damgaVerg: 53.08494787615238,
    netSalary: 5000,
    kgvm: 5944.805821030767,
    gvm: 5944.805821030767
  },
  {
    ay: "February",
    gross: 6993.889201212668,
    sgkIsci: 979.1444881697736,
    issizlik: 69.93889201212669,
    damgaVerg: 53.084947876152384,
    netSalary: 5000,
    kgvm: 11889.611642061536,
    gvm: 5944.805821030768
  },
  {
    ay: "March",
    gross: 6993.889201212667,
    sgkIsci: 979.1444881697735,
    issizlik: 69.93889201212667,
    damgaVerg: 53.08494787615238,
    netSalary: 5000,
    kgvm: 17834.417463092304,
    gvm: 5944.805821030767
  },
  {
    ay: "April",
    gross: 7120.837325610427,
    sgkIsci: 996.9172255854598,
    issizlik: 71.20837325610427,
    damgaVerg: 54.04850826047501,
    netSalary: 5000,
    kgvm: 23887.129189861167,
    gvm: 6052.711726768863
  },
  {
    ay: "May",
    gross: 7435.941483364141,
    sgkIsci: 1041.0318076709798,
    issizlik: 74.35941483364141,
    damgaVerg: 56.44020868761567,
    netSalary: 5000,
    kgvm: 30207.679450720687,
    gvm: 6320.55026085952
  },
  {
    ay: "June",
    gross: 7435.941483364141,
    sgkIsci: 1041.0318076709798,
    issizlik: 74.35941483364141,
    damgaVerg: 56.44020868761567,
    netSalary: 5000,
    kgvm: 36528.22971158021,
    gvm: 6320.55026085952
  },
  {
    ay: "July",
    gross: 7435.94148336414,
    sgkIsci: 1041.0318076709798,
    issizlik: 74.35941483364141,
    damgaVerg: 56.440208687615666,
    netSalary: 5000,
    kgvm: 42848.77997243973,
    gvm: 6320.550260859519
  },
  {
    ay: "August",
    gross: 7455.2805706777335,
    sgkIsci: 1043.7392798948829,
    issizlik: 74.55280570677733,
    damgaVerg: 56.586996034752424,
    netSalary: 5000,
    kgvm: 49185.7684575158,
    gvm: 6336.988485076073
  },
  {
    ay: "September",
    gross: 8157.807100525932,
    sgkIsci: 1142.0929940736305,
    issizlik: 81.57807100525932,
    damgaVerg: 61.91930587634092,
    netSalary: 5000,
    kgvm: 56119.90449296284,
    gvm: 6934.136035447042
  },
  {
    ay: "October",
    gross: 8157.807100525932,
    sgkIsci: 1142.0929940736305,
    issizlik: 81.57807100525932,
    damgaVerg: 61.91930587634092,
    netSalary: 5000,
    kgvm: 63054.04052840988,
    gvm: 6934.136035447042
  },
  {
    ay: "November",
    gross: 8157.807100525932,
    sgkIsci: 1142.0929940736305,
    issizlik: 81.57807100525932,
    damgaVerg: 61.91930587634092,
    netSalary: 5000,
    kgvm: 69988.17656385692,
    gvm: 6934.136035447042
  },
  {
    ay: "December",
    gross: 8157.807100525933,
    sgkIsci: 1142.0929940736307,
    issizlik: 81.57807100525933,
    damgaVerg: 61.91930587634093,
    netSalary: 5000,
    kgvm: 76922.31259930396,
    gvm: 6934.136035447043
  }
];
