import Expenses from "./components/templates/Expenses";
import NewExpense from "./components/templates/NewExpense";

// import React from "react";
export default function App() {

  return (
    <div>
      <h2>Vamos começar!</h2>
      <p>Só testando um JSX</p>
      <NewExpense />
      <Expenses />
    </div>
  );

  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, "Vamos começar!"),
  //   React.createElement(Expenses, { props: expenses })
  // );
}