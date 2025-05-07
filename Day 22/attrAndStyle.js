let div = document.querySelector("div");
console.dir(div.innerText);
div.style.backgroundColor = "yellow";
div.style.height = "200px";
div.style.width = "200px";

// div.append(" this is appended");
// div.prepend("this is prepend ");

//<----------append and prepend--------->
let el = document.createElement("button");
el.innerText = "Click me";
// div.append(el);
el.style.height = "50px";
el.style.width = "50px";
el.style.backgroundColor = "1px solid black";


// div.before(el);
div.after(el);

let p = document.querySelector("p");
p.remove();



// let div = document.querySelector("div");

// let attValue = div.getAttribute("id");

// console.log(attValue);

// let par = document.querySelector("p");
// // let attrval = par.getAttribute("id");
// console.log(par.setAttribute("class", "newClass"));



