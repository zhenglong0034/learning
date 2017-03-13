/**
 *  bind 绑定函数this指向，优先级是高于apply 以及call的
 * @type {Object}
 */
/*var obj = {a: '12'}

function test() {
  console.log(this === obj)
}

var bindTest = test.bind({})
bindTest()
test()

bindTest.apply(obj)*/

/**
 * 方法调用是指通过对象来调用其方法函数，它是 对象.方法函数(...) 这样的调用形式。
 * 这种情况下，函数中的 this 指向调用该方法的对象,同样需要注意 bind() 的影响
 * @type {Object}
 */
/*const obj = {
  test() {
    console.log(this === obj)
  }
}

obj.test()
obj.test.bind({})()*/


/**
 * 方法中 this 指向全局对象的情况
 * 注意这里说的是方法中而不是上面的 方法调用中。方法中的 this 指向全局对象，如果不是因为 bind()，那一定是因为用的不是方法调用方式；
 * @type {Object}
 */
/*const obj = {
  test() {
    console.log(this === obj)
  }
}

var t = obj.test
t()               // t 就是 obj 的 test 方法，但是 t() 调用时，其中的 this 指向了全局
*/


/**
 * 箭头函数没有自己的 this 绑定。箭头函数中使用的 this，其实是直接包含它的那个函数或函数表达式中的 this
 * @type {Object}
 */
const obj = {
  test() {
    return () => {
      console.log(this === obj)
    }
  }
}
var t = obj.test() //方法调用 而不是方法的引用 哦～
t()

obj.test()()
