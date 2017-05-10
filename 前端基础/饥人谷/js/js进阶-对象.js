/*var fun = new Function()

console.log(fun)
for (var i in fun) {
  console.log(i + ' 12')
}*/

function func(d,tg) {
  this.d = d
  this.tg = tg
  this.say = function() {
    console.log(this)
    console.log(this.d)
  }
  this.say()
}

/* new 运算符接受一个函数 F 及其参数：new F(arguments...)。这一过程分为三步：

创建类的实例。这步是把一个空的对象的 proto 属性设置为 F.prototype 。
初始化实例。函数 F 被传入参数并调用，关键字 this 被设定为该实例。
返回实例。*/

var f = new func(12,34)

console.log(f)

/*问题

构造函数在解决了上面所有问题，同时为实例带来了类型，但可以注意到每个实例printName方法实际上作用一样，但是每个实例要重复一遍，
大量对象存在的时候是浪费内存*/

 /*构造函数

任何函数使用new表达式就是构造函数

每个函数都自动添加一个名称为prototype属性，这是一个对象

每个对象都有一个内部属性 __proto__(规范中没有指定这个名称，但是浏览器都这么实现的) 指向其类型的prototype属性，类的实例也是对象，
其__proto__属性指向“类”的prototype。

实例可以通过__prop__访问到其类型的prototype属性，这就意味着类的prototype对象可以作为一个公共容器，供所有实例访问

*/
/*
抽象重复

我们刚才的问题可以通过这个手段解决

所有实例都会通过原型链引用到类型的prototype

prototype相当于特定类型所有实例都可以访问到的一个公共容器

重复的东西移动到公共容器里放一份就可以了*/

/*function Person(nick, age){
    this.nick = nick;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log(this.nick);
}

var p1 = new Person('bbb', 12);
p1.sayName();*/
