import ExpenseItem from "./ExpenseItem";
// function Expenses(props) {
// }

const Expenses = (props) => {
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

export default Expenses;
