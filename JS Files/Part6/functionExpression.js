// this way of defining the functions and assigning to a variable    , it does not have any name 
// nameless function        those functions which doesnot have name but stores the value in an variable ... 

let name = "sai";
let nameFunctionExpression = function(){
    console.log("saiwithFunction");
    return "saiwithfunction";
}
let sum =  function(a , b){
    console.log("sum inside",a+b);
    return a+b;
};

console.log("sai:", name);
console.log("outside",nameFunctionExpression());
console.log("sum outside",sum(1,2));


