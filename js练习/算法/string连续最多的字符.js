var char = 'afsafdsssfsAAffssgssgfbdggggssdvffdhdfghee'


/**
 * 第一种方法：先将 字符串 打乱成数组（不要排序），其它的处理 同 出现 最多字符数 的相同；
 * @type {[type]}
 */
/*var arr = char.split('')
console.log(arr)
var start=0, end=0, num = 1, temp=true, c
for(var i = 0, len = arr.length; i < len; i++) {
  if (arr[i] === arr[i+1]) {
    if (temp) {
      temp = false
      start = i
    }
  } else {
    if (!temp) {
      end = i
      temp = true
      if(end - start + 1 > num){
        c = arr[i]
        num = end - start + 1
        console.log(num)
      }
    }
  }
}

console.log(c + ': ' + num)*/


/**
 * 第二种方法： 同处理string 出现最多字符数的类似，但不需要经过转换数组后排序 在 拼成 字符串
 * @type {[type]}
 */
var so = char.match(/([a-zA-Z])\1*/g)

console.log(so)

so.sort(function(a, b) {
  return b.length - a.length
})

console.log(so[0][0] + so[0].length)
