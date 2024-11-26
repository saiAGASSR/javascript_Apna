// For each passes each array element to function and do whatever you want to do with that 


let arr = [ 
    {
        name  : "sai",
        marks : 40,
        age   : 25

    },

    {
        name  : "raj",
        marks : 90,
        age   : 23

    },

    {
        name  : "suma",
        marks : 50,
        age   : 40

    }  ,
    {
        name  : "anji",
        marks : 30,
        age   : 48

    } ]

arr.forEach( function(el) {
    console.log(el.marks);
} )

arr.forEach( function(el) {
    console.log(el);
} )

arr.forEach( function(el) {
    console.log(el.name);
} )

arr.forEach( function(el) {
    console.log(el.age);
} )


let array = [ 1,2,3,4,5,,6,7,8,9 ];

array.forEach( (el) => {
    console.log(el);
}     );

let printing = function (el){
    console.log(el);
}

array.forEach(printing);

// Map returns the new array 

let newArray = array.map( function(el) {
    return el*el;
}  )

console.log("new Array is ", newArray);

let newArray2 = array.map(  el => ( el*el*el)
)

console.log("new Array 2 is ", newArray2);

let filterEvenArray = array.filter( el => ( el % 2 == 0  )  );

console.log("in filter new array even is ",filterEvenArray);

let filterOddArray = array.filter( el => ( el % 2 != 0  )  );

console.log("in filter new array even is ",filterOddArray);

// Every
// Returns true if all the elements in the array satisfies the condition
// its like logical AND


console.log("In every " , array.every( (el) => ( (el % 2) == 0) ) );
console.log("In every " , array.every( (el) => ( (el % 2) != 0) ) );
console.log("In every " , [1,2,3,4,5,6].every( (el) => ( (el % 2) != 0) ) );
console.log("In every " , [1,3,5].every( (el) => ( (el % 2) != 0) ) );

// sum
// Returns true if any of the elements in the array satisfies the condition
// its like logical OR 

console.log("In some " , array.some( (el) => ( (el % 2) == 0) ) );
console.log("In some " , array.some( (el) => ( (el % 2) != 0) ) );
console.log("In some " , [1,2,3,4,5,6].some( (el) => ( (el % 2) != 0) ) );
console.log("In some " , [1,3,5].some( (el) => ( (el % 2) != 0) ) );

