// Linear Collection of strings 
//  50 students 50 variables? 
// single variable array collecrtion of items 
// Linear collection of things 
// instagram followers  and following list is in array 

let student1 = "sai";
let student2 = "raj";
let student3 = "GHS";

let students = ["sai","raj","GHS"] ;
console.log(students);

let nums = [2 , 4, 6 , 8];

console.log(nums)

console.log("should print 2 :", nums[0]) ; 
console.log("should print 4 :", nums[1]) ; 
console.log("should print 6 :", nums[2]) ; 
console.log("should print 8 :", nums[3]) ; 
console.log("should print undefined :", nums[4]) ; 
console.log("should print 4 :", nums.length) ; 
console.log("should print ?   array or numers or object ? :", typeof nums ) ; 

// we can have different combination of arrays in an array 

let  saiTeja = ["Sai teja" ,25 , 3.6 ];

console.log("Sai teja details : " , saiTeja) ; 
console.log("Name is :" , saiTeja[0]);
console.log("First Letter in Name  is :" , saiTeja[0][0]); // Like method chaining 
console.log("length of  Name  is :" , saiTeja[0].length); // Like method chaining 
console.log("Age is :" , saiTeja[1]);
console.log("Package  is :" , saiTeja[2]);

let emptyArray = [];
console.log(emptyArray);
console.log(emptyArray.length);

let emptyArray1 = [""];
console.log(emptyArray1);
console.log(emptyArray1.length);

let emptyArray2 = ["  "];
console.log(emptyArray2);
console.log(emptyArray2.length);

let emptyArray3 = [0];
console.log(emptyArray3);
console.log(emptyArray3.length);

let emptyArray4 = [null];
console.log(emptyArray4);
console.log(emptyArray4.length);

let emptyArray5 = [undefined];
console.log(emptyArray5);
console.log(emptyArray5.length);

// Arrays in JS are mutable .. Okay and strings in JS are immutable .. so we are acceccing any value and changing the  value in arrays .... so the same in string   like here . Please take a look in to it and explain if I am wrong . My statement is strings can be changed in the following way right ?

let immutabebleString = "SaiTeja";
console.log(" before changing string :",immutabebleString);
immutabebleString = immutabebleString.replace("SaiTeja","Teja")
console.log("After changing changed string :",immutabebleString);

let mutableArray = ["orange" , "banana" , "apple"];
console.log(" before changing Array :",mutableArray);


mutableArray[0] = "pineapple";
console.log(" after changing Array :",mutableArray);


mutableArray[10] = "pine";
console.log(" after changing Array :",mutableArray , mutableArray.length);


// Array methods 


// add to end 
// add to start 
// delete from end & returns it 
// delete from starts & returns it 


// push 
// unshift
// pop 
  //shift    



let cars = ["audi" , "benz" , "bmw " , "skoda"];
cars.push("buggati");
console.log("after push ",cars);

cars.unshift("buggati");
console.log(" after unshift ",cars);
cars.pop();
console.log("after pop",cars);
cars.shift();
console.log("afte shift",cars);

let instagramFollowers = ["pranay", "tharun", "koushik", "naresh"];
console.log("your insta followers are :",instagramFollowers);
let blocked = instagramFollowers.shift(); // returns the deleted item
console.log("your blocked followers are :",blocked);
console.log("your insta followers are :",instagramFollowers);


// Practice Questions ....
// 
let months = [ "January" , "July" , "March" , "August"  ] ; 
// final form should be  months = [ "July" , "June" , "March" , "August" ] ;

months.shift();
months.shift();
// months.shift().shift();
months.unshift("June");
months.unshift("July");
console.log("Final form is months = [ July , June , March , August ] ? :" , months)


// Index of methods 
// Include Methods 

let  indexOf = ["sai" , "raj" , "anji" , "sunitha" ] ;
console.log("Should print 0 :", indexOf.indexOf("sai")) ;
console.log("Should print true :", indexOf.includes("sai")) ;

console.log("Should print -1 :", indexOf.indexOf("Sai")) ;
console.log("Should print -false :", indexOf.includes("Sai")) ;

console.log("Should print 1 :", indexOf.indexOf("raj")) ;
console.log("Should print true :", indexOf.includes("raj")) ;

console.log("Should print -1 :", indexOf.indexOf("Raj")) ;
console.log("Should print -false :", indexOf.includes("Raj")) ;

console.log("Should print 2 :", indexOf.indexOf("anji")) ;
console.log("Should print true :", indexOf.includes("anji")) ;

console.log("Should print -1 :", indexOf.indexOf("Anji")) ;
console.log("Should print -false :", indexOf.includes("Anji")) ;

console.log("Should print 3 :", indexOf.indexOf("sunitha")) ;
console.log("Should print true :", indexOf.includes("sunitha")) ;

console.log("Should print -1 :", indexOf.indexOf("Sunitha")) ;
console.log("Should print false :", indexOf.includes("Sunitha")) ;

// Concatinate 
// concatenate or combine or merge two arrays 

let array1 = [1,2,3]
let array2 = [4,5,6]
console.log("should print [123456]", array1.concat(array2));
console.log("should print [321]", array1.reverse());

// slice same as strings 
// they do not change the original array 
// 

// splice method actually changes the original array 
// splice method have three params   or argus    start  index deletecount and addition items 
let spliceMethod = ["splice1" , "splice2" , "splice3" , "splice4" ] ;
spliceMethod.splice(2,2,"splice5");

console.log("should print [splice1 , splice2 , splice5 ]" , spliceMethod);
spliceMethod.splice(0,0,"splice6","splice7","splice8")

// sort method by default ascending order

let sortingArraysNums =  [4,3,5,6,2,1,7,9,8,100];
let sortingArraysString = ["sai", "anji" , "raj" , "suma"];

console.log("ascending nums",sortingArraysNums.sort());
console.log("should print ascending strings ", sortingArraysString.sort());

// method first convert the num to strings characters 

//PQ 

let startArray = ["January" , "july" , "march" , "august"];

startArray.shift();
startArray.shift();
startArray.unshift("june");
startArray.unshift("july");
console.log("final array should be july  june march august " , startArray);


let startArrayUsingSplice = ["January" , "july" , "march" , "august"];
// startArrayUsingSplice.splice(0,1);
// startArrayUsingSplice.splice(1,0,"june");

startArrayUsingSplice.splice(0,2,"july","june");
console.log("final array should be july  june march august " , startArrayUsingSplice);

let programmingLanguage = ["c" , " c++" , "html" , "javascript" , "python" , "java", "c#", "sql"];

console.log(programmingLanguage.reverse().indexOf("javascript"));