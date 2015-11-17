var express = require('express'),
		app = express(); //Application object

app.use(express.static ('public'));

app.get('/', function(req,res){
	res.send("Hello World");
});

var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Express Server listening on port %s', server.address().port);
});


//app.listen(process.env.PORT || 3000);