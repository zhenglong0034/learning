var cp  = require('child_process')
var n = cp.fork(__dirname + '/child.js')
var m = cp.fork(__dirname + '/child.js')
var q = cp.fork(__dirname + '/sub.js')

var server = require('net').createServer()
server.on('connection', function(socket) {
	socket.end('handle parent.js\n')
})

server.listen(8002, function() {
	console.log('http:127.0.0.1:8002')
	n.send('server', server)
	m.send('server', server)
	q.send('server', server)
})