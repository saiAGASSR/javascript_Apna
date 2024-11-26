const student = {
    name            : "sai",
    age             :  25,
    marks           :  40,
    normalFunction  : function() {
        console.log("this keyword in normal function is :",this);
        console.log("this .name in normal function::",this.name);
     },
    arrorFunction   : () => {
        console.log("this keyword in arrow function is :",this);
        console.log("this .name in arrow function::",this.age);        
    },
    getInfo1        : function () {
        setTimeout ( () => {
            console.log("this keyword in arrow function is setInterval   :",this);
            console.log("this .name in arrow function setInterval ::",this.age);     
        } ,5000)

    },
    getInfo2        : function () {
        setTimeout ( function () {
            console.log("this keyword in normal function is setInterval:",this);
            console.log("this .name in normal function setInterval ::",this.name);    
        } ,5000)
    } 

}

console.log(student.normalFunction());
console.log(student.arrorFunction());
console.log(student.getInfo1());
console.log(student.getInfo2());