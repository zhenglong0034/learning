var express =  require('express')
var cookieParser = require('cookie-parser')

var app = express()

app.use(cookieParser())

app.get('/', function(req, res) {
	console.log("Cookie" , req.cookies)
	res.send(req.cookies)
})

app.listen(8005)