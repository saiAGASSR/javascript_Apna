let array1 = [1,2,3,4,5,6,7];
let array2 = [1,2,3,4,5,6,7];

let n=3;
let lastArray = array2.splice(-n)

console.log(array1.splice(-n-1),array1);
console.log(lastArray);

let isEmptyString = "";
if(isEmptyString.length == 0 ){
    console.log("the string is empty");
}else{
    console.log("the string is not  empty");

}

let lowerCase = "asdAcaSASnns" ;
let n1 = 3 ;
let condition=lowerCase[n1];
console.log(condition);
let checkingString = lowerCase[n1] ;
console.log(checkingString) ;

if( condition ==  checkingString.toUpperCase()){
    console.log("Its upper case ") ;
}else{
    console.log("Its lower case") ;
}

let spacesString = "   abc  "
console.log(spacesString.trim());

let elementArrayCheck = [1,2,3,"sai"];
let itemPresent = "sai";
if(elementArrayCheck.indexOf(itemPresent)  != -1 ) {
    console.log("the item is present");
}else{
    console.log("the item is not  presetr");
}