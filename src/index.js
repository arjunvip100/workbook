





//Another solution





//count largest sum of consecutive digits



//Find the index of the number(7) in given array
//[1,2,3,4,5,4,6,7,8,9,10,11,12,13,14,15]
//min=0    max=array.length-1     midIndex=(min+max)/2      (num) is number to find the index of
//if(array[midIndex] < num) then min=midIndex+1;
//else if(array[midIndex] > num)   then  max=midIndex-1;
//else return -1 if there is no number in array


// function searchAlgo(array,num){
//     let min=0;
//     let max=array.length-1;
//     while(min<=max){
//         let midIndex=Math.floor((min+max)/2);
//         if(array[midIndex] < num){
//             min=midIndex+1;
//             }else if(array[midIndex] > num){
//                 max=midIndex-1;
//         }else{
//             return midIndex;
//         }
//     }
//     return -1;
// }
// const result=searchAlgo([1,2,3,4,5,4,6,7,8,9,10,11,12,13,14,15],7);
// console.log(result)

//checking square in another array
//array1=[1,2,3,4]  array2=[1,9,4,16]
//array1[i]*array1[i]===array2[j])
//if j === array2.length-1 and cannot find square in array 2 then it will return false

// function checkingSquare(array1,array2){
//     for(let i=0;i<array1.length;i++){
//         let isSquare=false; //flag by default
//         for(let j=0;j<array2.length;j++){
//             if(array1[i]*array1[i]===array2[j]){
//                 isSquare=true;
//             }
//             if(j === array2.length-1){
//                 if(!isSquare){
//                 return false;
//             }
//             }
//         }
//     }
//     return true;
// }
// const result= checkingSquare([1,2,3,4],[1,9,4,16]);
// console.log(result)

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



//Sorting using Rescursive function
//Array=[2,3,1,4]
//
// let Myarray=[2,3,1,4];
// let myNewList=[];
// let i=0;
// let j=1;

// function isSorted(array){
//     for(let i=0;i<array.length;i++){
//         if(array[i]>array[i+1]){
//             return false;
//         }
//     }
//    return true
// }

// function checkSorting(array){
//     if(isSorted(array)){
//         myNewList= array;
//         return;
//     }
    
//     else if(array[i]<array[j]){
//         i++;
//         j++;
//         checkSorting(array)
//     }else{
//         [array[i],array[j]]=[array[j],array[i]]
//         i=0;
//         j=1;
//         checkSorting(array)
//     }
// }
// checkSorting(Myarray);
// console.log(myNewList);

//MergeSortedArrays

