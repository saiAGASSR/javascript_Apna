// Event bubliing happens when there is nesting in html like ul li         event.stopPropagation();

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");


// Short code


function eventTrigger(event){

    event.stopPropagation();
    console.log(`${this} event was clicked and triggered `);
    

}

div.addEventListener("click",eventTrigger);
ul.addEventListener("click",eventTrigger);

for(list of li){
    list.addEventListener("click",eventTrigger);

}






// Long code 

// div.addEventListener("click", function (){

//     event.stopPropagation();

//     console.log(`${this} was clicked`);
    
// });


// ul.addEventListener("click", function (event){
    
//     event.stopPropagation();
//     console.log(`${this} was clicked`);
    
// });

// for(list of li){
//     list.addEventListener("click", function (event){

//         event.stopPropagation();


//         console.log(`${this} was clicked`);
        
//     });
// }