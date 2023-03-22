import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    if (expense.date.getFullYear().toString() === currentYear){
      return expense
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={currentYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
