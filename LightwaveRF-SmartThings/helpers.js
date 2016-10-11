var url = require('url');
var LightwaveRF = require("./lwrf");
var lwrf = new LightwaveRF();

// GETS THE URL PARAMS
function getURLParams (req) {
	var urlParts = url.parse(req.url, true);
	return urlParts.query;
}

// RETURNS A JSON HTTP RESPONSE
function httpResponse (res, response) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

// TOGGLE LIGHTWAVE DEVICE
exports.lwrfToggle = function (toggle, req, res) {

	var params = getURLParams(req);
    lwrf.setIP(params.ip);

	if (params.level >= 1) {
		lwrf.setDeviceDim(params.room, params.device, params.level);
	}else if (toggle == 1) {
		lwrf.turnDeviceOn(params.room, params.device);
	} else {
		lwrf.turnDeviceOff(params.room, params.device);
	}

	httpResponse(res, 'Request Received');

};


// START LIGHTWAVE DEVICE ROOM MOOD
exports.lwrfMoodOn = function (req, res) {

    if (req == undefined) return false;
    if (res == undefined) return false;

    var params = getURLParams(req);

    lwrf.setIP(params.ip);

    lwrf.turnRoomMoodOn(params.room, params.mood);

    httpResponse(res, 'Mood on request received');

};

// TURN OFF LIGHTWAVE ROOM
exports.lwrfRoomOff = function (req, res) {

    if (req != undefined) {

        var params = getURLParams(req);

        lwrf.setIP(params.ip);

        lwrf.turnRoomOff(params.room);

        //httpResponse(res, 'Room off request received');
    } else {

        httpResponse(res, 'Room off Error');

    }

};



// REGISTER THE IP
exports.lwrfRegister = function(req, res) {

	var params = getURLParams(req);
    lwrf.setIP(params.ip);

	lwrf.register();

	httpResponse(res, 'Request Received');

};