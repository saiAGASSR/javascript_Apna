let btn = document.querySelector("button");

btn.addEventListener("click",function(){   
    
    let h3 = document.querySelector("h3");
    let randomcolor = randomColor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;
    
    });

function randomColor(){
    let randomNumber1 = Math.floor(Math.random()*256) ; 
    let randomNumber2 = Math.floor(Math.random()*256) ; 
    let randomNumber3 = Math.floor(Math.random()*256) ;     

    let color = (`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`);

    return color;
}
