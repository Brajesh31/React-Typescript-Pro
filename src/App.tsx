import { useState } from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, discription: "a new thing", amount: 10, category: "food" },
    { id: 2, discription: "aaa", amount: 10, category: "food" },
    {
      id: 3,
      discription: "a new thing with food",
      amount: 10,
      category: "food",
    },
    { id: 4, discription: "a new thing too", amount: 10, category: "food" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
