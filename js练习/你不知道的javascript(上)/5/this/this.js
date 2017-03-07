// var a = {
//   b: '121',
//   c: function d() {
//     console.log(this.b)
//   }

// }
// a.c()

// var a = {
//   b: 1,
//   c: function d() {
//     var self = this
//     console.log(self)
//     console.log(this.b)
//   }
// }
// var b = 2
// a.c()

// setTimeout(a.c, 100)

// this详解
// function bar() {
//   console.log(this.a)
// }

// var b = {
//   a: 2,
//   foo: bar
// }
// var a = 44
// b.foo() // 2
// bar.call()

// this new

// function bar (a) {
//   this.a = a
// }

// var b =new bar(2)
// console.log(b.a)

// this 被忽略
// function foo() {
//   console.log(this.a)
// }
// var a = 2
// foo.call(null)

// 箭头函数
// function foo() {
//   return () => {
//     console.log(this.a)
//   }
// }
// var obj1 = {
//   a:2
// }
// var obj2 = {
//   a:3
// }
// var bar = foo.call(obj1)
// bar.call(obj2)

var b = ['tree']
   c = ['tree']
console.log(b[0] === c[0])
