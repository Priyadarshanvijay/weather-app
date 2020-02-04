const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

let location = process.argv[2];

if(location === undefined) return console.log('Please enter a location while calling the app!');

geocode(location, (error,{latitude, longitude, location}) => {
    if(error){
        return console.log(error); //stops the function
    }
    forecast(latitude, longitude, (error, {summary, temperature, chanceOfRain}) => {
        if(error){
            return console.log('Error', error);
        }
        console.log(location);
        console.log(`${summary} It is currently ${temperature} degress out. There is a ${chanceOfRain}% chance of rain.`);
    });
});