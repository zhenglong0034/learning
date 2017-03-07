process.on('message', function(m, server) {
	if(m === 'server') {
		server.on('connection', function(socket) {
			socket.end('handle child.js' + process.pid + '\n')
		})
	}
})

process.send({foo: 'parent'})