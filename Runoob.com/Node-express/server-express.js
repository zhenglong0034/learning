var express = require('express')
var app = express()

app.use(express.static('public'))
app.get('/', function(req, res) {
	console.log('get  请求')
	res.send('hello get')
})

app.post('/', function(req, res) {
	console.log('post 请求')
	res.send('hello post')
})

app.post('/users/list', function(req, res) {
	var obj = {"code":"0","description":"OK","result":{"account":{"businessCentral":true,"businessCentralAvailable":false,"businessCustomItem":true,"businessEnableTakeaway":true,"businessEnableWebapp":true,"businessId":14,"businessMemberCentral":true,"businessStorageType":false,"businessType":"MERCHANT","merchantId":null,"needWXTemplateUpgradeNotify":false,"shop":null,"shopEnableShift":true,"shopOpenElectronicScreen":null,"shopOpenParking":false,"shopType":true,"shopWithoutSeat":false,"username":"tjfx"},"baseUrl":"http://vip.test.xkeshi.so:8082","isAdminLogin":false,"role":{"createTime":null,"deleted":false,"description":"","id":null,"isSystem":false,"name":"","updateTime":null,"value":"ROLE_MERCHANT_ADMIN"}}}
	res.send(obj)
})

app.get('/users/list', function(req, res) {
	var obj = { "code":"0","description":"OK","result": { "list": [{"name": "张三"}, {"name": "里斯"}]}}
    res.header("Access-Control-Allow-Origin", "*")
	res.send(obj)
	console.log('get list')
})

app.get('/ab*cd', function(req,res) {
	console.log("ab*cd get请求")
	res.send('正则匹配')
})

var server = app.listen(8082, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为http://%s:%s", host, port)
})