var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');	
});

io.on('connection', function(socket) {
	console.log('Um usuário entrou na sala...');
	socket.on('message', function(msg) {
		io.emit('message', msg);
	});
});

io.on('disconnect', function(socket) {
	console.log('Um usuário saiu na sala...');
});

http.listen(5002, function() {
	console.log('Servidor ouvindo na porta 5002');
});