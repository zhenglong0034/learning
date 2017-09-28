var url = require('url')

var obj = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')

console.log(obj)

var urll = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
})

console.log(urll)

var resolve = url.resolve('http://www.example.com/foo/bar', '../baz')

console.log(resolve)