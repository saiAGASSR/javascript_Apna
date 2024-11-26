// They are used to add embedded expressions instring
// 
let germanFluidPrice = 20;
let eclarePrice = 1;
let totalPrice = "The price of the pencil is " + (germanFluidPrice + eclarePrice) + "Rupees";
console.log(totalPrice);



// with template Literals 
// backtick    ``
// to add variables inside strings
// ${} 
// variables inside this 

totalPrice = `The total price is ${germanFluidPrice + eclarePrice } Rupees.`
console.log(totalPrice);

