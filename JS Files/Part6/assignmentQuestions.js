let array = [1,2,3,4,5,6,7,8,9];

let number = 5;

function  greaterNumbersInArray(array,n){

     let newArray = [];
     

     for(i = 0 ; i <array.length ; i++   )
        if( n < array[i]){


            newArray.push(array[i])
            console.log(` after ${i} iteration the updated array is ${newArray}`);
            
        }

    return newArray;
}

let theNewArrayWithLargeNumbersThanTheNumber = greaterNumbersInArray(array,number);
console.log(theNewArrayWithLargeNumbersThanTheNumber);




// 



// PQ2 

let originalString = "aaaabbbbcccdefffggghhhiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjkkkkkkkkkk";
let uniqueString = "";

console.log("hi before function");

function uniqueExtractor(originalStr,uniStr){
    console.log("in function before for loop");
    for(let i=0 ; i < originalStr.length ;  i++  ){

        console.log("in function  for i    loop",i);


       

            if(uniStr.indexOf(originalStr[i]) == -1){
                // uniStr.concat(originalStr[i]);
                uniStr = uniStr + originalStr[i]
                console.log(` for ${i}  iteration the concatinated string is ${uniStr} `);
            }
        

    }

    return uniStr;
}

let unique = uniqueExtractor(originalString,uniqueString);
console.log("Final unique string is :",unique);


// PQ3

let listOfCities = ["Australia","Germany","United States of America"];

function largestCityFinder(arr){
    let largestCity = "";
    for( let i = 0; i < arr.length  ; i++){
        if ( arr[i].length > largestCity.length ){
            largestCity = arr[i];
            console.log(` for ${i}  iteration the updated largest city  is ${largestCity} `);

        };
    };
    return largestCity;
};

let largest = largestCityFinder(listOfCities);
console.log("The largest city is :",largest);

// No of vowels in a string 

let stringToCheck = "abcdefeee";

function vowelsCheck(str){
    let  count = 0;
    let vowels = "aeiou"

    for (let i = 0; i< str.length; i++){

        // if((str[i] === "a" || "e" || "i" || "o" || "u")) {
        //     count++;
        //     console.log(` for iteration ${i}  for string letter ${str[i]} the count is ${count}`);
        // }
        if((vowels.includes(str[i]))) {
            count++;
            console.log(` for iteration ${i}  for string letter ${str[i]} the count is ${count}`);
        }
    }
    return count;
}

let theCount = vowelsCheck(stringToCheck);
console.log("the total number of vowels are ", theCount);


// PQ5

let min = 3;
let max = 5;

function randomNumberGenerator(start,end){

    let randomNumber =  (Math.floor(Math.random() * ((end - start)+1)) + start);
    return randomNumber;

};

let randomeValue = randomNumberGenerator(min,max);

console.log("The random number generated is :",randomeValue);


