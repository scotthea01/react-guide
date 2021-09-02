import React from "react";

import { Box, Flex } from "@chakra-ui/react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <Flex direction="column" alignItems="center">
      <Flex
        direction="column"
        justifyContent="flex-end"
        height="100%"
        width="100%"
        border="1px"
        borderColor="blue.500"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          bgColor="gray.600"
          width="100%"
          transition="all 0.3s ease-out"
          style={{ height: barFillHeight }}
        ></Box>
      </Flex>
      <Box fontWeight="bold" fontSize=".5rem" textAlign="center" mt={2}>
        {props.label}
      </Box>
    </Flex>
  );
};

export default ChartBar;
