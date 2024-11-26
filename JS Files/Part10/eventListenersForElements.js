let para = document.querySelector("p");

para.addEventListener("click",change);
para.addEventListener("mouseenter",change1);

function change(){
    console.log("para was clicked");    
    
    para.style.color = "blue";
};

function change1(){
    console.log("para was hoveres");    
    
    para.style.color = "green";
}
