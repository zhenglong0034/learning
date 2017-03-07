var a = true;
if(a) {
  function foo() {
    console.log('a');
  }
} else {
  function foo() {
    console.log('b');
  }
}
foo();
