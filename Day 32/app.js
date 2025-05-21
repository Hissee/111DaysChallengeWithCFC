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

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data = ", dataId);
//             // resolve("Success")
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 2000);
//     });
// }

//promise functions .then() and . catch()

//promise.then((res) => {....})
//promise.catch((err) => {....})

// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I'm a promisr");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then (() => {
//     console.log("promise fulfilled")
// });

// promise.catch((err) => {
//     console.log("networ error");
// })

//<--------------Promise chain-------------->

// function asyncFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data");
//       resolve("Sucess");
//     }, 4000);
//   });
// }

// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("Sucess");
//     }, 4000);
//   });
// }

// console.log("fetch data1....");
// asyncFunction1().then((res) => {
//   console.log("fetch data2....");
//   asyncFunction2().then((res) => {
//   });
// });

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
    // await api();
// }

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}


// <---------async-await------------->
async function getAlldata() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}
