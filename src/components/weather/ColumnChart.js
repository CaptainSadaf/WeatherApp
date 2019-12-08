import React from "react";
import { mapSelectedDayWeatherData } from "./utils";
import { Charts } from "../common/Charts";
const header = ["Temperature", `Temperature`];
class ColumnChart extends React.PureComponent {
  render() {
    let { selectedDayWeather = [], tempType } = this.props;
    const weatherData =
      selectedDayWeather &&
      mapSelectedDayWeatherData(selectedDayWeather, tempType);
    weatherData.splice(0, 0, header);
    return (
      selectedDayWeather &&
      selectedDayWeather.length > 0 && <Charts data={weatherData} />
    );
  }
}

export { ColumnChart };
