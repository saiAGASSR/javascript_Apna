let object = {};
// no order in OL  like in Arrays 

const post = {
    userName : "@SaiTeja",
    content:"singapore dairies",
    likes:50,
    reposts:5,
    tags : ["@raj", "@sume"]

};
console.log(post);
let acceccingValue;

//  to access the values in object literals  the format is     objectName["key"] or objectName.key

let acceccingValue1  = post["userName"];
let acceccingValue2  = post["content"];
let acceccingValue3  = post["likes"];
let acceccingValue4  = post["reposts"];
let acceccingValue5  = post["tags"];
let acceccingValue6  = post.userName;
let acceccingValue7  = post.content;
let acceccingValue8  = post.likes;
let acceccingValue9  = post.reposts;
let acceccingValue10 = post.tags;


let accessArray = [acceccingValue1,acceccingValue2,acceccingValue3,acceccingValue4,acceccingValue5,acceccingValue6,acceccingValue7,acceccingValue8,acceccingValue9,acceccingValue10];

for(let i = 0 ; i < accessArray.length ; i++  ){
 
    console.log(`${i} value is ${accessArray[i]}`);
}

let array1 = [1,2,3];
const arrayConst = [1,2];
let anotherArray1 = [1,2,3,4,5];
let anotherArray2 = [1,2,3,4,5];
console.log(array1 = anotherArray1);
// console.log(arrayConst = anotherArray2);

//  JS automaticallu convert the keys to string 
// like
console.log("Before Exception");
let autoConversionToString = {
    string : "sasd",
    null : "null key",
    undefined : "undefined key",
    const : "const key"

};
console.log("After Exception");



// updating values just like variables but accessing it ..

let updatingObject  = {
     name : "sai",
     age : 25,
     city : "Hyderabad"

}

console.log("Before updating", updatingObject);

updatingObject.city = "Mumbai";
console.log("After updating", updatingObject);

// we can create new key like this 

updatingObject.gender = "Male";
console.log("After updating", updatingObject);

// we can change the value from number to string just like variables

updatingObject.age = "twentyFive";
console.log("After updating", updatingObject);

// Deleting

delete updatingObject.age;
console.log("After deleting", updatingObject);

// Nested object 

let nestedObjectCompanyInfo = {
    sai1:
            {       role   :  "developer",
                    salary : 3,  
            },
    sai2:   {
                    role   : "Devops",
                    salary : 6
            },

    sai3:   {
                    role : "CloudEngineer",
                    salary : 12
            }
}

    console.log(nestedObjectCompanyInfo.sai1);
    

    console.log(nestedObjectCompanyInfo.sai2);
    console.log(nestedObjectCompanyInfo.sai3);

    console.log(nestedObjectCompanyInfo.sai1.role);
    console.log(nestedObjectCompanyInfo.sai1.salary);
    console.log(nestedObjectCompanyInfo.sai1.role ="qa");
    console.log(nestedObjectCompanyInfo.sai1);



// Array of objects 
const arrayofObjectsEmployees = 
                                [
                                    {
                                        name  : "sai1",
                                        role  : "developer",
                                        salary: 3
                                    },
                                    {   name  : "sai2",
                                        role  : "devOps",
                                        salary: 6
                                    },
                                    {   name  : "sai3",
                                        role  : "CloudEngineer",
                                        salary: 12
                                    },

                                ] ;

console.log(arrayofObjectsEmployees[0]);
console.log(arrayofObjectsEmployees[1]);
console.log(arrayofObjectsEmployees[2]);

console.log(arrayofObjectsEmployees[0].name);
console.log(arrayofObjectsEmployees[0].role);
console.log(arrayofObjectsEmployees[0].salary);

console.log(arrayofObjectsEmployees[0].name = "saiiii");

console.log(arrayofObjectsEmployees[0]);




