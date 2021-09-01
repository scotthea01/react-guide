import React, { useState } from "react"
import { 
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText, 
  Button,
  VStack,
  StackDivider,
} from "@chakra-ui/react"

const NewExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

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
      amount: enteredAmount,
      date: new Date (enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <Box p={4}>
        <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            <FormHelperText>Enter a title.</FormHelperText>
          </FormControl>
          <FormControl id="amount">
            <FormLabel>Amount</FormLabel>
            <Input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            <FormHelperText>Enter an amount.</FormHelperText>
          </FormControl>
          <FormControl id="date">
            <FormLabel>Date</FormLabel>
            <Input type="date" min="2019-01-01T00:00" max="2022-12-31T00:00" value={enteredDate} onChange={dateChangeHandler} />
            <FormHelperText>Enter a date.</FormHelperText>
          </FormControl>
        </VStack>
      </Box>
      <Box p={4} textAlign="center">
        <Button type="submit" size="lg" colorScheme="blue">Add Expense</Button>
      </Box>
    </form>
  )
}

export default NewExpenseForm;