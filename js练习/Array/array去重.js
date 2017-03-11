const arr = [9, 'ddcd', 34, 5, 'ab', 776, 654, 45, 'avcd', 86, 11, 45, 12, 45, 12, 5, 12, 'ab', 12]
const arr1 = [9, 12, 45, 12, 5, 12, 12]

/**
 * 数组去重第一种方法：先利用sort进行排序，是根据每个值的Unicode 进行排序，不稳定的，会改变数组原来顺序；
 * 然后将 数组从第二个值开始循环，依次和前面比较，如果相等，splice掉
 * 这里有亮点需要注意，数组在splice 后是改变的，所以应该动态改变 i < arr.length，写死的话会超出
 * 另外在满足 arr[i-1] === arr[i] 数组会减一操作，同时需要对 i 进行 i-- 否则对于出现的 多个重复值 无法完全去重（会留最后一个重复值）
 *
 */
/*arr.sort()

console.log(arr)
for (var i = 1, len = arr.length; i < arr.length; i++) {
  if (arr[i-1] === arr[i]) {
    arr.splice(i, 1)
    i--
  }
}
console.log(arr)*/


/**
 * 第二种方法：重新声明一个数组，遍历原数组；存在的就不push， 不存在就push
 * 不会改变数组原来的顺序
 * @type {Array}
 */
/*var s = []

for (var i = 0, len = arr.length; i < len; i++) {
  if (s.indexOf(arr[i]) === -1) {
    s.push(arr[i])
  }
}

console.log(s)
*/

/**
 * 第三种方法：直接将原来的数组的值作为一个对象的属性，并设置该属性为true 遍历数组的值然后对象中查找该值对应的属性；为true不添加
 * 最后再遍历 对象key值即可
 * 但这样会改变 原来的顺序
 * @type {Object}
 */
/*var s = {}

for (var i = 0, len = arr.length; i < len; i++) {
  if(!s[arr[i]]) {
    s[arr[i]] = true
  }
}

console.log(Object.keys(s))*/
/*相较于前面的方法，该方法无须再次遍历对象属性，并且不会改变数组原来值的顺序，但要多定义一个数组

var s = {}
var so = []
for (var i = 0, len = arr.length; i < len; i++) {
  if(!s[arr[i]]) {
    so.push(arr[i])
    s[arr[i]] = true
  }
}

console.log(so)*/
