const request = require('request');
 
_EXTERNAL_URL = 'https://api.openweathermap.org/data/2.5/weather?q=sangaria,08,+91&appid=b32d05ad8f507b8580cca5378de23f9b';
url = "https://api.openweathermap.org/data/2.5/weather?lat=29.790327&lon=74.463081&appid=b32d05ad8f507b8580cca5378de23f9b";

const callExternalApiUsingRequest = (callback) => {
    request(url, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;