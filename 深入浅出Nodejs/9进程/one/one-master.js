var fork = require('child_process').fork
var cpus = require('os').cpus()

for(var i = 0; i<cpus.length; i++ ) {
	fork('./one-process.js')
}

// 这段代码会根据当前机器上的CPU数量复制出对应Node 程数。在*nix系统下可以 过ps aux | grep worker.js  到 程的数量