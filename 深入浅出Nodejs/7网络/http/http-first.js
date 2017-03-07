var http = require("http")

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	console.log(req)
	res.end('hello http\n')

}).listen(8081, '127.0.0.1')

console.log('server http  http://127.0.0.1:8081/ ')