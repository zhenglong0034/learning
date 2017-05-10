var a = 'gloal'
var c = 'gloal'
var b = function() {
  var c = 'inner'
  var d = function () {
    console.log(c)
    return c
  }
  return c
}

console.log(b()) // 字面量形式的记得return 不然无法取得变量
