var arr = [1, 213, 323, 32, 0.34, '34', 'gfgh', 45, '哈哈', 4, 23, 'array去重.js']

/**
 * 第一种方法： reverse 可以实现反转, 但应该不会让写
 */
/*arr.reverse()*/

/**
 * 第二种方法： 直接利用 第一个和最后一个交换，第二个和倒数第二个交换。。。
 * 不用申请新的数组，直接在当前数组进行操作
 */
/*for (var i = 0, len = arr.length; i < len/2; i++) {
  var temp = arr[i]
  arr[i] = arr[arr.length - 1 - i]
  arr[arr.length - 1 - i] = temp
}
*/

/**
 * 第三种方法：定义数组并且将arr 弹出的数组 压入 rev
 * @type {Array}
 */
/*var rev = []
for (var i = 0, len = arr.length; i < len; i++) {
  rev.push(arr.pop())
}

console.log(rev)*/
