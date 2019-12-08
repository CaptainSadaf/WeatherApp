import moment from "moment";

//maping weather API response and group data by date
export const mapCityWeatherList = (cityWeather = {}) => {
  const list = cityWeather.list.reduce((weatherList, weather) => {
    const currDate = moment(weather.dt_txt).format("D MMM YYYY");
    const currDayWeatherList = weatherList[currDate]
      ? weatherList[currDate].concat({ ...weather })
      : [{ ...weather }];
    return {
      ...weatherList,
      [currDate]: currDayWeatherList
    };
  }, {});
  return Object.keys(list).reduce((result, key) => {
    result.push({
      date: key,
      dayWeather: list[key],
      avgTemp: Math.round(
        list[key].reduce((a, b) => a + b.main.temp, 0) / list[key].length
      )
    });
    return result;
  }, []);
};

//map selected date weather data and comply it with google column chart data set.
export const mapSelectedDayWeatherData = (data, tempType = null) => {
  const result = data.reduce((acc, element) => {
    const {
      main: { temp = 0 },
      dt_txt
    } = element;
    const dayTime = moment(dt_txt).format("H:mm:ss");
    const temperature = tempType
      ? tempType === "C"
        ? convertTempToCelcius(temp)
        : convertTempToFar(temp)
      : temp;
    const temperatureLabel = tempType
      ? `${temperature}${tempType} (${dayTime})`
      : `${temp}F (${dayTime})`;
    acc.push([`${temperatureLabel}`, temperature]);
    return acc;
  }, []);
  return result;
};

//filtering the data based on current page index and page size
export const pagedData = (data, startIndex = 0, pageSize = 3, maxLimit = 6) =>
  data.filter(
    (data, index) => index >= startIndex && index < startIndex + pageSize
  );

//Kalvin=>Celcius
export const convertTempToCelcius = temp => Math.round(temp - 273.15);

//Kalvin=>Fahrenheight
export const convertTempToFar = temp => Math.round((temp - 273.15) * 1.8) + 32;

//API response decode based on type of response
export const decodeResponse = response => {
  if (!response) {
    return;
  }
  let data;
  switch (typeof response) {
    case "string":
      data = JSON.parse(response);
      break;
    case "object":
      data = response.data;
      break;
    default:
      data = {};
  }
  return data;
};
