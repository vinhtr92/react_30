import "./ExpenseItem.css";
import "./ExpenseDate";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  console.log(props, "this is props passed");
  const [amount, setAmount] = useState(props.amount);
  // setAmount -> update function for amount
  const amountHandler = () => {
    setAmount(99);
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {amount}</div>
        <button onClick={amountHandler}>Click</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
