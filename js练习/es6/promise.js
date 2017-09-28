/* 'use strict';

function want () {
  console.log('延迟执行')
}

function ajaxRes(fn) {
  console.log('我先去执行了~~')
  return new Promise(function(resolve, reject) {
    if (fn) {
      resolve(fn)
    } else {
      reject(fn)
    }
  })
}

ajaxRes(want).then(function(want) {
  want()
})

ajaxRes().then(function(want) {
  want()
}, function() {
  console.log('reject error')
})

let pro = Promise.all([
  a(2), b(12)
])
function a(x) {
  console.log(x)
}
function b(x) {
  console.log(x)
}
pro.then(() => {
  console.log('1212111')
})
 */
let fs = require('fs')
let path = require('path')
let date = new Date()
 let p = Promise.race([
   a(),
   b(),
 ])
/**
 * a 作为一个含有 setTimeout 的普通函数，
 * a 的主体执行完，并将setTimeout 加入event loop 队列，现在 Promise.race算是执行完了,但是还没到延迟的 时间
 * 此时要看setTimeout延迟多久执行，
 */
/*   function a() {
    setTimeout(() => {
      console.log(1)
    }, 101)
    console.log(0)
 } */
function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1)
  })
}
 function b() {
   return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, 'promise.js'), 'utf-8', function(err, data) {
        if (err) {
          return reject()
        }
        console.log(2)
        return resolve()
      })
   })
 }
 function time() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log('ddddddddddd')
      resolve()
    }, 5);
  })
 }
 p.then((resolve, reject) => {
   console.log('看看是谁')
   reject()
 })

