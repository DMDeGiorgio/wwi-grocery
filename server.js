var express = require('express');
var app = express();

app.use(express.static('app'));

app.use(function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});