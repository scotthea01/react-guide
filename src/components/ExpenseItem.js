import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import ExpenseDate from "./ExpenseDate"

const ExpenseItem = (props) => {

  return (
    <Flex p={6}>
      <ExpenseDate date={props.date} />
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <Heading as="h2" fontSize='2xl' pl={4}>{props.title}</Heading>
        <Box bgColor="red.500" p={2} borderRadius="md">
          <Text color="white" fontSize="20px" fontWeight="bold">${props.amount}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ExpenseItem;