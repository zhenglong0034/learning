// NaN 的类型为 ‘number’
let dd = NaN
console.log(typeof dd)
console.log(dd)

let a = 'sdsf'
let b = 'tyrth'
console.log(a | b)   // 0 按位 或
console.log(a || b)  // sdsf

let c = '1'
let d = '3'
console.log(c & d)  // 1 按位 与
console.log(c && d) // 3

let e = undefined
let f = null
console.log('e: ' + 5*e) // NaN
console.log('f: ' + 5*f) // 0
