import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TemperatureCard } from "./TemperatureCard";
import { pagedData } from "./utils";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function TemperatureCards(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={1} wrap={"wrap"}>
      {renderTempCard(props, classes)}
    </Grid>
  );
}

function renderTempCard(props, classes) {
  const weatherList = pagedData(
    props.weatherList,
    props.startIndex,
    props.pageSize
  );
  return weatherList.map(weather => {
    return (
      <Grid item xs={4} sm={4} key={`${weather.date}`}>
        <Paper className={classes.paper}>
          <div className="card" >
            <TemperatureCard weather={weather} tempType={props.tempType} />
          </div>
        </Paper>
      </Grid>
    );
  });
}

export { TemperatureCards };
