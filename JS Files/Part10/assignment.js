// 1

let div = document.querySelector("div");
let inputField = document.querySelector("input");
let body = document.querySelector("body");

let heading = document.querySelector("h2");
let input = document.querySelector("input");

// let value = input.value;

let regex = /^[a-zA-Z]+$/;
let regex1 = /^[a-zA-Z]+$/;


input.addEventListener("input",userNameHeading);

function userNameHeading (event){
    
    console.log("value is",event.target.value);
    let validInput = regex1.test(event.target.value)

    if (validInput){

        console.log("inside",event.target.value);
        heading.innerText = input.value;
    }  
}


let button = document.querySelector("button");


button.addEventListener("click",buttonClicked);

function buttonClicked (){  

    button.style.color = "green"

}

// div.addEventListener("mouseout",miscellaneousFunction);
// inputField.addEventListener("keypress",miscellaneousFunction);

div.addEventListener("scroll",miscellaneousFunction);

// div.addEventListener("load",miscellaneousFunction);



function miscellaneousFunction(){

    console.log("scrolled");
    

    div.style.backgroundColor = "red";
    inputField.value = "saasd"
    setTimeout(function (){
        div.style.backgroundColor = "white";
        inputField.style.backgroundColor = "green";
        inputField.style.color = "white";
    } , 2000)

   
}
