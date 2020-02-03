const request = require('request');

const url = 'https://api.darksky.net/forecast/e8238bee77e7fb4522949c49b5488aad/37.8267,-122.4233?units=si&lang=hi';

request({url : url, json: true}, (error, response) => {
    const current = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
});

