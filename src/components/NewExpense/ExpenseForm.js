import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* 	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	})

  const titleInputHandler = (event) => {
		setUserInput({...userInput, enteredTitle: event.target.value});
  };

	const amountInputHandler = (event) => {
		setUserInput({...userInput, enteredAmount: event.target.value});
  };

	const dateInputHandler = (event) => {
		setUserInput({...userInput, enteredDate: event.target.value});
  }; */
  //

  const titleInputHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountInputHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateInputHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required={true}
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required={true}
            type="number"
            amount="0.01"
            step="0.01"
            onChange={amountInputHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            required={true}
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateInputHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
