// for (var i = 0; i <= 5;i++) {
//   (function() {
//     var j = i
//     setTimeout(function timer(){
//     console.log(j)
//   }, j*1000)
//   })()
// }

// 等同于 =>

// for (var i = 0; i <= 5;i++) {
//   (function(j) {
//     setTimeout(function timer(){
//     console.log(j)
//   }, j*1000)
//   })(i)
// }

// 等同于 =>

for (let i=0; i<=5; i++) {
  console.log(i)
  setTimeout( function timer() {
    console.log( i );
  }, i*1000 );
}
