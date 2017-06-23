export function calculateTax(grossIncome, annualSalary) {
  if (annualSalary <= 18200) {
    return 0;
  } else if (annualSalary >= 18201 && annualSalary <= 37000) {
    return Math.round((annualSalary - 18200) * (19 / 100) / 12);
  } else if (annualSalary >= 37001 && annualSalary <= 80000) {
    return Math.round((3572 + (annualSalary - 37000) * (32.5 / 100)) / 12);
  } else if (annualSalary >= 80001 && annualSalary <= 180000) {
    return Math.round((17547 + (annualSalary - 80000) * (37 / 100)) / 12);
  } else {
    return Math.round((54547 + (annualSalary - 180000) * (45 / 100)) / 12);
  }
}

export function generatePayslip(payload) {
  const date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  const lastDay = new Date(y, m + 1, 0);

  const payPeriod = lastDay;
  const grossIncome = Math.round(payload.annualSalary / 12);
  const incomeTax = calculateTax(grossIncome, payload.annualSalary);
  const netIncome = Math.round(grossIncome - incomeTax);
  const superAnnuation = Math.round(grossIncome * (payload.superRate / 100));
  const actualPay = Math.round(netIncome - superAnnuation);

  let newPayslip = {
    firstname: payload.firstname,
    lastname: payload.lastname,
    payDate: payPeriod.toString(),
    payFrequency: 'monthly',
    annualIncome: payload.annualSalary,
    grossIncome: grossIncome,
    incomeTax: incomeTax,
    netIncome: netIncome,
    superRate: superAnnuation,
    pay: actualPay
  };

  return newPayslip;
}
