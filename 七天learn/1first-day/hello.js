function say() {
	console.log('Hello Node!')
}
say()

exports.attribute = 'hello 导出属性！'

exports.hello = function() {
	console.log('hello 调用方法！')
}