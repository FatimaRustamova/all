//---6---
let string1 = "Stringler";
let count = 0;

for (let i = 0; i < string1.length; i++) {
    count++
}

console.log(count);

//---7---
let string2 = "Stringler boyuk olsun";
let boyuk = string2.toUpperCase();
console.log(boyuk);

//---8---
let array = ["Fatima", "Amaliya", "Xedice"];
let s = array[0];
for (let i = 1; i < array.length; i++) {
    if(s.length<array[i].length){
        s=array[i];
    }
}

console.log(s);

//---9---
let string3 = "algorithm";
let arr = [];

for (let i = 0; i < string3.length; i++) {
    if(string3[i]=="a" || string3[i]=="e" || string3[i]=="o" || string3[i]=="i" || string3[i]=="u"){
        arr.push(string3[i]);
    }
}

console.log(arr);

//---10---
let string4 = "algortihm";
let str = "";

for (let i = 0; i < string3.length; i++) {
    if(string4[i]!=="a" && string4[i]!=="e" && string4[i]!=="o" && string4[i]!=="i" && string4[i]!=="u"){
        str+=string4[i]
    }
}
console.log(str);

//---11---
