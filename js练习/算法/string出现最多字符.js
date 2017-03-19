var char = 'afsafdsfdsas'


/**
 * 第一种方法：先遍历将 字符 放入object，继续遍历，如果存在，该属性值加1，直到结束
 * 然后再对object 操作，遍历 取得最大的 属性及值
 * 缺点就是 代码过于多了
 * @type {Object}
 */
/*var obj = {}
for (var i = 0, len = char.length; i < len; i++) {
  if (obj[char.charAt(i)]) {
    obj[char.charAt(i)]++
  } else {
    obj[char.charAt(i)] = 1
  }
}
var dd = 0, ca
for (var i in obj) {
  if(obj[i] > dd) {
    dd = obj[i]
    ca = i
  }
}
console.log(ca + ': ' + dd)
*/

var arr = []

arr = char.split('')

arr.sort()

console.log(arr)
var start, end, num = 0, temp=true, c
for(var i = 0, len = arr.length; i < len; i++) {
  if (arr[i] === arr[i+1]) {
    if (temp) {
      temp = false
      start = i
    }
  } else {
    end = i
    temp = true
    if(end - start + 1 > num){
      c = arr[i]
      num = end - start + 1
      console.log(num)
    }
  }
}

console.log(c + ': ' + num)
