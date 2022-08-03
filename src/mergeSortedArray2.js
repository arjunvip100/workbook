function MergeSortedArrays(array1, array2){
    let Merged=[]

    for(i=0;i<array1.length;i++){
        Merged[i]=array1[i];
    }
    for(i=0;i<array2.length;i++){
        Merged[array1.length+i]=array2[i];
}
console.log(Merged)

}
const result=MergeSortedArrays([0,3,4,31],[4,6,30]);
console.log(MergeSortedArrays);
