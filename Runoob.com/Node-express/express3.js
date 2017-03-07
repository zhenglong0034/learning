var express = require('express')

var app = express()

var bodyParser = require('body-parser')

app.use(express.static('public'))

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodeParser = bodyParser.urlencoded({ extended: false })

// 返回index.htm 页面
app.get('/index.htm', function(req, res) {
   	res.sendFile(__dirname + "/" + "client/index.htm")
})

app.get('/index2.html', function(req, res) {
	res.sendFile(__dirname + "/" + "client/index2.html")
})

app.get('/list_get', function(req, res) {
	response = {
		name: req.query.first_name,
		email: req.query.last_name
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

app.post('/list_post', urlencodeParser, function(req, res) {
	response = {
		name: req.body.first_name,
		email: req.body.last_name
	}
	console.log(response)
	res.end(JSON.stringify(response))
})
app.post('/post/method', urlencodeParser, function(req, res) {
	response = {
		name: req.body.test,
	}
	console.log(response)
    res.header("Access-Control-Allow-Origin", "*")
	res.end(JSON.stringify(response))
})

var server = app.listen(8003, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例", host, port)
})