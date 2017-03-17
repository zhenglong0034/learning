var hello = 'hello vue and vuex and vue-router!'

/**
 * 第一种方法： 首先将其转换为 数组，然后遍历更改 toUpperCase(), 最后将数组用join 拼接
 *
 * split 与 遍历更改 都不会改变 原来数组或者字符串
 */
/*var arr = hello.split(' ')
var to = []
arr.forEach(item => {
  let first = item.charAt(0).toUpperCase()
  let others = item.substring(1)
  to.push(first + others)
})
console.log(to.join(' '))
console.log(hello)
console.log(arr)*/


/**
 * 第二种： 正则表达式， 好用；
 * 但耗内存
 * @type {String}
 */
/*var to = ''
hello.replace(/(\w+)(-\w+)?/g, (s) => {
  to += s.charAt(0).toUpperCase() + s.substring(1) + ' '
})

console.log(to)*/

