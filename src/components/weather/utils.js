import moment from "moment";
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
      avgTemp: list[key].reduce((a, b) => a + b.main.temp, 0) / list[key].length
    });
    return result;
  }, []);
};

export const mapWeatherBarChartData = (data, tempType = null) => {
  const result = data.reduce((acc, element) => {
    const {
      main: { temp = 0 }
    } = element;
    const temperature = tempType
      ? tempType === "C"
        ? convertTempToCelcius(temp)
        : convertTempToFar(temp)
      : temp;
    const temperatureLabel = tempType ? `${temp} ${tempType}` : `${temp} F`;
    acc.push([`${temperatureLabel}`, temperature, "blue"]);
    return acc;
  }, []);
  return result;
};

export const pagedData = (data, startIndex = 0, pageSize = 3) =>
  data.filter(
    (data, index) => index >= startIndex && index < (startIndex + pageSize)
  );

export const convertTempToCelcius = temp => Math.round((temp * 9) / 5 + 32);
export const convertTempToFar = temp => Math.round(((temp - 32) * 5) / 9);


export function decodeResponse(response) {
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
  }