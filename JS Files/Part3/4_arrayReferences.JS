// reference in programming refers to address in memory 
// 

console.log('sai' == 'sai');
console.log('sai' === 'sai');
console.log([1]  ===  [1]);
console.log([1] == [1]);
// This condition will always return 'false' since JavaScript compares objects by reference, not value.

let arrayOriginal = [1,2,3];
let arrayCopy = arrayOriginal;
console.log(arrayCopy == arrayOriginal);
console.log(arrayCopy === arrayOriginal);

arrayCopy.push("4");
console.log(arrayOriginal);


// Const arrays

const arrayConst  = [1,2,3,4];
arrayConst.push(5);
console.log(arrayConst);


// cannnot create a new array in const array;
// arrayConst = arrayOriginal;
// console.log(arrayConst = arrayOriginal);

//PQ 
// let ticTackToe = [['X',"","O"],["","X",""],["O","","X"]];
let ticTackToe = [['X',null,"O"],[null,"X",null],["O",null,"X"]];
console.log(ticTackToe);