import Expenses from "./components/Expenses";
import React from "react";
import "./App.css";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.122,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.687,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 452,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <Expenses data={expenses} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement(Expenses, { data: expenses })
  // );

  // return (
  //   <div className="App">
  //     <Expenses data={expenses} />
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //     {/* <ExpenseItem
  //       id={expenses[0].id}
  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date={expenses[0].date}
  //     />
  //     <ExpenseItem
  //       id={expenses[1].id}
  //       title={expenses[1].title}
  //       amount={expenses[1].amount}
  //       date={expenses[1].date}
  //     />
  //     <ExpenseItem
  //       id={expenses[2].id}
  //       title={expenses[2].title}
  //       amount={expenses[2].amount}
  //       date={expenses[2].date}
  //     />
  //     <ExpenseItem
  //       id={expenses[3].id}
  //       title={expenses[3].title}
  //       amount={expenses[3].amount}
  //       date={expenses[3].date}
  //     /> */}
  //   </div>
  // );
}

export default App;
