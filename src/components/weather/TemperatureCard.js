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

const setActiveCardColor = weather => {
  const currentCard = document.getElementById(`card_${weather.date}`);
  if (currentCard) {
    const activeCards = document.querySelectorAll(".weather-card.active");
    for (let i = 0, len = activeCards.length; i < len; i++) {
      activeCards[i].classList.remove("active");
    }
    currentCard.classList.add("active");
  }
};

const setCurrentDayWeatherInfo = (event, weather) => {
  dispatch(setSelectedDayWeather(weather));
  setActiveCardColor(weather);
};

class TemperatureCard extends React.Component {
  componentDidMount() {
    //It will show the bar chart of first weather card.
    const cards = document.getElementsByClassName("weather-card");
    if (cards) {
      cards[0].click();
    }
  }

  render() {
    const { props } = this;
    const { tempType = null, weather = {} } = props;
    const { avgTemp = 0 } = weather;
    const averageTemperture = tempType
      ? tempType === "C"
        ? convertTempToCelcius(avgTemp)
        : convertTempToFar(avgTemp)
      : avgTemp;
    return (
      <div
        className="weather-card"
        id={`card_${weather.date}`}
        onClick={e => {
          setCurrentDayWeatherInfo(e, props.weather);
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
}

export { TemperatureCard };
