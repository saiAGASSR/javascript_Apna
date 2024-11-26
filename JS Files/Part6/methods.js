// actions that can be performed on objects 
// when we write a function or define or declare a function inside a function we call them methods 

const calculator = {
    add             :  function addition(a,b) {
                            console.log("a+b is :",(a+b));
                            return  (a+b);
                        },
    subtraction     :  function subtraction(a,b){
                            console.log("a-b is",(a-b));
                            return  (a-b);
                        },
    multiplication  :  function multiplication(a,b){
                            console.log("a*b is",(a*b));
                            return  (a*b);
                        },                        
    division        :  function division(a,b){
                            console.log("a/b is",(a/b));
                            return  (a/b);
                        }
}

// let operation = calculator.add(1,2);
// let operation = calculator.subtraction(1,2);
// let operation = calculator.multiplication(1,2);
let operation = calculator.division(1,2);
console.log("The operation performed between the two operatios is ",operation);