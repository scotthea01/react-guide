import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <Box borderTop="1px" borderTopColor="gray.400" textAlign="center" py={8}>
        <Text fontSize="20px">No expenses found</Text>
      </Box>
    );
  }

  return (
    <Box>
      {props.items.map((expense) => (
        <Box borderTop="1px" borderTopColor="gray.400" key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ExpensesList;
