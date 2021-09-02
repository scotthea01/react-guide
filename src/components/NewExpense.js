import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Box mb={8}>
      {!isEditing && (
        <Button size="lg" colorScheme="blue" onClick={startEditingHandler}>
          Add New Expense
        </Button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Box>
  );
};

export default NewExpense;
