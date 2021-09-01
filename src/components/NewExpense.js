import React from "react"
import { Box } from "@chakra-ui/react"

import NewExpenseForm from "./NewExpenseForm"

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Box>
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Box>
  )
}

export default NewExpense;