import React, { Fragment, useState } from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Main from "./components/Main";
import { Instructions, Summary } from "./components/Aside";
import Spinner from "./components/Spinner";
import Bottom from "./components/Bottom";

const App = () => {
  // define state
  const [loading, setLoading] = useState(false),
    [loan, setLoan] = useState(0),
    [interest, setInterest] = useState(0),
    [deadline, setDeadline] = useState(0),
    [monthlyPayment, setMonthlyPayment] = useState(0);
  // switch component
  let component = undefined;
  if (loading) {
    component = <Spinner />;
  } else if (monthlyPayment === 0) {
    component = <Instructions />;
  } else {
    component = (
      <Summary
        loan={loan}
        interest={interest}
        deadline={deadline}
        monthlyPayment={monthlyPayment}
      />
    );
  }
  return (
    <Fragment>
      <Top />
      <Header />
      <Main
        setLoading={setLoading}
        loan={loan}
        setLoan={setLoan}
        interest={interest}
        setInterest={setInterest}
        deadline={deadline}
        setDeadline={setDeadline}
        setMonthlyPayment={setMonthlyPayment}
      />
      {component}
      <Bottom />
    </Fragment>
  );
};

export default App;
