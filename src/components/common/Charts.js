import React from "react";
import Chart from "react-google-charts";
export const Charts = ({
  data,
  chartType = "ColumnChart",
  width = "100%",
  height = "350px",
  options = {
    backgroundColor: "white",
    colors: ["cornflowerblue"]
  },
  props
}) => {
  return (
    <Chart
      chartType={chartType}
      data={data}
      width={width}
      height={height}
      options={options}
      {...props}
    />
  );
};
