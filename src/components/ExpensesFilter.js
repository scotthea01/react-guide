import React from 'react';

import { Box, Flex, Text, Select } from "@chakra-ui/react"

const ExpensesFilter = (props) => {

  const filterYearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <Box p={6}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">Filter by year</Text>
        <Select value={props.selected} placeholder="Select option" width="200px" variant="filled" onChange={filterYearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Select>
      </Flex>
    </Box>
  );
};

export default ExpensesFilter;