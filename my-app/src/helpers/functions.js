export const calculate = (loan, interest, deadline) => {
  const pv = loan,
    rate = interest / 100,
    nper = deadline,
    //    fv = 0,
    //    type = 0,
    p1 = rate * (1 + rate) ** nper,
    p2 = (1 + rate) ** nper - 1,
    payment = pv * (p1 / p2),
    total = payment * nper;
  return [payment, total];
  //console.log(pv, rate, nper, fv, type);
  //console.log(payment, total);
};
