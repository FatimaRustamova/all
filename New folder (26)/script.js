//---1---
let array = [1,2,3,1,4];
let MyFunc = function(array){
    for (let i = 0; i <= array.length; i++) {
        if(array[i] == i){
            return array[i];
        }
        else{
            return false;
        }
    }
}
console.log(MyFunc(array));

//---2---
let myArray = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

for (let i = 0; i <= myArray.length; i++) {
    if(i%2==1){
        newArray.push(myArray[i]);
    }
}

console.log(newArray);

//---3---
let array2 = [1,2,3,4,5,6,7];
let number2 = 5;
say = 0;

let myFunc = function(array2,number2){
    for (let i = 0; i < array2.length; i++) {
        if(array2[i]<number2){
            say++;          
        }     
    }
    return say;
}

console.log(myFunc(array2,number2));

