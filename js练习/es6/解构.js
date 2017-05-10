// ...  只针对 数组剩余的， 不能对对象操作
const arr = ['a', 'b', 'c']
const [fir] = arr

console.log(fir) // a

const [f, s] = arr
console.log(f + ' ' + s)


const [first, ...second] = arr
console.log(' ' + second)
console.log(first + ' ' + second)

const obj = {
  age: 12,
  name: function() {
    console.log(this.age)
  }
}
const {name} = obj
console.log(name.bind(obj))
