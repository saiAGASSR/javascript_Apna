// Math.pi
console.log(Math.PI);
console.log(Math.E);

// Absolute 

console.log(Math.abs(123));
console.log(Math.abs(-123));
console.log(Math.abs(-123.5));
console.log(Math.abs(123.5));

// Math.pow(a,b);
Math.pow(1,2);
Math.pow(2,2);
Math.pow(2,3);

// Math.floor   gives the smallest near whole number

console.log("floor");

console.log(Math.floor(12));
console.log(Math.floor(12.33));
console.log(Math.floor(12.3333333333333));
console.log(Math.floor(12.0000000000003));
console.log(Math.floor(12.9));
console.log(Math.floor(-12));
console.log(Math.floor(-12.33));
console.log(Math.floor(-12.3333333333333));
console.log(Math.floor(-12.0000000000003));
console.log(Math.floor(-12.9));


console.log("Ceil");
// Math.ceil   gives the smallest near whole number

console.log(Math.ceil(12));
console.log(Math.ceil(12.33));
console.log(Math.ceil(12.3333333333333));
console.log(Math.ceil(12.0000000000003));
console.log(Math.ceil(12.9));
console.log(Math.ceil(-12));
console.log(Math.ceil(-12.33));
console.log(Math.ceil(-12.3333333333333));
console.log(Math.ceil(-12.0000000000003));
console.log(Math.ceil(-12.9));


// Random

console.log("Random");

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Random Number from range 1 to 10 

let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(`Random Number is ${step4}`);

let allInOneStepRange1to10 = Math.floor((Math.random() * 10)) + 1; 
console.log(`with All in one step the random number is from range 1-10  is ${allInOneStepRange1to10}`);

let allInOneStepRange1to100 = Math.floor(Math.random() * 100) + 1;
console.log(`with All in one step the random number is from range 1-100 is ${allInOneStepRange1to100}`);

let allInOneStepRange1to5 = Math.floor(Math.random() * 5) + 1;
console.log(`with All in one step the random number is from range 1-5 is ${allInOneStepRange1to5}`);

let allInOneStepRange21to25 = Math.floor(Math.random() * 5) + 21;
console.log(`with All in one step the random number is from range 21-25 is ${allInOneStepRange21to25}`);