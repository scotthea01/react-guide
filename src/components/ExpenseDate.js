import { Box } from "@chakra-ui/react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", {
    day: "2-digit",
    timeZone: "UTC",
  });
  const year = props.date.getFullYear();

  return (
    <Box
      bgColor="gray.500"
      color="white"
      p={2}
      width="120px"
      borderRadius="md"
      boxShadow="md"
    >
      <Box textAlign="center">{month}</Box>
      <Box textAlign="center">{year}</Box>
      <Box textAlign="center" fontSize="30px" fontWeight="bold">
        {day}
      </Box>
    </Box>
  );
};

export default ExpenseDate;
