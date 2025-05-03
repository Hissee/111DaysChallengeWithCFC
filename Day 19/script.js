//function creation
function greet() {
  console.log("Hello everyone!");
}
greet();

// Function with Parameters
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Hissee"); 

//Function with Return Value
function add(a, b) {
  return a + b;
}
let sum = add(5, 3);
console.log("Sum is:", sum); 

//Function Expression 
const multiply = function (x, y) {
  return x * y;
};
console.log("Product is:", multiply(4, 2)); 

//Arrow Function 
const divide = (a, b) => {
  return a / b;
};
console.log("Division result:", divide(10, 2)); 