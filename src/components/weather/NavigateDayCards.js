import * as React from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Grid from "@material-ui/core/Grid";
import { dispatch } from "../../store";
import { setPageNo } from "./actions";

export const NavigateDayCards = props => {
  const onNextPage = event => {
    dispatch(
      setPageNo({
        pageIndex: props.pageIndex + 1,
        startIndex: props.startIndex + props.pageSize,
        pageSize: props.pageSize
      })
    );
  };
  const onPerviousPage = event => {
    dispatch(
      setPageNo({
        pageIndex: props.pageIndex - 1,
        startIndex: props.startIndex - props.pageSize,
        pageSize: props.pageSize
      })
    );
  };

  return (
    <Grid container spacing={1} wrap={"wrap"}>
      <Grid item xs={6} sm={6}>
        {props.pageIndex > 0 && (
          <ArrowBack
            color="primary"
            fontSize="large"
            onClick={() => {
              onPerviousPage();
            }}
          />
        )}
      </Grid>
      <Grid item xs={6} sm={6}>
        {props.isItemExist && (
          <ArrowForward
            color="primary"
            fontSize="large"
            onClick={() => {
              onNextPage();
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};
