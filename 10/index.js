//Around page 49

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.intro;
handle["/intro"] = requestHandlers.intro;
handle["/your_details"]=requestHandlers.your_details;
handle["/record"] = requestHandlers.record;


server.start(router.route, handle);