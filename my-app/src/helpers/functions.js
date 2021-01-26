// calculates the payment for a loan based on constant payments and a constant interest rate
export const calculate = (loan, interest, deadline) => {
  const pv = loan,
    rate = interest / 100,
    nper = deadline,
    //    fv = 0,
    //    type = 0,
    p1 = rate * (1 + rate) ** nper,
    p2 = (1 + rate) ** nper - 1,
    monthlyPayment = pv * (p1 / p2);
  return monthlyPayment;
};
// set format to the numbers to print UI
export const formatNumber = (number) => {
  return number
    .toFixed(2)
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
