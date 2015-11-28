var express = require('express');
var app = express();



app.set('port', (process.env.PORT || 5000));

app.post('/', function(req, res){
	console.log("post----------");
	console.log("REQ: " + req);
	console.log("res: " + res);
});

app.use(express.static(__dirname + '/app'));


app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});