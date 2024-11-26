let numbers = [1,2,3,3];

console.log("normalNumbers", numbers);

let squareNumbers = numbers.map( 
     (el) => {
        return el*el;
     }
);

console.log("squareArray",squareNumbers);

let sumOfSquares = squareNumbers.reduce(
    (sum,el) => {
        return sum = sum + el;
    }
);

console.log(`sum of the numbers in ${squareNumbers} is ${sumOfSquares}`);

// 2

let originalArray = [1,2,3,4,5];

let originalArrayPlusFive = originalArray.map( (el) => {
    return (el + 5) ;
} )

console.log(` the ${originalArray}  using map  the required array is ${originalArrayPlusFive} `);


// 3

let  caseSensitive = [ "a" , "b" , "A" , "D" , "q" ];

let allCapital = caseSensitive.map(  (el) =>  {
    return el.toUpperCase();
}  )

console.log(`the upper cases of the array ${caseSensitive} is ${allCapital}`);


// 4

let arrayToPass = [1,2,3,4];

function doubleAndReturnArgs (arr , ...args){

    let doubledArgs = args.map(  (el) => {
        return (el*2);
    }   );

    // return (arr +"," + doubledArgs);
    return ([...arr , ...doubledArgs]);

}

console.log("doubleArgs with array " , doubleAndReturnArgs(arrayToPass,6,7,8,9,10));

// 5

let object1 = {
    name1 : "sai",
    age1  : 25
}

let object2 = {
    name2 : "raj",
    age2  : 23
}

function mergeObjects (obj1 , obj2) {

    let mergedObject = {...obj1 , ...obj2}; 
    return  mergedObject;


};

console.log("The objects which are merged are :", mergeObjects(object1,object2));