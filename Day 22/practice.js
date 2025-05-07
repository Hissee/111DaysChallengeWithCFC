
// Create a new button element. Give it a text "click me", 
// background color of red and text color of white. Inserte the button as
//  the first element inside the body tag

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.body.prepend(newBtn);

// create a <p> tag in HTML, give it a class & some styling.
//Now create a new class in CSS and try to append the class to the <p>
//element
//Did you notice, hoe you overwrite the class when you add new element.
//solve thisproblen using classList.

let para = document.querySelector("p");
para.classList.add("newClass");
