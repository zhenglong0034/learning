/*var a, b
console.log(a == b)  // true
console.log(a === b) // true
console.log(Object.is(a, b)) */// true

/*var a = undefined
var b = undefined

console.log(a == b)  // true
console.log(a === b) // true
console.log(Object.is(a, b)) // true*/

/*var a = 0
var b = -0

console.log(a == b)  // true
console.log(a === b) // true
console.log(Object.is(a, b)) // false*/

/*var a = null
var b = null

console.log(a == b)  // true
console.log(a === b) // true
console.log(Object.is(a, b))*/ // true

/*var a = []
var b = []

console.log(a == b)  // false
console.log(a === b) // false
console.log(Object.is(a, b))*/ // false

/*var a = {}
var b = {}

console.log(a == b)  // false
console.log(a === b) // false
console.log(Object.is(a, b)) // false
*/

var a = NaN
var b = NaN
console.log(a == b)  // false
console.log(a === b) // false
console.log(Object.is(a, b)) // true
