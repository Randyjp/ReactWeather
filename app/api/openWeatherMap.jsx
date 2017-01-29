var axios = require('axios'); //http bases promise library

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=973633cc906a22784c07b6953f8b1f28&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //string templates so you can yse ${} to inject js expresions

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      // throw new Error(res.data.message);
      throw new Error('Unable to fetch weather for that location.');
    });
  }
};
