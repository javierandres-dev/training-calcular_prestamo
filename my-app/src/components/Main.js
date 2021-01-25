import React, { useState } from "react";
import { calculate } from "../helpers/functions";

const Main = (props) => {
  const [error, saveError] = useState(false),
    { loan, saveLoan, interest, saveInterest, deadline, saveDeadline } = props,
    work = (e) => {
      e.preventDefault();
      // validate all form fields
      if (loan === 0 || interest === 0 || deadline === 0)
        return saveError(true);
      saveError(false);
      const res = calculate(loan, interest, deadline);
      console.log(res[0].toFixed(2));
      console.log(res[1].toFixed(2));
    };
  return (
    <main role="main" className="container">
      <p className="lead">
        Herramienta útil para calcular las cuotas de un préstamo con tasa fija
        mensual.
      </p>
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
              saveLoan(parseInt(e.target.value));
            }}
          />
          <label htmlFor="interest">Ingrese el interés mensual.</label>
          <span>%</span>
          <input
            type="number"
            name="interest"
            id="interest"
            placeholder="2"
            onChange={(e) => {
              saveInterest(parseFloat(e.target.value));
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
              saveDeadline(parseInt(e.target.value));
            }}
          />
        </fieldset>
        <button type="submit">CALCULAR</button>
      </form>
      {error ? <p className="error">Todos los campos son requeridos.</p> : null}
    </main>
  );
};

export default Main;
