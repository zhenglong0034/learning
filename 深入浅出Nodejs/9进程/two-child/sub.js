process.on('message', function(m, server) {
	if(m === 'server') {
		server.on('connection', function(socket) {
			socket.end('handle sub.js' + process.pid + '\n')
		})
	}
})

process.send({foo: 'parent'})