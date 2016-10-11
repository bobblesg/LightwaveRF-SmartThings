var http = require('http');
var router = require('./router');
var helpers = require('./helpers');

router.register('/on', function(req, res) {
	console.log('On request received');	
	helpers.lwrfToggle(1, req, res);
});

router.register('/off', function(req, res) {
	console.log('Off request received');
	helpers.lwrfToggle(0, req, res);
});

router.register('/register', function(req, res) {
	console.log('Registration request received');	
	helpers.lwrfRegister(req, res);
});

router.register('/moodOn', function (req, res) {
    console.log('On request received');
    helpers.lwrfMoodOn(1, req, res);
});

router.register('/roomOff', function (req, res) {
    //console.log('Room off request received');
    console.log(req);
    console.log(res);
    helpers.lwrfRoomOff(req, res);
});

var server = http.createServer(function (req, res) {
	handler = router.route(req);
	handler.process(req, res);
});

server.listen(8000);
console.log('Server running');