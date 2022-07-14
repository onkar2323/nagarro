var http = require('http');

var url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}"  

var server = http.createServer(function(request,response){
    //all logic is here
    var request = require('request');
    request(url, function(err,res,body){
        if(err){
            console.log("error found!!")
        }
        var data = JSON.parse(body);
        console.log(data);
        response.write(data);
        response.write("<h1> Visibility :-" , {visibility} ,"<h1>")
        response.write("<h1> Visibility :- + data{coordinates} <h1>")
        response.write("<h1> Visibility :- + data{temperature} <h1>")
        response.write("<h1> Visibility :- + data{visibility} <h1>")
        response.write("<h1> Visibility :- + data{visibility} <h1>")
        response.end();
    })

}).listen(3000);









