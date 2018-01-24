var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: false})

 
app.set('view engine', 'ejs');

app.use('/', express.static('assets'))


app.get('/signup', function(req, res){
	console.log(`Request has been made by: ${req.url}`);
	res.sendFile(__dirname + '/index.html', {forms: req.query});
});

app.post('/signup', urlEncoded, function(req, res){
	console.log(req.body);
	res.render('vip', {forms: req.query});
})

app.listen(3000, function(){
	console.log('Now listening to port 3000')
})



