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
    res.sendFile(__dirname + '/HomePage.html');
});
app.get("/pages/login.html", function (req, res) {
    res.sendFile(__dirname + "/pages/login.html");
})
app.get("/pages/signup.html", function (req, res) {
    res.sendFile(__dirname + "/pages/signup.html");
})

app.get("/pages/Dos&Donts.html", function (req, res) {
    res.sendFile(__dirname + "/pages/Dos&Donts.html");
})
app.get("/pages/game.html", function (req, res) {
    res.sendFile(__dirname + "/pages/game.html");
})

app.get("/admin", function (req, res) {
    res.sendFile(__dirname + "/pages/adminPage.html");
})

app.post("/", function (req, res) {
    console.log("redirected");
    var state = req.body.state;
    var district = req.body.district;
    var drillType = req.body.drillType;
    var givenDate = req.body.date;

    var date = new Date(givenDate);
    var Location = district + "," + state;

    var currentDate = new Date();
    var sendingDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    console.log(formattedDate);

    res.render(__dirname + '/afterMail.ejs', {
        drillType:drillType,
        date: formattedDate,
        district: Location,
        sendingDate: sendingDate
    });
    // app.get('/home' , function(req , res){
    //     res.sendFile('C:\Users\admin\Documents\GitHub\DisasterManagement\HomePage.html');
    // })
})

// POST and GET have separate res.send or res.sendFile;


