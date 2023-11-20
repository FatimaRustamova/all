
// const termometr= function(F){
//     let c = (F-32)*5/9;
//     return c;
// }

// console.log(termometr(40));

// const giris = function(suret,zaman){
//     let mesafe = suret * zaman;
//     return mesafe;
// }
// console.log (giris(36,20));

// const kredit = function(emek, mebleg, muddet){
//     if(mebleg <= emek *10){
//         if(muddet<=36){
//             if(muddet>0 || muddet<12){
//                 return emek = mebleg * 0.13;
//             }
//             else if(muddet>12 || muddet<24){
//                 return emek = mebleg * 0.15;
//             }
//             else{
//                 return emek = mebleg * 0.17;
//             }
//         }
//         else{
//             return "Size bu sertlerde kredit dusmur!"
//         }
//     }
//     else{
//         return "Size bu sertlerde kredit dusmur!"
//     }
// }

// console.log(kredit(300, 5000, 10));

const radar = function(suretheddi, faktikisuret){
    let asma=faktikisuret - suretheddi;
    let endirim;

    if(asma>0 || asma<=10){
        return "cerime yoxdur"
    }
    else if(asma>10 || asma<=30){
        return  20;
    }
    else if(asma>30 || asma<=50){
        return "cerime 50 azndir"
    }
    else if(asma>50){
        return "cerime 250 azndir"
    }
}

console.log(radar())