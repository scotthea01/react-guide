import { Box, Flex, Heading } from "@chakra-ui/react"
import ExpenseDate from "./ExpenseDate"

const ExpenseItem = (props) => {
  return (
    <Flex bgColor="gray.100" p={6}>
      <ExpenseDate date={props.date} />
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <Heading as="h2" fontSize='2xl' pl={4}>{props.title}</Heading>
        <Box fontWeight="bold" color="red.500">${props.amount}</Box>
      </Flex>
    </Flex>
  );
}

export default ExpenseItem;