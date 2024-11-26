// Rest is opposite of spread 
// syntax is same but if used in functional arguments the rest comes to play and convert it into array 

function argumentsFunctionRest(...arr){
    console.log(arguments);
};

console.log("calling argumentsFunctionRest",argumentsFunctionRest(1,2,3,4,5));

// Here arguments is not an array so to convert it into array rest is used and should be same name as arr

function argsFunctionRest(...args){
    console.log(args);
};

console.log("calling argsFunctionRest", argsFunctionRest(1,2,3,4,5));

// we can perform any operations here 

function sum(...args){
    let sumValue = args.reduce(
        (sum , n) => {
            sum = sum + n;
            return sum;
        }
    ) 

    return sumValue;
    
};

console.log("The sum of values is ",sum(1,2,3,4));



