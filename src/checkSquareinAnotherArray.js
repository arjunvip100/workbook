//checking square in another array
//array1=[1,2,3,4]  array2=[1,9,4,16]
//array1[i]*array1[i]===array2[j])
//if j === array2.length-1 and cannot find square in array 2 then it will return false

function checkingSquare(array1,array2){
    for(let i=0;i<array1.length;i++){
        let isSquare=false; //flag by default
        for(let j=0;j<array2.length;j++){
            if(array1[i]*array1[i]===array2[j]){
                isSquare=true;
            }
            if(j === array2.length-1){
                if(!isSquare){
                return false;
            }
            }
        }
    }
    return true;
}
const result= checkingSquare([1,2,3,4],[1,9,4,16]);
console.log(result)


//  Checking square in another array
//array1=[1,2,3,4] array2=[1,9,4,16]
//
//
//

// function checkingSquare(array1,array2){
//     let map1={};
//     let map2={};
//     for(item of array1){
//         map1[item]=(map1[item] || 0 ) + 1;
//     }
//     console.log(`Key`,map1)
//     for(item1 of array2){
//         map2[item1]=(map2[item1] || 0 ) + 1;
//     }
//     console.log(`Key`,map2)
//     for(let key in map1){
//         if(!map2[key*key]){ // keys of map1
//             return false;
//         }
//     if(map1[key] !== map2[key*key]){   //values of map1
//         return false;
//     }
//     }
//     return true;
// }
// const result= checkingSquare([1,2,4,2],[1,4,4,16]);
// console.log(result);


