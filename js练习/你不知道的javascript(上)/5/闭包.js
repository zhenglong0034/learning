var b = 3;
function foo() {
  var a = 2;
  console.log(b + 1000)
  function bar() {
    console.log( a )
    console.log( b );

  }
  // 返回的bar 不带 () 说明返回的是 bar 函数的本身引用 并不会调用
  return bar;
}
// foo 不带（） 说明是foo 函数的引用 并不会调用
// var baz = foo
// console.log(baz()) // baz() 调用 foo()


// foo() 是调用 foo() 函数
var baz = foo() // 输出 1003
// baz() 调用foo() 的返回
baz() // baz() 输出 2  3
