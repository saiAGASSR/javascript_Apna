// 1

let squareFunc = n => (
    n*n
);

console.log("square of the number is single argument single return ", squareFunc(9));

// 
let id = setInterval(
    () => {
        console.log("Hello World");
    },2000);

setInterval( () => {

    clearInterval(id);
    console.log("stopped execution after 10 sec");
} , 10000 )