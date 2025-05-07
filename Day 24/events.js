//<----------Evnet handler----------->

let btn1 = document.querySelector("#btn1");
let div = document.querySelector("div");


// btn1.onclick = () => {
//     console.log("the button was clicked");
//     alert(`the button was clicked`);
//     let a = 25;
//     a++;
//     console.log(a);
// }

//<-----------------event Listner-------------->

// //<------add----->
// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
//     let imgdiv = document.createElement("div");
//     btn1.after(imgdiv);
//     let img = document.createElement("img");
//     img.setAttribute("src", "./image.png")
//     img.style.height = "200px";
//     img.style.width = "200px";
//     imgdiv.prepend(img);
// })

// btn1.addEventListener("click", () => {
//     console.log('It worked!');
// })

// const second = () => {
//     console.log('It worked!!');
// }
// btn1.addEventListener("click", second);

// btn1.addEventListener("click", () => {
//     console.log('It worked!!!');
// })

// //<-----remove----->
// btn1.removeEventListener("click",second);


//<-------------Event object-------------->
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);

// }

// let div = document.querySelector("div");

// let x = 0;
// div.onmouseover = () => {
//     x++;
//     div.append(`the mouse was inside ${x} times`);
// }

