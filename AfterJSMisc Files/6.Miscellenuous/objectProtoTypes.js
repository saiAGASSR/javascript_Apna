// in JS arrays are also objects 
// Array prototypes 
// String Prototypes

function personMaker(name,age){
    const person = {
        names: name ,
        age : age ,
        talk(){
            // console.log(`Hi my name is ${names}`);
            console.log(`Hi my name is ${person.names}`);
            console.log(`Hi my name is ${this.names}`);
        }
    }
    return person;
};

console.log(personMaker("sai",25).talk());
console.log(personMaker("saiRaj",25).talk());




