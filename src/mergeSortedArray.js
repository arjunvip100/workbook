function MergeSortedArrays(array1, array2){
    let mergedArray=[];
    array1item=array1[0];
    array2item=array2[0];
    let i=1;
    let j=1;
    while(array1item||array2item){
        console.log(array1item,array2item)
        if(!array2item || array1item<array2item){
            mergedArray.push(array1item);
            array1item=array1[i];
            i++;
            
        }else{
            mergedArray.push(array2item);
            array2item=array2[j];
            j++;
        }

    }
return mergedArray;
    

}
const result=MergeSortedArrays([0,3,4,31],[4,6,30]);
console.log(result);