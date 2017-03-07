var query = require('querystring')

var string = query.parse('foo=bar&foa=sss')

console.log(string)