var app = require ('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connect', function (socket) {
	console.log('a user connected');

	socket.on('message', function(msg) {
		console.log('a new message: ' + msg);
	});

	socket.on('disconnect', function () {
		console.log('a user disconnected');
	});
});

http.listen(8585, function (argument) {
	console.log('listening on port 8585');
});
