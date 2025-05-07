// let firstEle = document.querySelector("p");
// console.dir(firstEle.innerText);

// let allEle = document.querySelectorAll("p");
// console.dir(allEle);

// let heading = document.querySelectorAll("#heading1");
// console.dir(heading);

//tagName property
// firstEle.tagName
// console.dir(document.body.children);

//InnerText property returns text of element
// let div1 = document.querySelector("div");
// console.dir(div1.innerText);
// div1.innerText = ("this is changed paragraph by innerText");


//InnerText property returns HTML tags and Text of element
// let div2 = document.querySelector("div");
// console.dir(div2.innerHTML);
// firstEle.innerHTML = ("<i>this is changed paragraph bu inner HTML</i>");

//textContent property returns tectual content even for hidder element

//<--------------------Pratice Question-------------------------->
//Create a H2 heading element with text - "Hello JAvaScript". Append 
// "from Apna Commege Students" to this text using JS.

let h2 = document.querySelector("h2");
console.dir(h2);

h2.innerText = h2.innerText + " from Apna College";

//Create 3 divs with common class name - "box ". Access them and add some
//unique text to each of them
let divs = document.querySelectorAll(".box")

// div[0].innerText = "new unique value1";
// div[1].innerText = "new unique value2";
// div[2].innerText = "new unique value3";
let i = 1;
for( div of divs){
    div.innerText  = `new unique value ${i}`;
    i++;
}


