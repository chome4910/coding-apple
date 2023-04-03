
// function vat(a){
//     return a * 0.1
// }

// function 함수(a,b){
//     let minute = a * 60 * 1000
//     let second = b * 1000
//     return minute+second
// }

// console.log(함수(1,30));
// console.log(함수(2,10));

// function 함수1(a,b){
//     let result = (a*60 + b) * 1000
// }

// console.log(함수1(1,30));
// console.log(함수1(2,10));



function 함수2(a,b){
    if(b == true ){
        let 할인가 = a*0.9
        return 할인가
    }else{
        let 할인가 = a*0.9  
        return 할인가
    }
}

function 함수3(a,b){
    let result = a * 0.9;
    if ( b == true){
        result = result-1.5;
    }
    return result
}

console.log(함수3(70,false))
console.log(함수3(10,true))

console.log(함수2(70,false))
console.log(함수2(10,true))