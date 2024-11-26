// For of loop is recently developed 
// to access every item of arrays or string 
// and do something to it 

let  fruits = ["banana","appple" , "orange" , "pineapple" ];

let  myName = "Sai Teja";
let fruit;
for(fruit of fruits){

    console.log(fruit);

}

console.log("char pre defined ?");
for(char of myName){

    console.log(char);

}

let eachString ;

console.log("char pre defined Lets find out ---?");


for(eachString of myName){

    console.log(eachString) ;

}

console.log("char pre defined Lets find out ---? Yessssssssss");


for(fruit of fruits){
    
    console.log(fruit);

    for(char of fruit ){
        console.log(char);
    }

}
