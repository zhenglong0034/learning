
var foo = function () { 
	var local = 'local var'; 
	var bar = function () {
        var local = 'another var'; 
        var baz = function () {
            console.log(local);
        };
        baz();
    };
    bar();
};

  foo();

  setImmediate(function () {
  setTimeout(function () {
     console.log('1');
  },0);

  setImmediate(function () {
     console.log('2');
  })
})