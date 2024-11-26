// Dice Roll
let diceRoll = Math.floor((Math.random() * 6))  + 1
console.log(`${diceRoll} is the number on dice `);

// Car

const car = {
    name  : "BMW ",
    model : 720,
    color : "grey"

};

console.log(car);

// Person

const person = {
    name : "Sai",
    age  : 25,
    city : "Hyderabad" 
};

console.log("Before updating",person);

person.city = "New York";
person.country = "United States";
console.log("After updating",person);
