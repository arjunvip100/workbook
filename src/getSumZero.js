//checking sum zero
function getSumzero(arr){
    for(i=0;i<arr.length;i++){
        for(j=1;j<arr.length;j++)
       if(arr[i]+arr[j]===0)
       return [arr[i],arr[j]];
    }
    
}
let result=getSumzero([-5,-4,-3,-2,0,6,4,8]);
console.log(result)