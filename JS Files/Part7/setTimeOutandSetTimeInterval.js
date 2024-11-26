// Set TimeOut will take 2 arguments    one is function and onother is is the time .  
// program execution will continue except for the function which is passed in the setTimeout ,
// The function which is sent as parameter or argument to another function  is called callback finction .
setTimeout( () => {
     console.log("in SetTimeout"); 
    }  , 1000)

// It will execute only once 

console.log("Hiii");

setTimeout(    () => {
    console.log("ASR");
} ,4000)

console.log("Welcome to ");

// Set Interval 
// this will execute many times  during that interval.

// 

 let id1 = setInterval( () => { console.log("Hiiiiiiiiii   id1 ");} , 2000


)

console.log(id1,"id 1 is 1");

let id2 = setInterval( () => { console.log("Hi id2"); } ,1000);

console.log(id2,"id 2 is 1");


setTimeout( () => { 
    clearInterval(id1); 
    console.log("this id1 is stopped after 10 seconts ");
} ,10000)

setTimeout( () => { 
    clearInterval(id2);
    console.log("this id2 is stopped after 10 seconts ");
} ,10000)