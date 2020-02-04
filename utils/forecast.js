const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e8238bee77e7fb4522949c49b5488aad/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si';
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!',undefined);
        }
        else if(body.error){
            callback('Unable to find location',undefined);
        }
        else{
            const current = body.currently;
            callback(undefined, {
                summary : body.daily.data[0].summary,
                temperature : current.temperature,
                chanceOfRain : current.precipProbability
            });
        }
    });
};

module.exports = forecast;