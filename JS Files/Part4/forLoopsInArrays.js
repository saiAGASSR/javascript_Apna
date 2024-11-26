let cars = [ "audi" , "bmw" , "mercedes" , "tata" ];

for(i=0; i< cars.length ; i++){
    console.log(i, cars[i]);
}

// Odd values in array 
console.log("Odd values in array");


for(i=1; i< cars.length ; i +=2){
    console.log(i, cars[i]);
}

// Even values in array 
console.log("Even values in array");


for(i=0; i< cars.length ; i += 2){
    console.log(i, cars[i]);
}

// Reverse

console.log("Reverse");


for(i=cars.length-1; i >= 0 ; i--){
    console.log(i, cars[i]);
}
