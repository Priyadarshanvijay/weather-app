const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error,data) => {
    if(error){
        return console.log(error); //stops the function
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log('Error', error);
        }
        console.log(data.location);
        console.log(`${forecastData.summary} It is currently ${forecastData.temperature} degress out. There is a ${forecastData.chanceOfRain}% chance of rain.`);
    });
});