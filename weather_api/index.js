const http = require("http");
const apiCallFromRequest = require('./request')
var url = "https://api.openweathermap.org/data/2.5/weather?q=sangaria,08,+91&appid=b32d05ad8f507b8580cca5378de23f9b";

http.createServer((req, res) => {
            apiCallFromRequest.callApi(function(data){
                //console.log(JSON.stringify(response));
                console.log(data);
                res.write(`<html>
                <head>
                    <title>Weather</title>
                </head>
                <body> 
                    <div id='container'>
                        <h1> Place - : ${data.name}<h1>
                        <h1> Weather type - : ${data.weather[0].description} <h1>
                        <h1> Temprature - : ${data.main.temp} &deg;C<h1>
                        <h1> Visibility - : ${data.visibility} meter<h1>
                        <h1> Humidity - : ${data.main.humidity}%<h1>

                    </div>
                </body>
            </html>`);
                res.end();
            });
}).listen(3000);

console.log("service running on 3000 port....");