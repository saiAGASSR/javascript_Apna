//Loops In JS 
// used to iterate a piece of code
//  iterate = repeat
// for(initialization , condition , updation    ){
//  code to execute               }

for ( let i = 0 ;  i <= 5 ; i++){
    console.log(i);
};

for ( let i = 10 ;  i >= 0 ; i--){
    console.log(i);
};

// console.log(i);


// Dry Run 
// Paper Pen solving

// Printing Odd Numbers from 1 to 15

for (let i = 0 ;  i <=15 ; i += 2  ){
    console.log(i);
};

for (let i = 0 ;  i <=16 ; i += 2  ){
    console.log(i);
};

// Multiplication table of 5
console.log("5 table");

for( i=5 ; i<=50 ; i = i + 5 ){
    console.log(i)
}

console.log("User specific table ");

let userNum =  prompt("Enter any multiplication table you want");

console.log("Before parse int " , userNum , typeof userNum);

userNum = parseInt(userNum) ;

console.log("After parse int " , userNum , typeof userNum);

console.log("user entered number is :",userNum);
for(let i = userNum ; i <= userNum * 10 ; i = i + userNum ){
    console.log(i);
}