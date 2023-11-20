
function Ortalama (delfin1, delfin2, delfin3,){
     return delfinOrtalama = (delfin1 + delfin2 + delfin3) /3;
      
}
function Ortalama (koala1, koala2, koala3,){
    return koalaOrtalama = (koala1 + koala2 + koala3) /3;
     
}

function Qalibler(qalib){
    if(delfinOrtalama*2 >= koalaOrtalama){
        console.log("Qalib Delfin komandasidir!");
        return qalib;
    }
    else{
        console.log("Hesab beraberdir.");
    }
}