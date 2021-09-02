import React from "react";

import { Flex } from "@chakra-ui/react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Flex
      justifyContent="space-around"
      py={4}
      borderRadius="md"
      textAlign="center"
      height="12rem"
    >
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </Flex>
  );
};

export default Chart;
