import React, { useState } from "react";

import { Box } from "@chakra-ui/react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Box bgColor="gray.300" borderRadius="2xl" boxShadow="2xl">
      <Box>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </Box>
      <Box>
        <ExpensesChart expenses={filteredExpenses} />
      </Box>
      <ExpensesList items={filteredExpenses} />
    </Box>
  );
};

export default Expenses;
