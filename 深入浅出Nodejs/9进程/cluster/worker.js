var http = require('http')

var childServer = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('handle child-server.js' + process.pid + '\n')
})

process.on('message', function(m, tcp) {
	if(m === 'server') {
		tcp.on('connection', function(socket){
			childServer.emit('connection', socket)
		})
	}
})