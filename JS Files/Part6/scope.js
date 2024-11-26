// Scope 

// Scope determines the accessibility of the variables , objects , functions , from different parts of the code 

// Function
// Block
// Lexical




// Functional scope 
// this scope when a variable is declared or defined insinde the function we cannot access it outside the function ...







function sumCalc(a,b) {

    let sum = a+b;
    console.log(sum,"inside function");

};

sumCalc(1,2);

// console.log( sum , " outside function ");


// Block Scope 

// Variables declaring inside the block {} cannot be accessed outside 


{
    let alet = 25;
}

{
    const aconst = 25;
}

{
    var avar = 25;
}

// var is accesible ,,, block property is introduced for let and const in 2015 ... generallly using var is not a good practice 


console.log(avar);
// console.log(alet);
// console.log(aconst);

let age = 25;

if(age >= 18){
    let str = "adult";

}

// console.log(str);

// Lexical Scope 
// a variable defined or declared outside the function can be accessible inside another function after the variable declaration ..

// The opposite is not true 

// Hoisting === > https://www.w3schools.com/js/js_hoisting.asp


// PQ


let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);

    function innerGreet(){
        console.log(greet);
    };
console.log("this should print namaste     lixical");
 innerGreet();

};

console.log("Greet will print hello:",greet);

console.log("here function calling should print namaste ");
changeGreet();
