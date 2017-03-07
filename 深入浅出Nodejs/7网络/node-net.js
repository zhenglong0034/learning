// var net = require('net')

// var server = net.createServer(function (socket) {
// 	socket.on('data', function(data) {
// 		socket.write('hello net 模块')
// 	})
// 	socket.on('end', function(data) {
// 		console.log('连接断开')
// 	})
// 	socket.write('欢迎 Node net 演示')
// })

// server.listen(8123, function() {
// 	console.log('监听8123')
// })

	var net = require('net');
	var client = net.connect({port: 8004}, function () { //'connect' listener
	     console.log('client connected');
	     client.write('world!\r\n'); 
	});
	client.on('data', function (data) { 
	    console.log(data.toString()); 
	  	client.end();
	  });
	client.on('end', function () { 
		console.log('client disconnected');
	});