const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYnVnZm94IiwiYSI6ImNsMGxleWJrMTB0N2EzaXF0Nm16NXdpeWcifQ.Q5_2YyXBLxokoru28LxpIQ&limit=1';

  request({url, json: true}, (error, {body}) => {
    const r = body.features; 
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (r.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: r[0].center[1],
        longitude: r[0].center[0],
        location: r[0].place_name
      })
    }
  })
}

module.exports = geocode;