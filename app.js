const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

let location = process.argv[2];

if(location === undefined) return console.log('Please enter a location while calling the app!');

geocode(location, (error,data) => {
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