const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000, function () {
    console.log("Sevrer started at port 3000");
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/HomePage.html");
});

// POST and GET have separate res.send or res.sendFile;


app.post("/", function (req, res) {

    const query = req.body.location;
    const apiKey =
        "d00d86661cfbb10af358e0b5c23cec53";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    console.log(query);

    https.get(url, function (response) {

        // console.log(response);
        console.log(response.statusCode);

        // .on means on receiving data .
        response.on("data", function (data) {
            // console.log(data);
            const weatherData = JSON.parse(data);

            // here the data we get is stored as the actual data to be used if form of js object with key value pairs.
            // console.log(weatherData);

            // const textForm = JSON.stringify(weatherData);
            // here data in converted into the form in which it is transfeered or sent if the form of minified strings with correct notations and symbolds to convert back to JSON.
            // console.log(textForm);

            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const iconId = weatherData.weather[0].icon;
            const iconURL = "https:openweathermap.org/img/wn/" + iconId + "@2x.png"

            // res.send("<h1>The temp is : " + temp + "degree Celcius</h1> <h1>The Weather currently is : " + weatherDiscription + "</h1>");
            // res.send can be only once in entirfe file.

            // OR

            // there can be multiple res.write in a file. 
            // after writing everything we can send the file.

            res.write("<p> The wether currently is :  " + weatherDiscription + "</p>");

            res.write("<img src=" + iconURL + " >");
            res.write("<h1> The tenmp is : " + temp + "</h1>");
            res.send();

            // document.querySelector(".weather-1").innerHTML = "<img src=" + iconURL + " >";
            // res.sendFile(__dirname+"/HomePage.html");
        });
    });
});

