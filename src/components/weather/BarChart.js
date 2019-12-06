import React from "react";
import Chart from "react-google-charts";
import { mapWeatherBarChartData } from "./utils";
const header = ["Temperature", `Temp`, { role: "style" }];
class BarChart extends React.PureComponent {
  render() {
    let { selectedDayWeather = [], tempType } = this.props;
    const weatherData =
      selectedDayWeather &&
      mapWeatherBarChartData(selectedDayWeather, tempType);
    weatherData.splice(0, 0, header);
    return (
      selectedDayWeather &&
      selectedDayWeather.length > 0 && (
        <Chart chartType="Bar" width="100%" height="300px" data={weatherData} />
      )
    );
  }
}

export { BarChart };
