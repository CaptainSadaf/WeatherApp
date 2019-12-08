const featureKey = "WEATHER";
export const SET_WEATHER_DATA = featureKey + "/SET_WEATHER_DATA";
export const SET_SELECTED_DAY_WEATHER_DATA =
  featureKey + "/SET_SELECTED_DAY_WEATHER_DATA";
export const SET_SELECTED_SET_TEMPERTURE_TYPE =
  featureKey + "/SET_TEMPERTURE_TYPE";
export const SET_PAGE_NO = featureKey + "/SET_PAGE_NO";

export const WEATHER_API =
  "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40";

export const initForm = {
  city: {},
  weatherList: [],
  selectedDayWeather: [],
  tempType: "F",
  pageIndex: 0,
  pageSize: 3,
  startIndex: 0,
  isItemExist: true
};
