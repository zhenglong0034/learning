var http = require('http')

var options = {
	hostname: '127.0.0.1',
	port: 8081,
	path: '/',
	method: 'GET'
}

var req = http.request(options, function(res) {
	console.log(res.statusCode)
	res.setEncoding('utf8')
	res.on('data', function(chunk) {
		console.log(chunk)
	})
})

req.end()

