import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { dispatch } from "../../store";
import { setTemperatureTypes } from "./actions";

function TemperatureTypes(props) {
  const onTempTypeChange = event => {
    dispatch(setTemperatureTypes("tempType", event.target.value));
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={props.tempType}
        defaultValue={"F"}
        onChange={onTempTypeChange}
        row
      >
        <FormControlLabel
          value="C"
          control={<Radio color="primary" />}
          label="Celcius"
          labelPlacement="Celcius"
        />
        <FormControlLabel
          value="F"
          control={<Radio color="primary" />}
          label="Fahrenheight"
          labelPlacement="Fahrenheight"
        />
      </RadioGroup>
    </FormControl>
  );
}

export { TemperatureTypes };
