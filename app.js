const request = require('request');

const url = 'https://api.darksky.net/forecast/e8238bee77e7fb4522949c49b5488aad/37.8267,-122.4233?units=si&lang=hi';

request({url : url, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!');
    }
    else if(response.body.error){
        console.log('Unable to find location');
    }
    else{
        const current = response.body.currently;
        console.log(`${response.body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`);
    }
});

//Geocoding
//Address -> Lat/long -> darksky api to get weather
const latLongURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Jaipur.json?access_token=pk.eyJ1IjoibWlub3Jwcm9qZWN0bXVqMjAxOSIsImEiOiJjazY2MGd4ajkwd3VjM25ucjhvcXFtbTNhIn0.8Bj0_sGn339J20brilW48Q&limit=1';
request({url : latLongURL,json: true},(error,response) => {
    if(error){
        console.log('Unable to connect to location services!');
    }
    else if(!response.body.features.length){
        console.log('No matching results for this location found, please enter a different location');
    }
    else{
        const latLong = response.body.features[0].center;
        const long = latLong[0];
        const lat = latLong[1];
        console.log(`Latitude is ${lat} and Longitude is ${long}`);
    }
});