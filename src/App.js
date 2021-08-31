import { Box, Heading } from "@chakra-ui/react"
import Expenses from "./components/Expenses";

const App = (props) => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 0, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Box p={10}>
      <Heading as="h2" mb={4}>Let's get started!</Heading>
      <Expenses items={expenses}/>
    </Box>
  );
}

export default App;
