const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=70a62486683756ab99bfec2f79b1f699&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
  
  request({url, json: true}, (error, {body}) => {
    const r = body;

    if (error) {
      callback('No internet connection', undefined);
    } else if (r.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        description: r.current.weather_descriptions[0],
        temperature: r.current.temperature,
        feelslike: r.current.feelslike
      })
    }
  })
};

module.exports = forecast;