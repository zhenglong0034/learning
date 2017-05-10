/*
  以下场景需要在浏览器下 执行，不能直接ctrl+B
  随着函数使用场合的不同，this 的值会发生变化，但是有个总的原则，this 总是指向调用它的对象
  这个对象可能是： 全局对象、当前对象 或者 任意指定对象， 取决于调用它的环境
 */

// 作为函数调用
// 在浏览器 执行下面代码，输出的是 true
/*var that = this
console.log(this);

function fn(){
    console.log(this === that);
}

fn();*/ // 浏览器输出true, 说明fn1 调用它的是全局环境，this指向全局对象

// 内部函数：函数嵌套产生的内部函数的this不是其父函数，仍然是全局变量
// setTimeout、setInterval 这两个方法执行的函数this也是全局对象

/*function fn1() {
  function fn2() {
    console.log(this)
  }
  fn2()
}

fn1()*/ // window 对象
/*
for (var i = 0; i< 5; i++) {
  setTimeout(function(i) {
    console.log(i)

  }, 120)
}*/

// 作为构造函数调用: 所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象
// new 运算符接受一个函数 F 及其参数：new F(arguments...)。这一过程分为三步：
// 创建类的实例。这步是把一个空的对象的 __proto__ 属性设置为 F.prototype 。
// 初始化实例。函数 F 被传入参数并调用，关键字 this 被设定为该实例。
// 返回实例
/*function Person(name){
    this.name = name;
}
Person.prototype.printName = function(){
    console.log(this.name);
};

var p1 = new Person('Byron');
var p2 = new Person('Casper');
var p3 = new Person('Vincent');

p1.printName();
p2.printName();
p3.printName();*/

/*function per(name) {
  this.name = name || 'sss'
  this.say = function() {
    console.log('my name:' + this.name)
  }
  this.say()
}
var p = new per('zhangshan')
p.say() //my name:zhangshan 但是 this 指向per

var pp = per('long') //my name:long, 但是 this 指向window,只是把 window 对象的name 设为 long

var ppp = per
ppp() *///my name:sss, 但是 this 指向window,只是把 window 对象的name 设为 'sss'


// 作为对象方法调用

// 在 JavaScript 中，函数也是对象，因此函数可以作为一个对象的属性，此时该函数被称为该对象的方法，
// 在使用这种调用方式时，this 被自然绑定到该对象
/*var obj = {
    name: 'Byron',
    printName: function(){
      console.log(arguments)
        console.log(this);
    }
}

obj.printName() // Object {name: "Byron", printName: function}
var lll = obj.printName() // Object {name: "Byron", printName: function}

var lll = obj.printName // 只是获得了printName 的 引用，并未运行
lll()*/ // 运行的环境为全局，因此为 window 对象

// Function.prototype.bind,返回一个新函数，并且使函数内部的this为传入的第一个参数
/*var lll = obj.printName
lll.bind(obj)()*/  // Object {name: "Byron", printName: function}

// 使用call和apply设置this,可以强行改变this的指向，不论是函数调用还是内部函数 返回函数引用的情况，直接执行的无法改变
// 语法很简单，第一个参数都是希望设置的this对象，不同之处在于call方法接收参数列表，而apply接收参数数组
/*var obf = { name: '12'}
function fn(){
    console.log(this);
}
fn.bind(obf)()
fn.call(obf)
fn.apply(obf)


var obf = { name: '123'}
function fn1() {
  function fn2() {
    console.log(this)
  }
  return fn2 // 如果改成 fn2() 直接执行的 则无法改变 this的指向
}
var aa = fn1()
aa.bind(obf)() // obf
aa.call(obf) // obf
aa.call(obf) // obf
aa.apply(obf) // obf
fn1().bind(obf)() // obf
fn1.bind(obf)()()*/ // window

// caller
// 在函数A调用函数B时，被调用函数B会自动生成一个caller属性，指向调用它的函数对象，
// 如果函数当前未被调用，或并非被其他函数调用，则caller为null
/*function fn4(){
    console.log(fn4.caller); // null
    function fn(){
        console.log(fn.caller); // fn4()
    }
    fn();
}

fn4();*/

// callee
// 当函数被调用时，它的arguments.callee对象就会指向自身，也就是一个对自己的引用
// 由于arguments在函数被调用时才有效，因此arguments.callee在函数未调用时是不存在的（即null.callee），且引用它会产生异常
/*function ff () {
  console.log(arguments)
  console.log(arguments.callee)
}
ff()*/


// arguments
// 在函数调用时，会自动在该函数内部生成一个名为 arguments的隐藏对象
// 该对象类似于数组，可以使用[]运算符获取函数调用时传递的实参
// 只有函数被调用时，arguments对象才会创建，未调用时其值为null

/* function fn5(name, age){
     console.log(arguments);
     name = 'XXX';
     console.log(arguments);
     arguments[1] = 30;
     console.log(arguments);
 }
 fn5('Byron', 20);*/



 // 函数的执行环境

//  JavaScript中的函数既可以被当作普通函数执行，也可以作为对象的方法执行，这是导致 this 含义如此丰富的主要原因

//  一个函数被执行时，会创建一个执行环境（ExecutionContext），函数的所有的行为均发生在此执行环境中，
//  构建该执行环境时，JavaScript 首先会创建 arguments变量，其中包含调用函数时传入的参数

//  接下来创建作用域链，然后初始化变量。首先初始化函数的形参表，值为 arguments变量中对应的值，
//  如果 arguments变量中没有对应值，则该形参初始化为 undefined。

//  如果该函数中含有内部函数，则初始化这些内部函数。如果没有，继续初始化该函数内定义的局部变量，
//  需要注意的是此时这些变量初始化为 undefined，其赋值操作在执行环境（ExecutionContext）创建成功后，函数执行时才会执行，
//  这点对于我们理解JavaScript中的变量作用域非常重要，最后为this变量赋值，会根据函数调用方式的不同，赋给this全局对象，当前对象等

//  至此函数的执行环境（ExecutionContext）创建成功，函数开始逐行执行，所需变量均从构建好的执行环境（ExecutionContext）中读取。


//  三种变量

//  实例变量：（this）类的实例才能访问到的变量
//  静态变量：（属性）直接类型对象能访问到的变量
//  私有变量：（局部变量）当前作用域内有效的变量

/*function classA(){
    var a = 1; // 私有变量，只有函数内部可以访问
    this.b = 2; // 实例变量，只有实例可以访问
}

classA.c = 3; // 静态变量，也就是属性，类型访问

classA()  // this 为window
console.log(this.b) // 浏览器环境为 2


// console.log(a); // error
console.log(classA.b) // undefined
console.log(classA.c) // 3

var classa = new classA();
console.log(classa.a);//undefined
console.log(classa.b);// 2
console.log(classa.c);*///undefined

var obg = { name: 'sd' }

function funct() {
  this.a = 'adv'

}
funct.bind(obg)()
console.log(obg.a) // adv
