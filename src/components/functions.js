export const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };

  return expenseData;
};
