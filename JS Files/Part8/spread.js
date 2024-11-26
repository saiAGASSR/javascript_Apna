// Spread
// Expands  an iterable  into Multiple values 
// like arrays strings

let originalArray = [1,2,3,4,5];
let newArrayUsingSlice = [...originalArray];
console.log("original array ",originalArray);
console.log("onew array using slice array ",newArrayUsingSlice);

newArrayUsingSlice.push(-1);


console.log("original array    After Push method to new one",originalArray);
console.log("onew array using slice array  After Push method to new one ",newArrayUsingSlice);

// since it is not possible when assigning 

let newArrayUsingAssigning = originalArray;

console.log("original array ",originalArray);
console.log("newArrayUsingAssigning ",newArrayUsingAssigning);

newArrayUsingAssigning.push(100);
console.log("original array  AfterPush",originalArray);
console.log("newArrayUsingAssigning AfterPush ",newArrayUsingAssigning);
console.log("onew array using slice array  After Push method to new one ",newArrayUsingSlice);

let even = [2,4,6,8];
let odd  = [1,3,5,7,9];

let oddEven = [ ...odd , ...even ];
let evenOdd = [...even , ...odd];

console.log("Even", even);
console.log("Odd", odd);
console.log("OddEven", oddEven);
console.log("EvenOdd", evenOdd);

let name = "Sai teja";
let nameArrayCharacters = [...name];

console.log("nameArrayCharacters", nameArrayCharacters);

let spreadObject = {
    name : "satisfies",
    age : 25

}

let newSpreadObject = {...spreadObject , weight : 77.45}

console.log("new Spread",newSpreadObject);

let arrayToObject = [1,2,3,4];

let arrayToObjectSpread = {...arrayToObject  }

// here fore keys it will take index of the array
console.log("arrayToObjectSpread",arrayToObjectSpread);
console.log("arrayToObjectSpread", {..."hello"});