var child_process = require('child_process')
var util = require('util')

var child = child_process.spawn('node', [ 'child.js' ], {
	stdio: [ 0, 1, 2, 'ipc']
})

child.on('message', function (msg) {
	console.log(msg)
})
child.send({ hello: 'heelo'})
