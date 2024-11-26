let occuranceArray = [1,2,3,4,5,6,2,3];
console.log("before deleting" , occuranceArray);
let num = 3;
for(let i = 0 ; i < occuranceArray.length ; i++ ){
    if(occuranceArray[i] === num)
        {
            occuranceArray.splice(i,1);
        }
}
console.log("After deleting" , occuranceArray);

// Number of digits logic

let number = 123456789;

console.log("hi",number);
let count = 0;

let copy = number;

while(copy > 0){
    count++;
    console.log(count);
    copy = Math.floor(copy/10);
    console.log(copy);

}

console.log("The total number of digits are ",count);

// Sum logic

let addingNumber = 1235;

let sum = 0;
console.log(sum);

let sumCopy = addingNumber;

while(sumCopy>0){
    sum = sum + (sumCopy % 10);
    sumCopy = Math.floor(sumCopy/10);
}

// for(char of number){
//     sum = sum + char;
// }

// for(let j = 0 ; j < number.length ; j++ ){

//     console.log(j);

//     sum = sum + number[j];

// }

console.log("after removing decimal part", (Math.floor(123.5)));
console.log("after removing decimal part", (Math.floor(123.54)));
console.log("after removing decimal part", (Math.floor(123.543)));
console.log("after removing decimal part", (Math.floor(123.5432)));

console.log("The sum of the digits are :",sum);

let factorialNumber = 10;
let factorial = 1 ;
if(factorialNumber === 0){
    factorial === 1 ;
}else{
    for(let f = factorialNumber ; f >= 1; f-- ){
        factorial = f * factorial;
    }
}

// console.log("the factorial of number is " , factorial );
console.log(`the factorial of ${factorialNumber}  is ${factorial}` );



let largeArray = [100,2,9,4,5];
let largestNumber = 0;
for(let l = 0 ; l < largeArray.length ; l++ ){
    if( largeArray[l] > largestNumber ){
        largestNumber = largeArray[l]
    }
}

console.log(`largest number in the given array ${largeArray} is ${largestNumber}`);

