var express = require('express'),
	app     = express(),
	server  = require('http').createServer(app);
	

server.listen(3000);


app.set('view engine', 'html');

app.use(express.static('./'));

app.get('/', function(req, res){
  	res.render('index');
});






console.log("Express server running at\n  => http://localhost:3000/\nCTRL + C to shutdown");
