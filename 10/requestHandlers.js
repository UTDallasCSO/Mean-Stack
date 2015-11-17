var querystring = require("querystring");

function intro(response, postData)
{
	console.log("Request handle 'intro' was called.");
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<img src="http://dminc.com/wp-content/uploads/2015/01/clients_media_espn.png" alt="ESPN Logo" width=360 height=77></img>'+
	'<h3> Welcome to the ATG Group\'s Data Collection Webapp.<br> On the next page you will select your gender and age-range (Optional) so that it will help us train our speech recognition models better.</h3>'+
	'<button onclick="window.location=\'http://localhost:8888/your_details\'">Next >></button>'+
	'</body>'+
	'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function your_details(response, postData)
{
	console.log("Request handle 'your_details' was called.");
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<img src="http://dminc.com/wp-content/uploads/2015/01/clients_media_espn.png" alt="ESPN Logo" width=360 height=77></img>'+
	'<form action="/record" method="post">'+
	' <fieldset>'+
	'<legend>Personal information:</legend>'+
	'<h4>Gender : <i>(Optional)</i></h4>'+
  	'<input type="radio" name="gender" id=\'gender\' value="male"> Male'+
  	'<br>'+
  	'<input type="radio" name="gender" id=\'gender\' value="female"> Female'+
	
	'<h4>Age range : <i>(Optional)</i></h4>'+
	'<h4>'+
	'<input type="radio" name="age" value="1"> 18-25'+
  	'<br>'+
  	'<input type="radio" name="age" value="2"> 25-32'+
	'<br>'+
  	'<input type="radio" name="age" value="3"> 33-40'+
  	'<br>'+
  	'<input type="radio" name="age" value="4"> 41-55'+
	' </fieldset>'+
	'<script> console.log(document.getElementById(\'gender\').value) </script>'+
	'<input type="submit" value="Record >>" />'+
	'</form>'+
	'</body>'+
	'</html>';
	
	// var gender = body.document.getElementById('gender').value;
	// var age_range = body.document.getElementById('age').value;
	// console.log("Gender of user is " + gender);
	// console.log("Age of user is in the group" + age);
	
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

// function record(response, postData)
// {
// 	console.log("Request handle 'record' was called.");
// 	var body = '<html>'+
// 	'<head>'+
// 	'<meta http-equiv="Content-Type" content="text/html; '+
// 	'charset=UTF-8" />'+
// 	'</head>'+
// 	'<body>'+
// 	'<img src="http://dminc.com/wp-content/uploads/2015/01/clients_media_espn.png" alt="ESPN Logo" width=360 height=77></img>'+
// 	'<form action="/upload" method="post">'+
// 	'<textarea name="text" rows="5" cols="60"></textarea>'+
// 	'<input type="submit" value="Submit text" />'+
// 	'</form>'+
// 	'</body>'+
// 	'</html>';
// 	response.writeHead(200, {"Content-Type": "text/html"});
// 	response.write(body);
// 	response.end();
// }
function upload(response, postData)
{
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text: "+
	querystring.parse(postData).text);
	response.end();
}

exports.intro = intro;
exports.upload = upload;
exports.your_details = your_details;
//exports.record = record;