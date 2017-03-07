// 字符串的操作还是从左向右算得；
/*
var a = 1, b = 1;
console.log(a + b + '')
console.log(a + '' + b)
console.log('' + b + a)
console.log(a.toString() + b .toString())
*/


// 定义 字变量的几种形式

/*var a = (); // 错误

var b = []; // 可以

var c = {}; // 可以

var d = function() {} // 可以*/

//验证遍历方法的快慢

var a = [10,2,34,54,4544,4546,54545,665,56544,35353,3434,4544,4546,54545,665,56544,35353,3434,
4544,4546,54545,665,56544,35353,3434,4544,4546,54545,665,56544,35353,3434,4544,
4546,54545,665,56544,35353,3434,4544,45466776767676767,54545,665,56544,35353,3434,42242,343534,34343133,4545]

var date = (new Date()).getTime()
for (var n in a) {
  for(var m in a) {
    for (var j in a) {
      console.log(a[n]*a[m]*a[j])
    }
  }
}


/*
for (var i = 0, len = a.length; i < len; i++) {
  for (var j = 0; j < len; j++) {
    for(var d =0; d< len; d++)
    console.log(a[i]*a[j]*a[d])
  }

}*/
var end = () => {
  return (new Date()).getTime()
}

console.log(end() - date)
