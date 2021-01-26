import React, { useState } from "react";
import { calculate } from "../helpers/functions";

const Main = (props) => {
  const [warning, setWarning] = useState(false),
    {
      setLoading,
      loan,
      setLoan,
      interest,
      setInterest,
      deadline,
      setDeadline,
      setMonthlyPayment,
    } = props,
    work = (e) => {
      e.preventDefault();
      // validate all form fields
      if (loan === 0 || interest === 0 || deadline === 0)
        return setWarning(true);
      setWarning(false);
      setLoading(true);
      setTimeout(() => {
        const payment = parseFloat(
          calculate(loan, interest, deadline).toFixed(2)
        );
        setMonthlyPayment(payment);
        setLoading(false);
      }, 3000);
    };
  return (
    <main role="main" className="container">
      <h2 className="lead">
        Herramienta útil para calcular las cuotas de un préstamo con tasa fija
        mensual.
      </h2>
      <form className="form" onSubmit={work}>
        <fieldset>
          <legend>Todos los campos son obligatorios.</legend>
          <label htmlFor="loan">Ingrese el monto del préstamo.</label>
          <span>$</span>
          <input
            type="number"
            name="loan"
            id="loan"
            placeholder="1000000"
            required
            onChange={(e) => {
              setLoan(parseInt(e.target.value));
            }}
          />
          <label htmlFor="interest">Ingrese el interés mensual.</label>
          <span>%</span>
          <input
            type="text"
            name="interest"
            id="interest"
            placeholder="2"
            required
            onChange={(e) => {
              setInterest(parseFloat(e.target.value));
            }}
          />
          <label htmlFor="deadline">Ingrese el plazo.</label>
          <span>Meses</span>
          <input
            type="number"
            name="deadline"
            id="deadline"
            placeholder="12"
            required
            onChange={(e) => {
              setDeadline(parseInt(e.target.value));
            }}
          />
        </fieldset>
        <button type="submit">CALCULAR</button>
      </form>
      {warning ? (
        <p className="warning">Todos los campos son requeridos.</p>
      ) : null}
    </main>
  );
};

export default Main;
