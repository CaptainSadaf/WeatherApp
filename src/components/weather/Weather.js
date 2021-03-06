import * as React from "react";
import { TemperatureTypes } from "./TemperatureTypes";
import { NavigateDayCards } from "./NavigateDayCards";
import { ColumnChart } from "./ColumnChart";
import { TemperatureCards } from "./TemperatureCards";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

class Weather extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={1} wrap={"wrap"}>
        <Grid item xs={12} sm={12}>
          <TemperatureTypes
            tempType={this.props.tempType}
            onTempTypeChange={this.onTempTypeChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <NavigateDayCards
            pageIndex={this.props.pageIndex}
            startIndex={this.props.startIndex}
            pageSize={this.props.pageSize}
            isItemExist={this.props.isItemExist}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TemperatureCards
            weatherList={this.props.weatherList}
            tempType={this.props.tempType}
            pageIndex={this.props.pageIndex}
            startIndex={this.props.startIndex}
            pageSize={this.props.pageSize}
            avgTemp={this.props.selectedDayWeather.avgTemp || null}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ColumnChart
            selectedDayWeather={this.props.selectedDayWeather}
            tempType={this.props.tempType}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ Weather }) => {
  const {
    weatherList = [],
    selectedDayWeather = {},
    tempType = null,
    pageIndex,
    pageSize,
    startIndex,
    isItemExist
  } = Weather;
  const { dayWeather = [] } = selectedDayWeather;
  return {
    weatherList: (weatherList && weatherList) || [],
    selectedDayWeather: (dayWeather && dayWeather) || [],
    tempType,
    pageIndex,
    startIndex,
    pageSize,
    isItemExist
  };
};

export default connect(mapStateToProps)(Weather);
