var buf = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f])

console.log(buf.length) // 5
console.log(buf[0])  // 104

console.log(buf.toString('utf-8'))