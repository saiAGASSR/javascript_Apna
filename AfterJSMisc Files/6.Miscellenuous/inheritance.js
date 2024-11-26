class Teachers {
    constructor(name,age){
        this.name = name,
        this.age  = age
    }

}

class Students {
    constructor(name,age , marks){
        this.name = name,
        this.age  = age,
        this.marks = marks
    }
    talk() {
        console.log(`HI I am ${this.name}`);
    }
}

let s1 = new Students("sai",25,99);
let s2 = new Students("raj",23,100);
let t1 = new Teachers("Anji",48);
let t2 = new Teachers("Sunitha",40);

console.log(s1);
console.log(s1.talk());
console.log(s2);
console.log(s2.talk());
console.log(t1);
console.log(t2);


// Complete Summamryyyyyyyyyyyyyyyyyyyyy
