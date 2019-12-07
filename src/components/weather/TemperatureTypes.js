import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { dispatch } from "../../store";
import { setTemperatureTypes } from "./actions";
import { StyledRadio } from "../common/StyledRadio";

function TemperatureTypes(props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        value={props.tempType}
        defaultValue={"F"}
        onChange={e => {
          props.onTempTypeChange(e);
        }}
        row
      >
        <FormControlLabel value="C" control={<StyledRadio />} label="Celcius" />
        <FormControlLabel
          value="F"
          control={<StyledRadio />}
          label="Fahrenheight"
        />
      </RadioGroup>
    </FormControl>
    
  );
}

export { TemperatureTypes };
