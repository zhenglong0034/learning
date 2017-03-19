var char = 'afsafdsfdsasAghjkdfdsgbng'


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


/**
 * 第二种方法： 先将字符串进行split('') 排成数组，然后 进行sort() 排序，此时所有的字符按顺序排列在一起
 * 然后对 数组进行遍历，字符相同时，记录前后相同的字符的开始，不同时，记录结束位置，然后与存储的比较
 * 当对数组完成一次遍历后可以得到 一个记录字符 以及其最长的 次数
 * @type {Array}
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
    // 要判定 是否已经走过 上面的相等判断 至 temp 为false
    if(!temp) {
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

console.log(c + ': ' + num)


/**
 * 第三种方法：先将字符打乱成数组，然后将其排序并组合成新字符串，然后利用正则表达式([a-zA-Z])\1* 进行分割 成相同值的数组
 * 然后 通过sort 排序长度，并取数组最长 的字符及长度
 * @type {Array}
 */
// var arr = []

// arr = char.split('')

// arr.sort()
// var str = arr.join('')


// var so = str.match(/([a-zA-Z])\1*/g)
// console.log(so)
// so.sort(function(a, b) {
//   return b.length - a.length
// })
// console.log(so)

// console.log(so[0][0] + so[0].length)



