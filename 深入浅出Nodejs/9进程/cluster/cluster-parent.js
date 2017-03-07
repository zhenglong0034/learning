var cluster = require('cluster')
var http = require('http')
var numCPU = require('os').cpus().length

if(cluster.isMaster) {
	console.log('master start ...')
	for (var i = 0; i < numCPU; i++ ) {
		cluster.fork()
	}
	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died')
	})
	cluster.on('listening', function(worker, address) {
		console.log('listening : worker' + worker.process.pid + ', address: ' + address.address + ':' +address.port)
	})
} else if(cluster.isWorker) {
	console.log('[worker] ' + "start worker ..." + cluster.worker.id + '\n');
	http.createServer(function(req, res) {
		res.writeHead(200)
		 res.end('worker'+cluster.worker.id+',PID:'+process.pid + '\n');
	}).listen(8000)
}