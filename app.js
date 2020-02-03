const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error,data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(`Location : ${data.location}\nLatitude: ${data.latitude}\nLongitude : ${data.longitude}`);
    }
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })