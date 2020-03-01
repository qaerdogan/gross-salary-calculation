const express = require("express");
const calculator = require("../calc");

const router = express.Router();

router.get("/:netSalary", (req, res, next) => {
  const netSalary = req.params.netSalary;
  res.status(200).json({
    message: "OK",
    payroll: calculator.CalculateGrossSalaryFromNetto(netSalary)
  });
});

module.exports = router;
