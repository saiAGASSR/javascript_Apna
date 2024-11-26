let form = document.querySelector("form");

form.addEventListener("submit",submitFunction);

function  submitFunction (event){

    event.preventDefault();

    // let inputField = document.querySelector("input");
    // console.log("input field value is ", inputField.value);

    // we can get the value without document.queryselector or document.getElement 
    // which are stored in elements property 
    // those are callection or array ?

    console.log(this.elements);
    console.log(this.elements[0]);
    console.log(this.elements[0].value);
    console.log(this.elements[1]);
    console.log(this.elements[1].value);
    console.log(this.elements[2]);
    console.log(this.elements[2].value);
    


};