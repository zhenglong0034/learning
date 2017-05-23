var fruits = ['apple', 'banana', 'orange', 'city']

// 测试 forEach 第三个参数
/*fruits.forEach((item, index, arr) => {
  console.log(item)
  console.log(index)
  console.log(arr)
})*/


// slice 返回一个子数组，修改子数组不会改变 原数组
/*var copy = fruits.slice()
copy.push('ddd')
console.log(copy)
console.log(fruits)*/

/*var copy = fruits.slice(1, 3) // 截取的子数组位置
console.log(copy)*/

/**
 * slice只有 一个参数并且为负数时，代表从尾部开始，-1代表倒数第一位，-2代表倒数第二位，无第二个参数即到结束为止；
 * @type {[type]}
 */
// var copy = fruits.slice(-2)
// console.log(copy)


/**
 * slice 的 start 与end代表位置，为负数时表示 从尾部开始，-1代表倒数第一位，-2代表倒数第二位
 * 即使有一个为负数也不会改变规则如（1，-1）表示从下标 1（含,正序）开始到-1（不含，倒着数第一个）
 * 但无论是start 和end 都为正 还是都为 负， 还是一正一负，所有的规则都是开始位置一定要在结束位置的左边即 真实的数组 index 小于end
 * end 为 0 时无论start 如何设置都是空的，因为end 是不包含的，无论 start 如何设置 都不会出现在end 的左边；
 * @type {[type]}
 */
var copy = fruits.slice(0, 0)
console.log(copy)
