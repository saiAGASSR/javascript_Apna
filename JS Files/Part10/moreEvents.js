// Here we will discuss regarding two imp events    change and input   those are similar but have 1 difference 

// change is triggered between initial and final value   adn clicked outside the element area ..
// input is triggered  if for every  keyboard event is occured ...

let form = document.querySelector("form");

form.addEventListener("submit",function(event){

    event.preventDefault();
    
});

let inputField = document.querySelector("input");

inputField.addEventListener("change",changeEvent);
inputField.addEventListener("input",inputEvent);

function changeEvent () {

    console.log("Change Event value :", this.value);
    
}

function inputEvent () {
    
    console.log("Input Event value :", this.value);
    
}


// non character change like arrows and cntrl shift doesnot trigger input and change event 

