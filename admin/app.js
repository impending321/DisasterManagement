
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/adminPage.html");
})
app.post("/", function (req, res) {

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

    res.render('afterMail.ejs', {
        drillType:drillType,
        date: formattedDate,
        district: Location,
        sendingDate: sendingDate
    });
})

app.listen(3000, function () {
    console.log("Server started at port 3000");
})
