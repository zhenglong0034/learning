var http = require('http')

http.createServer(function(request, response){
	response.writeHead(200, {'content-type' : 'text-plain'})
	response.end('hello 80\n')
}).listen(80, function () {
	var env = process.env,
	    uid = parseInt(env['SUDO_UID'] || process.getuid(), 10),
	    gid = parseInt(env['SUDO_GID'] || process.getgid(), 10);

	process.setgid(gid)
	process.setuid(uid)
})