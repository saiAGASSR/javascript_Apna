let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

// btn.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.color = "blue";
// });

// h1.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.color = "blue";
// });

// h3.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.color = "blue";
// });

// p.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.color = "blue";
// });

// as a programmer we should not write that manay lines  , redundancy is important 

function reduceLines(){
        console.log(this);
    console.log(this.innerText);
    console.dir(this);
    this.style.color = "blue";

};

btn.addEventListener("click",reduceLines);
h1.addEventListener("click",reduceLines);
h3.addEventListener("click",reduceLines);
p.addEventListener("click",reduceLines);

