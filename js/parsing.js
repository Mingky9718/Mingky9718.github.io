
function foo() {
  console.log(Date());
  setTimeout(foo, 20000);
};

console.log("안녕");
