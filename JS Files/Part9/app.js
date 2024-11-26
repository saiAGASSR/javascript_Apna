// in JS 
// elements and tags can we used as objects and perform actions which can be performed like the actions that can be performed on objkects 
// basically DOM is a tree like and every element is called node 
let oldimagesToNew = document.getElementsByClassName("oldImg");
//  this is a collection   which looks like array but we cannot perform actions like we do on arrays 

for (let i = 0; i< oldimagesToNew.length; i++) {
  console.log(oldimagesToNew[i]);
  console.log(oldimagesToNew[i].src = "assets/spiderman_img.png" );

    }


    // InnerText 
    // shows whats appear on screen 
    // Text Content 
    // shows every text 
    // innerHTML shows tags 
    //  /n represents the code written in editor 

let p = document.createElement("p");
p.innerText = "Hey! i am red ";
p.color = "red";

let body = document.querySelector("body");

body.appendChild(p);
p.classList.add( "red")

let h3 = document.createElement("h3");
h3.innerText = "Hey! i am h3";
p.color = "red";


body.appendChild(h3);
h3.classList.add( "blue")


let div = document.createElement("div");

body.appendChild(div).classList.add("divClass");

let h1 = document.createElement("h1");
h1.innerText = "I am in div"


let p11 = document.createElement("p");
p11.innerText = "me too";

div.appendChild(h1);
div.appendChild(p11);



