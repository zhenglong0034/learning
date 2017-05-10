
// 内部函数也可以有自己的变量，这些变量都被限制在内部函数的作用域中：
// 每当通过引用或其它方式调用这个内部函数时，就会创建一个新的innerVar变量，然后加1，最后显示
/*function outerFn() {
    console.log("Outer function");
    function innerFn() {
        var innerVar = 0;
        innerVar++;
        console.log("Inner function\t");
        console.log("innerVar = "+innerVar+"");
    }
    return innerFn;
}

var fnRef = outerFn();
fnRef();
fnRef();

var fnRef2 = outerFn();
fnRef2();
fnRef2();
*/

// 内部函数也可以像其他函数一样引用全局变量：
/*var globalVar = 0;

function outerFn() {
    console.log("Outer function");
    function innerFn() {
        globalVar++;
        console.log("Inner function\t");
        console.log("globalVar = " + globalVar + "");
    }
    return innerFn;
}

var fnRef = outerFn();
fnRef();
fnRef();

var fnRef2 = outerFn();
fnRef2();
fnRef2();*/


// 如果这个变量是父函数的局部变量又会怎样呢？
// 是前面两种情况合成的效果，通过每个引用调用innerFn都会独立的递增outerVar。
// 即第二次调用outerFn没有继续沿用outerVar的值，而是在第二次函数调用的作用域创建并绑定了一个新的outerVar实例，两个计数器完全无关。
// 当内部函数在定义它的作用域的外部被引用时，就创建了该内部函数的一个闭包。
// 这种情况下我们称既不是内部函数局部变量，也不是其参数的变量为自由变量，称外部函数的调用环境为封闭闭包的环境。
// 从本质上讲，如果内部函数引用了位于外部函数中的变量，相当于授权该变量能够被延迟使用。
// 因此，当外部函数调用完成后，这些变量的内存不会被释放（最后的值会保存），闭包仍然需要使用它们。
/*function outerFn() {
    var outerVar = 0;
    console.log("Outer function");
    function innerFn() {
        outerVar++;
        console.log("Inner function\t");
        console.log("outerVar = " + outerVar + "");
    }
    return innerFn;
}

var fnRef = outerFn();
fnRef();
fnRef();

var fnRef2 = outerFn();
fnRef2();
fnRef2();*/

// 当存在多个内部函数时，很可能出现意料之外的闭包。我们定义一个递增函数，这个函数的增量为2。
// 映射返回两个内部函数的引用，可以通过返回的引用调用任一个内部函数innerFn1和innerFn2引用了同一个局部变量，因此他们共享一个封闭环境。
// 当innerFn1为outerVar递增一时，就为innerFn2设置了outerVar的新的起点值，反之亦然。
// 我们也看到对outerFn的后续调用还会创建这些闭包的新实例，同时也会创建新的封闭环境，本质上是创建了一个新对象，
// 自由变量就是这个对象的实例变量，而闭包就是这个对象的实例方法，而且这些变量也是私有的，
// 因为不能在封装它们的作用域外部直接引用这些变量，从而确保了面向对象数据的专有性。

function outerFn() {
    var outerVar = 0;
    console.log("Outer function");
    function innerFn1() {
        outerVar++;
        console.log("Inner function 1\t");
        console.log("outerVar = " + outerVar + "");
    }

    function innerFn2() {
        outerVar += 2;
        console.log("Inner function 2\t");
        console.log("outerVar = " + outerVar + "");
    }
    return { "fn1": innerFn1, "fn2": innerFn2 };
}

var fnRef = outerFn();
fnRef.fn1();
fnRef.fn2();
fnRef.fn1();

var fnRef2 = outerFn();
fnRef2.fn1();
fnRef2.fn2();
fnRef2.fn1();


// 表达式 -- new Function构造函数
//
// 当使用function的构造函数创建对象（new XXX）的时候，如果函数return基本类型或者没有return（其实就是return undefined）的时候，
// new 返回的是对象的实例；如果 函数return的是一个新的对象，那么new 将返回这个新  对象而不是函数实例。
