import React, { useState } from "react";
import { Box } from "@chakra-ui/react"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Something = () => {
  
}
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Box bgColor="gray.300" borderRadius="2xl" boxShadow="2xl">
      <Box>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </Box>
      {filteredExpenses.map((expense) => (
        <Box borderTop="1px" borderTopColor="gray.400" key={expense.id}>
          <ExpenseItem
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Expenses;