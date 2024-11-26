let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click ME";
let body = document.querySelector("body");
body.appendChild(input);
body.appendChild(button);

button.setAttribute("id","btn")
input.setAttribute("placeHolder","username");

let h11 = document.createElement("h1");
h11.innerText = "DOM Practice";
// body.appendChild("h11")
body.appendChild(h11)
h11.classList.add("h1Class");

let para = document.createElement("p");
para.innerHTML = "Apna College  <b>Delta </b> Practice ";
body.appendChild(para)



