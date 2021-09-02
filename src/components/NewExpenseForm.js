import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Box py={4}>
        <VStack spacing={4}>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </FormControl>
          <FormControl id="amount">
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </FormControl>
          <FormControl id="date">
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              min="2019-01-01T00:00"
              max="2022-12-31T00:00"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </FormControl>
        </VStack>
      </Box>
      <Box pt={4}>
        <HStack justifyContent="flex-end">
          <Button
            type="button"
            size="lg"
            colorScheme="gray"
            onClick={props.onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" size="lg" colorScheme="blue">
            Add Expense
          </Button>
        </HStack>
      </Box>
    </form>
  );
};

export default NewExpenseForm;
