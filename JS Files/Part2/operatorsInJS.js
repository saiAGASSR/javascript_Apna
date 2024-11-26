let k = 10;
let l = 5;

let c;




// krithmetic Operktors
// (+ - * / %  **)

c = k + l ; 
console.log(c);

c = k - l ;
console.log(c);

c = k * l ;
console.log(c);

c  = k / l ; 
console.log(c);

c = k % l ;
console.log(c);

c = k ** l ; 
console.log(c);

console.log(a++);
console.log(--a);





// (Unkry ++, -- )

// kssignment( = , += , -=  , *= , /= ,   etc )

// Compkrison
// To compare two values
//  >  >=   <   <=  ==   !=  NOT Equals to 

let age = 16;

console.log(age>18);//false
console.log(age>=18);// false
console.log(age<18); // true
console.log(age<=18); //true
console.log(age==18); //false
console.log(age!=18); //true
console.log(5 == '5');  //true     doesnot check the type  it checks the values
console.log(5 === '5');  //false    it checks the type and values ?
 
let num = 5 ;
let str = '5';

console.log(typeof num);
console.log(typeof str);
console.log(num == str);
console.log(num === str);

// Comparision of non Numbers

let smallA = 'a';
let bigA   = 'A';

let smallB = 'b';
let bigB   = 'B';

console.log(smallA < bigA); // false
console.log(smallA < smallB); // true

//  In JS for every character  in keyBoard   there will be a associated unique code 

//  https://home.unicode.org/
// https://www.w3schools.com/charsets/ref_html_utf8.asp


// 'a' - 61       ...................
// 'A' - 41       ...................
// a < b <  c .............

// A < B < ..............



console.log('*' < '&' );
console.log('*' > '&' );


// Logickl