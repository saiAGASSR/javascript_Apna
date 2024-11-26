// 1
let arrayAverage = (arr) => {
    let avg = 0;
    for(let i=0; i < arr.length ; i++){
        avg = (avg + arr[i])/2;
        console.log(`for each iteration ${i} for the array element ${arr[i]} the avg is ${avg}`);
    }
    return avg;
}
let arrayToPass = [2,2];

let avgArray = arrayAverage(arrayToPass)

console.log(` the average of the given array ${arrayToPass} is ${avgArray}`);

// 1
let arrayAverage1 = (arr) => {
    let total = 0;
    for(let i=0; i < arr.length ; i++){
        console.log("the length of the array is:",arr.length);

        total = total + arr[i];
        console.log(` 222 for each iteration ${i} for the array element ${arr[i]} the avg is ${total}`);
    }

    totalAVG = total/arr.length

    return totalAVG;
}
let arrayToPass1 = [2,2];

let avgArray1 = arrayAverage1(arrayToPass1)

console.log(`  2222  the average of the given  22 array ${arrayToPass1} is ${avgArray1}`);



// 2Q

let even = n => {

    if(n % 2 == 0 ){
        return "even";
    }else {
        return "odd";
    }
}

let evenorodd = even(10);
console.log(" the number passed is ", evenorodd);

// 3

const object = {
    message : 'hello world',

    logMessage () {
        console.log("should print hello world ?:", this.message);
    }
};

setTimeout(object.logMessage ,1000 );

// 4

let length1 = 4;

function callBack(){
    console.log("prints  4:", this.length1);
};

const objecta = {
    length1 : 5,
    method(callBack){
        callBack();
    },

};

console.log("prints 5 :", objecta.method(callBack , 1 , 2));