//[1,2,3,4,3,5,4,6,7,8] Total elements==> 10
//num=4
//sum=25
// Conditions
// if num>array=>error
// 10-4+1=7 No. of loops

function countLargest(array,num){
    if(num>array){
        throw new Error("Number exceeds the array")
    }else{
        let max=0;
        for(let i=0;i<array.length-num+1;i++){
            let tmp=0;
            for(let j=1;j<num;j++){
                tmp+=array[i+j];
            }
            if(tmp>max){
                max=tmp;
            }
        }
        return max;
    }
}
const result=countLargest([1,2,3,4,3,5,4,6,7,8],4);
console.log(result);