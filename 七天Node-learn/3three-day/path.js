var path = require('path')

var cache = {}

function store(key, value) {
	cache[path.normalize(key)] = value
}

store('path//hello///', 2)

console.log(cache)

var paths = path.join('hello/', 'node/', '../three')
console.log(paths) // paths拼接后的字符串为hello/node/..three path模块对../进行了解析认为是父文件夹，所以最后为 hello/three