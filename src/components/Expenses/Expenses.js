import ExpenseItem from "./ExpenseItem";
// function Expenses(props) {
// }

const ExpensesMain = (props) => {
  return props.data.map((item) => {
    return (
      <ExpenseItem
        key={props.data.indexOf(item)}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
};

export default ExpensesMain;
