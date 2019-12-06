import {
  SET_WEATHER_DATA,
  SET_SELECTED_DAY_WEATHER_DATA,
  SET_SELECTED_SET_TEMPERTURE_TYPE,
  SET_PAGE_NO,
  initForm
} from "./constants";


export const Weather = (state = initForm, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, city: action.city, weatherList: action.weatherList };
    case SET_SELECTED_DAY_WEATHER_DATA:
      return { ...state, selectedDayWeather: action.payload };
    case SET_SELECTED_SET_TEMPERTURE_TYPE:
      return { ...state, tempType: action.payload };
    case SET_PAGE_NO:
      return {
        ...state,
        pageIndex: action.pageIndex,
        startIndex: action.startIndex,
        isItemExist: action.isItemExist
      };
    default:
      return state;
  }
};
