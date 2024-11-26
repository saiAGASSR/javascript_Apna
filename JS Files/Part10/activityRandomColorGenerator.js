let button = document.querySelector("button");
let heading = document.querySelector("h3");
let div = document.querySelector("div");





button.addEventListener("click",randomColorGeneratorFunction);





function randomColorGeneratorFunction(){

    let randomNumber1 = Math.floor(Math.random()*256) ; 
    let randomNumber2 = Math.floor(Math.random()*256) ; 
    let randomNumber3 = Math.floor(Math.random()*256) ;     

    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);

    // div.classList.add("backgroundColor");
    let color = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;

    heading.innerHTML = color;

    div.style.backgroundColor = color;






}