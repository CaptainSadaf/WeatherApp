import {
  SET_WEATHER_DATA,
  SET_SELECTED_DAY_WEATHER_DATA,
  SET_SELECTED_SET_TEMPERTURE_TYPE,
  SET_PAGE_NO,
  WEATHER_API
} from "./constants";
import { mapCityWeatherList } from "./utils";
import { isLoading } from "../loader/actions";
import { makeRequest } from "../common/Api";

export const getWeatherDetails = () => {
  const api = WEATHER_API;
  const options = {
    headers: { "Content-type": "application/json" },
    params: {}
  };
  return function(dispatch) {
    dispatch(isLoading(true));
    makeRequest(api, options).then(response => {
      const cityWeather = mapCityWeatherList(response);
      dispatch(setWeatherForm(cityWeather));
      dispatch(isLoading(false));
    });
  };
};

export const setWeatherForm = weatherData => {
  return {
    type: SET_WEATHER_DATA,
    city: {},
    weatherList: weatherData || []
  };
};

export const setSelectedDayWeather = data => {
  return {
    type: SET_SELECTED_DAY_WEATHER_DATA,
    payload: data
  };
};

export const setTemperatureTypes = (key, value) => {
  return {
    type: SET_SELECTED_SET_TEMPERTURE_TYPE,
    payload: value
  };
};

export const setCardPagination = ({
  pageIndex,
  startIndex,
  pageSize,
  isItemExist
}) => {
  return {
    type: SET_PAGE_NO,
    pageIndex,
    startIndex,
    isItemExist
  };
};

export const setPageNo = ({ pageIndex, startIndex, pageSize }) => {
  return function(dispatch, getState) {
    const weatherData = getState().Weather.weatherList;
    const isItemExist = weatherData[startIndex + pageSize] !== undefined;
    dispatch(
      setCardPagination({ pageIndex, startIndex, pageSize, isItemExist })
    );
  };
};
