//<--------------push()---------->
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

//<--------------pop()----------->
fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]

//<--------------toString()---------->
let fruitsStr = fruits.toString();
console.log("Array as string:", fruitsStr); // "apple,banana"

//<--------------concat()---------->
let vegetables = ["carrot", "broccoli"];
let food = fruits.concat(vegetables);
console.log("Combined arrays:", food); // ["apple", "banana", "carrot", "broccoli"]

//<--------------shift()---------->
food.shift();
console.log("After shift:", food); // ["banana", "carrot", "broccoli"]

//<--------------Looping through array---------->
console.log("Looping through food array:");
for (let i = 0; i < food.length; i++) {
  console.log(`Item ${i + 1}:`, food[i]);
}
