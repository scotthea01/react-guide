import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react"
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

const Dummy_Data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 0, 14),
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Box p={10}>
      <Heading as="h2" mb={4}>Expense Report</Heading>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </Box>
  );
}

export default App;
