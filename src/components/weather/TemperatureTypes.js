import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { StyledRadio } from "../common/StyledRadio";
import { dispatch } from "../../store";
import { setTemperatureTypes } from "./actions";

const onTempTypeChange = event => {
  dispatch(setTemperatureTypes("tempType", event.target.value));
};
function TemperatureTypes(props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        onChange={e => {
          onTempTypeChange(e);
        }}
        row
      >
        <FormControlLabel
          value="C"
          checked={props.tempType === "C"}
          control={<StyledRadio />}
          label="Celcius"
        />
        <FormControlLabel
          value="F"
          checked={props.tempType === "F"}
          control={<StyledRadio />}
          label="Fahrenheight"
        />
      </RadioGroup>
    </FormControl>
  );
}

export { TemperatureTypes };
