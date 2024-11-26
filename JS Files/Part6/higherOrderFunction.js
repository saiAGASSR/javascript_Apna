// A function that does one or bothg :
// 1 .. takes one or more functions  as arguments 
// 2 .. returns a function

// 1 .. takes one or more functions as arguments ..
function  higherOrderFunction( func ,count ){
        for(let i = 0; i <= count ; i++){
            greet();
            console.log(`Hi ${i} iteration   https://discord.com/channels/787647674857685022/1266306659106558005  ${greet()}`);
        }
};

let greet = function(){
    console.log("Hi greetings:");
}

higherOrderFunction(greet,5);

// Higher order function with function return 


function returnFunctionOddorEven(request){
    if(request == "even"){
        return function(){
            console.log("even request");
        };
    }else if(request == "odd"){
        return function(){
            console.log("odd request");
        };

    } else {
        return function (){
            console.log("wrong request");
        };
    }
};

let value =  returnFunctionOddorEven("odd");
console.log("the value is ",value());
