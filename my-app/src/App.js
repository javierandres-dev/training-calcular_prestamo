import React, { Fragment, useState } from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Main from "./components/Main";
import Bottom from "./components/Bottom";
//
const App = () => {
  // define state
  const [loan, saveLoan] = useState(0),
    [interest, saveInterest] = useState(0),
    [deadline, saveDeadline] = useState(0);
  return (
    <Fragment>
      <Top />
      <Header />
      <Main
        loan={loan}
        saveLoan={saveLoan}
        interest={interest}
        saveInterest={saveInterest}
        deadline={deadline}
        saveDeadline={saveDeadline}
      />
      <Bottom />
    </Fragment>
  );
};

export default App;
