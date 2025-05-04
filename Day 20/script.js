//<----------Arrow function----------->
// let arr = ["Hissee", "Maharjan", "Hasina"]

// arr.forEach(function show(val, i, arr){
//     str = val.toUpperCase();
//     console.log(str, i, arr);
// })

// arr.forEach((val) => {
//     console.log(val);
// })

//<-------------Practice Question--------------->
//for a given array of number, print the square of each value using the forEach loop.
// let nums = [12, 54, 59, 64, 90];

// nums.forEach((num, i) => {
//     sqNum = num *num;
//     console.log(sqNum, i);
// })


//<------------------map()---------------->
// nums.map((val) => {
//     console.log(val);
// })

// console.log(`this is new array`);

// let newArr = nums.map((val) => {
//     console.log(val * val);
// })

// let evenArray = nums.filter((val) => {
//     if(val % 2 === 0){
//         console.log(val);
//     }
// })

// const output = nums.reduce((rec, curr) => {
//     return rec + curr;
// })
// console.log(output);

// let marks = [96, 34, 64, 98, 32, 54]

// let aMarks = marks.filter((mark) => {
//     if(mark > 90){
//         return mark;
//     }
// })

// console.log(aMarks);

let n = prompt("enter a number");

let arr = [];

for(i = 0; i < n; i++){
    arr[i] = i + 1;
}
console.log(arr);

let sum = arr.reduce((resu, curre) => {
    return resu + curre;
})

console.log(sum);

let pro = arr.reduce((resu, curre) => {
    return resu * curre;
})

console.log(pro);
