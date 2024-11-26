// StringMethods
// Methods - actions that can be performed on objects 


// Format 
//  stringName.method();

// Trim Method
//  White space  - extraspace 
// Trim method trims whitespaces from both ends of the string & returns a new one 

let str = "     Hel  lo    ";
console.log(` Before Trimming print the value of str : ...${str}...  Length of the string is  ${str.length}`);


let  trimmedStr =  str.trim();

console.log(` After Trimming print the value of str : ...${trimmedStr}...  Length of the string is ${trimmedStr.length} `);

let immutablestring = "    abc      ";
console.log("The string:", immutablestring);

console.log(" the trim method ", immutablestring.trim() ,"length is :" ,immutablestring.trim().length );

console.log("again logging the string " , immutablestring , immutablestring.length);

immutablestring = immutablestring.trim();

console.log("Updated ? " , immutablestring , "length is " , immutablestring.length)

// Strings are immutable in JS
// No changes can be made to strings 
// whenever we do try to make a change , a new string is created , old one remains same 


// toUpperCase Method 

let  upperLowerCase = "Random String";


console.log(upperLowerCase.toLowerCase());
console.log(upperLowerCase.toUpperCase());


// StringMethods with Arguments 

// Argument is  a some value  that we pass to the method .

// Format 



// stringName.method(arg)



// indexOf

// Returns the first index of occurence of some value in string . or gives -1 if not found .

let indexString = "ILoveCoding";

console.log(indexString.indexOf("Love"));
console.log(indexString.indexOf("o"));
console.log(indexString.indexOf("j"));



// Method Chaining 
// Using one method  after another . order of execution will be from left to right;

let methodChainingstring = "     ahello   ";
console.log("initially", methodChainingstring)
let newMethodChainingstring  = methodChainingstring.trim();

console.log("After trimming , " , newMethodChainingstring);

newMethodChainingstring = newMethodChainingstring.toUpperCase();

console.log("after converting to upper" , newMethodChainingstring);

let   allInOnemethodChainingstring = methodChainingstring.trim().toLocaleUpperCase();

console.log("allinone",allInOnemethodChainingstring);

// Slice   
// Returns a part of the original string  as a new string 


// Three methods 
// passing arguments index only start index and last intex 
// passing only one argument which is startIndex which asumes the end index is up to the end of the string 
// passing negative values = length of the string - the negative number 

let sliceSting = "ILoveYou";

console.log("Should print LoveYou: " , sliceSting.slice(1)); 
console.log("Should print LoveYou: " , sliceSting.slice(1,sliceSting.length)); 
console.log("Should print Love: " , sliceSting.slice(1,5)); 
console.log("Should print You: " , sliceSting.slice(5)); 
console.log("Should print u: " , sliceSting.slice(-1)); 

// Replace and Repeat Method 

// Replace 
// Searches a value in the string & returns a new string with the value replaced ..


console.log("Should print ILoveMe: " ,sliceSting.replace("You","me")); 

// used in regular expressions 

// Repeat Method 
// Returns a string  with number of copies  of a string ;
console.log("Should print ILoveYouILoveYou: " , sliceSting.repeat(2)); 


