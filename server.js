

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var request = require('request');

var listID = process.env.MAILCHIMP_LIST_ID;
var apiKey = process.env.MAILCHIMP_API_KEY;


app.set('port', (process.env.PORT || 5000));

app.post('/', function(req, res){
	console.log("post----------");
	console.log("REQ: " + req);

	console.dir("REQ: " + req);
	console.log("REQ: " + req.body.email);

	res.end();
	var auth = 'Basic ' + new Buffer('username:' + apiKey).toString('base64');
	var url = "https://us12.api.mailchimp.com/3.0/lists/" + listID + "/members";
	var data = JSON.stringify({email_address : req.body.email, status : "subscribed"});
	request.post(
		
			"https://us12.api.mailchimp.com/3.0/lists/" + listID + "/members",
		
		{
			json : true,
			body : data,
		
		
			auth :{
				'user': 'anystring',
				'pass': apiKey
			}
		},
		function (error, response, body) {
			console.log('error: '+ response.statusCode);
			console.log(body);
		}
	);



});


/*

https://us12.api.mailchimp.com/3.0/


*/

app.use(express.static(__dirname + '/app'));


app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});