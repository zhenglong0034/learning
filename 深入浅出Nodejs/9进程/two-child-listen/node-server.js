var cp = require('child_process')

var m = cp.fork(__dirname + '/child-server.js')
var n = cp.fork(__dirname + '/child-server.js')

var server = require('net').createServer()
server.listen(8003, function() {
	console.log('http://127.0.0.1:8003')
	m.send('server', server)
	n.send('server', server)
	server.close()
})