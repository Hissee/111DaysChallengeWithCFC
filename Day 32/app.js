// function hello(){
//     console.log("Hello world");
// }

// setTimeout(hello, 5000);
// <-----------async ----------->
// console.log("one");
// console.log("two");
// console.log("three");


// setTimeout(() => {
//     console.log("this is it")
// }, 2000);

// console.log("four");
// console.log("five");
// console.log("six");

 
// //<-----------Callback------------->

// function getData(dataId, getNextData) {
//      setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//      }, 2000);
// }

// //<--------------Callback hell---------->
// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });


//<--------------Promise------------->
// let promise = new Promise((resolve, reject) => {
//     console.log("This is  a promise");
//     // resolve("success");
//     reject("Failed");
// }) 


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data = ", dataId);
            resolve("Success")
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}



