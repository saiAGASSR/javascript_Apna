// reduce
// reduces the array to single value
let  reduceArray = [1,2,3,4];
let result = reduceArray.reduce( (acc , el) => ( acc + el )  );
console.log(result);



let maxArray = [1,2,24,5,63,7,8];

let maximum =  maxArray.reduce( (res , el) => {
    if( res > el){
        return res;
    } else if (res < el){
        return res = el;
    }

} );

let maximumValue = maximum;
console.log("Maximum value in an array is ", maximumValue ); 


// 

let multiplesOfTen = [ 10, 20 , 30 , 40 ];
 
let  isMultiple = multiplesOfTen.every((el) => (  (el % 10) === 0  )

     );

console.log("The array is multiple of 10 ? " , isMultiple);

// min number

let minArray = [-1,2,3,3 ,9];

let minValue =  minArray.reduce( (min , el) => {
    if(min < el){
        return min;
    }else{
        return el;
    }
}   )

console.log("The minimum value in the given array is " , minValue);

function minimumFinder(num) {
    let minValue =  num.reduce( (min , el) => {
        if(min < el){
            return min;
        }else{
            return el;
        }
    }   );

    return minValue;
};
