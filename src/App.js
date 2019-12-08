import React from "react";
import "./App.css";
import Weather from "./components/weather/Weather";
import Loader from "./components/loader/Loader";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getWeatherDetails } from "./components/weather/actions";
import { dispatch } from "./store";

class App extends React.Component {
  componentDidMount() {
    //componentDidMount can be replaced with react hook
    dispatch(getWeatherDetails()); //get city weather details
  }
  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => (isLoading === false ? <Weather /> : <Loader />)}
        />
      </div>
    );
  }
}

export const mapStateToProps = ({ Loader = {} }) => ({
  isLoading: Loader.isLoading //if data fetched then isLoading set to false
});
export default withRouter(connect(mapStateToProps)(App));
