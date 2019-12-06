import Axios from "axios";
import {
  SET_WEATHER_DATA,
  SET_SELECTED_DAY_WEATHER_DATA,
  SET_SELECTED_SET_TEMPERTURE_TYPE,
  SET_PAGE_NO,
  WEATHER_API,
} from "./constants";
import { mapCityWeatherList,decodeResponse } from "./utils";



const rawHttp = (method, url, options) => {
  return Axios({
    method,
    url,
    // data: options.params,
    headers: options.headers ? options.headers : {}
  });
};

export const makeRequest = (api, options) => {
  return new Promise((resolve, reject) => {
    rawHttp(options.type, api, options)
      .then(response => {
        resolve(decodeResponse(response));
      })
      .catch(error => reject(error));
  });
};

export const getWeatherDetails = () => {
  const api = WEATHER_API;
  const options = {
    headers: { "Content-type": "application/json" },
    params: {}
  };
  return function(dispatch) {
    makeRequest(api, options).then(response => {
      const cityWeather = mapCityWeatherList(response);
      dispatch(setWeatherForm(cityWeather));
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
