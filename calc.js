//  Calculating Net Salary from Gross Salary Abdullah Erdoğan <qaerdogan@gmail.com>
//  Usage: CalculateGrossSalaryFromNetto(reqNetSalary)
//  Return: [{ay,gross,sgkIsci,issizlik,damgaVerg,netSalary,kgvm,gvm}]
// Calucaltion made based on Turkish tax system.
// Note: This calculation take account 2020 tax rates!!!

const CalculateGrossSalaryFromNetto = reqNetSalary => {
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var taxSteps = [
    {
      taxLevel: 1,
      taxStart: 0,
      taxEnd: 22072,
      rate: 0.15,
      previousRate: 0.15
    },
    {
      taxLevel: 2,
      taxStart: 22072,
      taxEnd: 49000,
      rate: 0.2,
      previousRate: 0.15
    },
    {
      taxLevel: 3,
      taxStart: 49000,
      taxEnd: 180000,
      rate: 0.27,
      previousRate: 0.2
    },
    {
      taxLevel: 4,
      taxStart: 180000,
      taxEnd: 600000,
      rate: 0.35,
      previousRate: 0.27
    },
    {
      taxLevel: 4,
      taxStart: 600000,
      taxEnd: 10000000,
      rate: 0.4,
      previousRate: 0.35
    }
  ];

  const netSalaryCalculate = (gross, prevKgvm, ay) => {
    let sgkIsci, issizlik;
    if (gross > 22000) {
      sgkIsci = taxSteps[0].taxEnd * 0.14;
      issizlik = taxSteps[0].taxEnd * 0.01;
    } else {
      sgkIsci = gross * 0.14;
      issizlik = gross * 0.01;
    }

    let damgaVerg = gross * 0.00759019;
    let gvm = gross - sgkIsci - issizlik;
    kgvm = prevKgvm + gvm;
    //sheet.gv = gvHesapla(sheet.kgvm, sheet.gvm);
    let gv = getTaxCalculated(prevKgvm, gvm);

    netSalary = gross - (sgkIsci + issizlik + damgaVerg + gv);

    return {
      ay,
      gross,
      sgkIsci,
      issizlik,
      damgaVerg,
      netSalary,
      kgvm,
      gvm,
      gv
    };
  };

  const getTaxCalculated = (previousTotalTax, gvm) => {
    const totalNewTax = previousTotalTax + gvm;
    var calculatedGvm = 0;
    taxSteps.map(step => {
      if (totalNewTax > step.taxStart && totalNewTax <= step.taxEnd) {
        if (step.taxLevel === 1) {
          calculatedGvm = gvm * step.rate;
        } else {
          if (totalNewTax - step.taxStart >= gvm) {
            calculatedGvm = gvm * step.rate;
          } else {
            calculatedGvm =
              (step.taxStart - previousTotalTax) * step.previousRate +
              (gvm - (step.taxStart - previousTotalTax)) * step.rate;
          }
        }
      }
    });
    return calculatedGvm;
  };

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  var netSalaries = [];
  var netSalaryPredictInterval = { min: 0, max: 0 };
  var counter = 0;
  // iş bitiminde temizle
  const grossSalaryCalculate = (netSalary, PreviousKgvm) => {
    if (counter === 0) {
    }
    counter++;

    netSalaries.push(netSalary);

    const interval = netSalary - netSalary * 0.5;

    if (counter === 1) {
      netSalaryPredictInterval.min = interval;
      netSalaryPredictInterval.max = netSalary;
    }

    grossSalary = netSalary * 2;

    var predictNetSalary = netSalaryCalculate(grossSalary, PreviousKgvm)
      .netSalary;
    predictNetSalary =
      Math.round((predictNetSalary + Number.EPSILON) * 100) / 100;

    if (predictNetSalary > netSalaries[0]) {
      if (counter > 1) {
        netSalaryPredictInterval.max = netSalaries[netSalaries.length - 1];
      }

      netSalary = getRandomArbitrary(
        netSalaryPredictInterval.min,
        netSalaryPredictInterval.max
      );

      return grossSalaryCalculate(netSalary, PreviousKgvm);
    } else if (predictNetSalary < netSalaries[0]) {
      netSalaryPredictInterval.min = netSalaries[netSalaries.length - 1];
      netSalary = netSalary = getRandomArbitrary(
        netSalaryPredictInterval.min,
        netSalaryPredictInterval.max
      );

      return grossSalaryCalculate(netSalary, PreviousKgvm);
    }
    netSalaries = [];
    counter = 0;
    netSalaryPredictInterval = { min: 0, max: 0 };
    return grossSalary;
  };

  const sheetnew = [];
  month.map(item => {
    let kgvm = 0;
    if (sheetnew.length > 0) {
      kgvm = sheetnew[sheetnew.length - 1].kgvm;
    }
    let brutto = grossSalaryCalculate(reqNetSalary, kgvm);
    let nettoResult = netSalaryCalculate(brutto, kgvm, item);
    sheetnew.push(Object.assign({}, nettoResult));
  });
  console.log(sheetnew);
  return sheetnew;
};
module.exports = {
  CalculateGrossSalaryFromNetto: CalculateGrossSalaryFromNetto
};
