var app = require('./config/server');

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

});