function defaultParameter(a,b=4){
    return a+b;

};

console.log("return value sum in defaultparam",defaultParameter(2));
console.log("return value sum in defaultparam",defaultParameter(2,2));
console.log("return value sum in defaultparam",defaultParameter(5));

