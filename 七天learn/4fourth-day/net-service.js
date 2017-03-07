var http = require('http')

http.createServer(function(request, response) {
	console.log(request)
	response.writeHead(200, {'content-type': 'text-plain'})
	response.end('hello world\n')
}).listen('8001')