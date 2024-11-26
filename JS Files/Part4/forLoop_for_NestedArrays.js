let nestedArray = [["sai", 26 , "BMW" , "Yamaha" , "Villa"] , ["raj", 24 , "Audi" , "HarleyDavidson" , "Appartment"] , ["anji", 48 , "Mercedes" , "RE" , "house"] , ["suma", 40 , "Buggati" , "scooty" , "resort"]];
for(let i = 0 ; i < nestedArray.length ; i++ ){
console.log(i,nestedArray[i] , nestedArray.length);
console.log(`Family Member ${i+1} Details`);

    for(let j = 0 ; j < nestedArray[i].length  ; j++){
        // console.log(` j = ${j}`,nestedArray[i][j]);
        console.log(nestedArray[i][j]);
    }
}
