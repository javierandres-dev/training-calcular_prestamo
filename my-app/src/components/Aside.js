import React from "react";
import { formatNumber } from "../helpers/functions";

// to guide to user
export const Instructions = () => {
  return (
    <aside className="container">
      <section className="instructions">
        <h3>Instrucciones</h3>
        <ol>
          <li>Ingrese el valor del préstamo</li>
          <li>Ingrese el porcentage de interés mensual</li>
          <li>Ingrese la cantidad de meses a diferir</li>
          <li>Pulse el botón "CALCULAR"</li>
        </ol>
      </section>
    </aside>
  );
};

// show the results to user
export const Summary = ({ loan, interest, deadline, monthlyPayment }) => {
  return (
    <aside className="container">
      <section className="summary">
        <h3>Resumen</h3>
        <ul>
          <li>
            <i className="fas fa-info-circle"></i>
            <span>Préstamo: </span>$&nbsp;{formatNumber(loan)}
          </li>
          <li>
            <i className="fas fa-info-circle"></i>
            <span>Interés mensual: </span>
            {interest} %
          </li>
          <li>
            <i className="fas fa-info-circle"></i>
            <span>Plazo: </span>
            {deadline} meses
          </li>
          <li>
            <i className="fas fa-info-circle"></i>
            <span>Mensualidad: </span>$&nbsp;
            {formatNumber(monthlyPayment)}
          </li>
          <li>
            <i className="fas fa-info-circle"></i>
            <span>En total pagará: </span>$&nbsp;
            {formatNumber(deadline * monthlyPayment)}
          </li>
          <li>
            <i className="fas fa-not-equal"></i>
            <span>Total intereses: </span>$&nbsp;
            {formatNumber(deadline * monthlyPayment - loan)}
          </li>
        </ul>
      </section>
    </aside>
  );
};
