import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";

import "./weather.css";
import { dispatch } from "../../store";
import { setSelectedDayWeather } from "./actions";
import { convertTempToCelcius, convertTempToFar } from "./utils";
import "./weather.css";

const dateTextStyles = {
  root: {
    color: "#505050",
    fontWeight: 500
  }
};

const descriptionTextStyles = {
  root: {
    color: "black",
    fontWeight: "bold"
  }
};

const setCurrentDayWeatherInfo = (weather, e) => {
  dispatch(setSelectedDayWeather(weather));
};

function TemperatureCard(props) {
  const { tempType = null, weather = {} } = props;
  const { avgTemp = 0 } = weather;
  const averageTemperture = tempType
    ? tempType === "C"
      ? convertTempToCelcius(avgTemp)
      : convertTempToFar(avgTemp)
    : avgTemp;
  return (
    <div
      className="card"
      id={`card_${weather.date}`}
      onClick={e => {
        setCurrentDayWeatherInfo(props.weather, e);
      }}
    >
      <Grid container spacing={1} wrap={"wrap"}>
        <Grid item xs={12} sm={12}>
          <FormLabel variant="large" styles={dateTextStyles}>
            Date:
          </FormLabel>
          <FormLabel variant="superLarge" styles={dateTextStyles}>
            {`${props.weather.date}`}
          </FormLabel>{" "}
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormLabel variant="small" styles={descriptionTextStyles}>
            {`Temp ${averageTemperture} `}
            {tempType ? tempType : "F"}
          </FormLabel>
        </Grid>
      </Grid>
    </div>
  );
}

export { TemperatureCard };
