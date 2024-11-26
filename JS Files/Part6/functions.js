// For any programming language a function is a standing piller ....++++++++++++
// helps in reducing the repeatation of code .. 

function printMyName(){
    console.log("Sai teja");
};

printMyName();

// PQ

function poem(){
    console.log("the poem is printing");
};

poem();

// Dice rolling 

function  diceRoll(){

    let diceRoll = Math.floor((Math.random() * 6))  + 1;
    console.log(` The value of the dice is ${diceRoll}`);


}

diceRoll();

// Functions without arguments
function withoutArguments(){
    console.log("Sai Teja");
};

withoutArguments();

// Functions with arguments 
// any argument in function ,   when any value passing to the function , the value will be stored in the function and operations will be performed with that argument ;

function withArguments(name){
    console.log(name);
};


withArguments("argumentName");
withArguments("Anji");
withArguments("Sunitha");
withArguments("Sai");
withArguments("Raju");


function withArguments2(name,age){
   console.log(`${name}'s age is ${age}`);
};


withArguments2("Anji",48);
withArguments2("Sunitha",40);
withArguments2("Sai",25);
withArguments2("Raju",23);

console.log("Reverse? ");

withArguments2(48,"Anji");
withArguments2(40,"Sunitha");
withArguments2(25,"Sai");
withArguments2(23,"Raju");


// PQ

function  Avg3Nums(a  , b , c){
    console.log(`The average is ${(a+b+c)/3}`);
};

Avg3Nums(1,2,3);
Avg3Nums(1,1,1);
Avg3Nums(2,2,2);
Avg3Nums(3,3,3);

function multiplicationTable(n){
    for(let i = 1 ; i<= 10 ; i++){
        console.log(` ${n} * ${i} = ${(n*i)} `);

    };
};

multiplicationTable(Math.floor((Math.random() * 10))  + 1);

function multiplicationTable1(n){
    for(i=0;i<=n*10;i+=n){
        console.log(i);
    }
}

// multiplicationTable1(2);
multiplicationTable1(Math.floor((Math.random() * 10))  + 1);

// Return 
// If we want to return more then we can return an object which contains all info values

function sum (a,b){
    return a+b;
};

let s = sum(sum(10,2),3);
console.log(s);

// pq


let sum111 =  0 ;
function  sumOfNumbers(n){

    for (let i = 0; i <= n; i++) {
        
        sum111 = sum111 + i ;
        console.log(`for iteration upto ${i} is ${sum111}`);
        
    }
    return sum111;

}

// let n11 =  2;
let n11 =  Math.floor((Math.random() * 10))  + 1;

// let summ = console.log(); 
let summ = console.log(sumOfNumbers(n11)); 
console.log(`The sum of numbers from 1 to ${n11} is ${sum111}`);

// PQ2 my way

let initialString = "";

let stringsArray = ["sai " , "is " , "going " , "to ", "Goa" ];



function concatinationStringsInArray(stringsArray){

    for(let i = 0; i < stringsArray.length; i++ ){
        initialString = initialString.concat(stringsArray[i]);
        // initialString = initialString + (stringsArray[i]);
        console.log(`for Iteration ${i} the concatination is ${initialString}`);
    };

    return initialString;

     
};

let finalString = concatinationStringsInArray(stringsArray);
console.log(finalString);

// PQ2 shradda  way
