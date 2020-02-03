const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWlub3Jwcm9qZWN0bXVqMjAxOSIsImEiOiJjazY2MGd4ajkwd3VjM25ucjhvcXFtbTNhIn0.8Bj0_sGn339J20brilW48Q&limit=1';
    request({url : url, json : true} , (error,response) => {
        if(error){
            callback('Unable to connect to location services!', undefined);
        }
        else if(response.body.features.length == 0){
            callback('Unable to find loccation. Try another search', undefined);
        }
        else{
            const location = response.body.features[0]["place_name"];
            const latLong = response.body.features[0].center;
            const long = latLong[0];
            const lat = latLong[1];
            const dataToSend = {
                location : location,
                longitude : long,
                latitude : lat
            };
            callback(undefined, dataToSend);
        }
    });
};

module.exports = geocode;