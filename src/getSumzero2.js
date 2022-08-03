function getSumzero(arr){
   let left=0;
   let right=arr.length-1;

   while(left<right){
    sum=arr[left]+arr[right];
   
    if(sum===0){
        return [arr[left],arr[right]];
    } else if(sum > 0){
        right--;
    }else{
        left++;
    }
   }
    }
const result=getSumzero([-5,-4,-3,-2,0,6,4,8]);
console.log(result);