/**
 * 第一个generator 函数
 * [*helloWorldGenerator description]
 * @yield {[type]} [description]
 */
// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//     return 'ending';
// }

// var hw = helloWorldGenerator();

// console.log(hw.next())
// hw.next()
// hw.next()
// hw.next()


/**
 * 普通函数 与generator函数
 */
// function normalFunction() {
//   console.log('normal')
// }

// function* secondGenerator() {
//   console.log('this is generate 函数')
// }

// var normal = normalFunction()

// var generate = secondGenerator()
// generate.next()

/**
 * 通过对比 理解函数generator next
 *
 */
// function* gen(){
//   yield* ['a', 'b', 'c']
// }

// var g = gen()
// for (var i of g) {
//   console.log(g.next())
//   console.log(i)
// }
// for (var i of g) {
//   console.log(i)
// }

function* generate(x) {
  var result = yield x+1
  console.log(result)
}

var gene = generate(5)
console.log(gene.next())
console.log(gene.next({'dd': '09'}))

